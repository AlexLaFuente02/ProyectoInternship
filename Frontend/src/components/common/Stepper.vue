<template >
    <div class="container__stepper">
        <div class="container__items">
            <div class="stepper__item" v-for="step in steps" :key="step.id" >
              <div class="item__number">
                {{step.id}}
              </div>
              <div class="item__title">{{step.title}}</div>
            </div>
        </div>
    </div>
</template>
<script>
//Llamar al store del modo oscuro
import { useThemeStore } from "@/store/common/useThemeStore";
export default {
    data(){
        return{
            currentStep: 1,
            steps: [
                {
                    id: 1,
                    component: 'StudentValidationRegister',
                    title: 'Validación',
                },
                {
                    id: 2,
                    component: 'StudentFormRegister',
                    title: 'Formulario',
                },
            ],
        }
    },
    methods: {
        nextStep(){
            this.currentStep++;
        },
        prevStep(){
            this.currentStep--;
        },
        currentStepColor(id){
            if(id === this.currentStep){
                return 'activeStepColor';
            }else if(id < this.currentStep){
                return 'inactiveStepColor';
            }
        }
    },
    computed: {
        //Obtener el modo oscuro
        darkTheme(){
            return useThemeStore().darkTheme;
        }
    },
    //Verificar si el modo oscuro esta activado
    watch: {
        darkTheme(){
            if(this.darkTheme){
                document.body.classList.add('dark-theme');
            }else{
                document.body.classList.remove('dark-theme');
            }
        }
    },
}
</script>
<style >
.container__stepper{
    padding: 1rem;
    border-radius: 10px;
    margin-bottom: 1rem;
    background: #fff;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    position: relative;
}
/*Estilos para el modo oscuro*/
.dark-theme .container__stepper{
    background: #434B54;
}
.container__items{
  padding: 0%;
  margin: 0%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    z-index: 1;
}


.stepper__item{
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 100%;
    position: relative;
    justify-content: center;
    flex: 1 1 auto;
}
.item__number{
    width: 50px;
    height: 50px;
    display: grid;
    place-items: center;
    /*color: #fff;*/
    border: 2px solid #000;
    border-radius: 100%;
    position: relative;
    /*background: #0d6efd;*/
    z-index: 1;
}
/*Estilos para el item en modo oscuro*/
.dark-theme .item__number{
    /*background: #Ffc107;
    color: #000;*/
    
}




.activeStepColor{
    background: #0d6efd;
}
/*Estilos para el item en modo oscuro*/
.dark-theme .activeStepColor{
    background: #Ffc107;
}
.inactiveStepColor{
    background: #6c757d;
}
/*Estilos para el item en modo oscuro*/
.dark-theme .inactiveStepColor{
    background: #6c757d;
}
</style>
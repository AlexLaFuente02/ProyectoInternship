<template>
    <div class="container">
      <div class="container__stepper">
        <div class="container__items">
            <div class="stepper__item" v-for="step in steps" :key="step.id" :class="{'active': currentStep === step.id}">  
              <div class="item__number" @click="currentStep = step.id">
                {{step.id}}
              </div>
              <div class="item__title">{{step.title}}</div>
            </div>
        </div>
    </div>
      <div class="container__content">
        <component :is="steps[currentStep - 1].component"></component>
      </div>
      <div class="controls">
        <button class="btn btn-primary" @click="prevStep" :disabled="currentStep === 1">Anterior</button>
        <button class="btn btn-primary" @click="nextStep" v-if="currentStep !== steps.length">Siguiente</button>
        <button class="btn btn-primary" v-else>Enviar</button>
      </div>
    </div>
</template>
<script>
import FooterCommon from '../../components/common/FooterCommon.vue';
import NavbarCommon from '../../components/common/NavbarCommon.vue';
import StudentFormRegister from '../../components/student/StudentFormRegister.vue';
import StudentValidationRegister from '../../components/student/StudentValidationRegister.vue';
import { useThemeStore } from "@/store/common/useThemeStore";
export default {
    components:{
        NavbarCommon,
        FooterCommon,
        StudentFormRegister,
        StudentValidationRegister
    },
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
        }
    },
    computed: {
        //Obtener el modo oscuro
        darkTheme(){
            return useThemeStore().darkTheme;
        }
    },
}
</script>
<style>
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
    border: 2px solid #000;
    border-radius: 100%;
    position: relative;
    z-index: 1;
}
.stepper__item.active .item__number{
    color: #fff;
    background: #0d6efd;
}
/*Estilos para el item en modo oscuro*/
.dark-theme .stepper__item.active .item__number{
    color: #000;
    background: #Ffc107;
}

</style>


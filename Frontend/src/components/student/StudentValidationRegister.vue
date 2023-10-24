
<template>
    <div class="formVue">
        <div class="form__tittle">
            <h1>REGISTRO DE ESTUDIANTE</h1>
        </div>
        <div class="form__description">
            <p>¡Bienvenido a Internship by Cato! Antes de continuar con el registro, necesitamos verifcar que eres un
estudiante o graduado de la Universidad Católica Boliviana (UCB). Por favor, proporciona tu dirección de
correo electrónico de la UCB y confírmala.</p>
        </div>
        <div class="form__container">
            <div class="container__field">
                <label>Correo Electrónico</label>
                <input placeholder="Introduzca su correo electrónico de la UCB"
                
                v-model="formStore.ucbEmail" type="email" class="field">
            </div>
            <br>
            <div class="form__button">
                <button type="button" class="btn btn-primary" @click="sendEmail" v-if="send"
            >Enviar código</button>
            <h6 v-if="!send">{{ this.seconds}} segundos para volver a enviar el código
            </h6>
            </div>
            <br>
            <div class="container__field">
                <label>Código de verificación</label>
                <input placeholder="Introduzca el código de verificación"
                v-model="formStore.code" type="number" class="field" pattern=".*">
            </div>
        </div>
    </div>
</template>
<script>
import { useFormRegisterStore } from "@/store/student/formRegisterStore";
export default {
    components:{
    },
    data(){
        return{
            formStore: useFormRegisterStore(),
            send:true,
            seconds: 15,
            ucbEmailForm: '',
            codeForm: '',
        }
    },
    methods: {
        sendEmail(){
            //Enviar código
            this.send = false;
            //Contador
            let interval = setInterval(() => {
                this.seconds--;
                if(this.seconds === 0){
                    clearInterval(interval);
                    this.seconds = 15;
                    this.send = true;
                }
            }, 1000);
        },
    },

}
</script>
<style>
.formVue{
    background-color: #FFF;
    padding: 5% 10%;
    border-radius: 10px;
}

/*Modo oscuro*/
.dark-theme .formVue{
    background-color: #434B54;
}

.form__tittle{
    display: flex;
    justify-content: center;
    align-items: center;
}
.form__tittle h1{
    font-size: 1.5rem;
    text-align: center;
}
.form__description{
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 5%;
}

.form__container {
    display: flex;
    flex-direction: column;
    justify-content: center;
}
.form__button{
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: center;
    gap: 1.2rem;
}
.container__field{
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
}
.container__field label{
    font-size: 1.25rem;
    font-weight: 700;
    margin-bottom: 5px;
}
 
    
</style>
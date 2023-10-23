
<template>
    <!--Form de registro de Estudiantes-->
    <div class="formVue">
        <div class="form__tittle">
            <h6>REGISTRO DE ESTUDIANTE</h6>
        </div>
        <div class="form__description">
            <p>¡Bienvenido a Internship by Cato! Antes de continuar con el registro, necesitamos verifcar que eres un
estudiante o graduado de la Universidad Católica Boliviana (UCB). Por favor, proporciona tu dirección de
correo electrónico de la UCB y confírmala.</p>
        </div>
        <div class="form__container">
            <InputText title="Correo Electrónico" placeholder="Ingrese su correo electrónico" type="email" />
            <br>
            <button type="button" class="btn btn-primary">Continuar</button>
            <br>
            <InputText title="Código de verificación" placeholder="Introduzca su código de verificación" type="number"/>
        </div>
    </div>
</template>
<script>
import InputText from '../common/InputText.vue';
export default {
    components:{
        InputText
    }
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
.form__tittle h6{
    font-size: 1.5rem;
    text-align: center;
}
.form__description{
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 5%;
}
.form__container{
    display: flex;
    flex-direction: column;
    justify-content: center;
}
.button{
    width: 10%;
}
    
</style>
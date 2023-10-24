<template>
    <!--Form de registro de Estudiantes-->
    <div class="formVue">
        <div class="form__tittle">
            <h1>REGISTRO DE ESTUDIANTE</h1>
        </div>
        <div class="form__description">
            <p>Estamos emocionados de ayudarte a encontrar oportunidades profesionales. Por favor,
completa el siguiente formulario para registrarte como estudiante o graduado.</p>
        </div>
        <div class="form__container">
            <div class="container__field">
                <label>Nombre *:</label>
                <input placeholder="Introduzca su nombre"
                
                v-model="formStore.name" type="text" class="field">
            </div>
            <div class="container__field">
                <label>Primer Apellido *:</label>
                <input placeholder="Introduzca su primer apellido"
                
                v-model="formStore.firstLastName" type="text" class="field">
            </div>
            <div class="container__field">
                <label>Segundo Apellido *:</label>
                <input placeholder="Introduzca su segundo apellido"
                
                v-model="formStore.secondLastName" type="text" class="field">
            </div>
            <div class="container__field">
                <label>Cédula de Identidad *:</label>
                <input placeholder="Introduzca su cédula de identidad"
                
                v-model="formStore.documentNumber" type="text" class="field">
            </div>

            <!--Agregar para selcionar el complemento-->
            
            <!--Agregar el check de validacion-->


           
            
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
        }
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
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
            <!--INPUT-->
            <div class="container__field">
                <label>Cédula de Identidad *:</label>
                <input placeholder="Introduzca su cédula de identidad"
                
                v-model="formStore.documentNumber" type="text" class="field">
            </div>
            <div class="container__select">
                <label>Sede *:</label>
                <Dropdown :options="this.listCampus" :selectedValue="formStore.campus" placeholderValue="Seleccione una sede"
                @option-selected="updateCampus" />
            </div>
            <div class="container__select">
                <label>Carrera *:</label>
                <Dropdown :options="this.listCareers" :selectedValue="formStore.career" placeholderValue="Seleccione una carrera"
                @option-selected="updateCareer" />
            </div>
        </div>
    </div>
</template>
<script>
import { useFormRegisterStore } from "@/store/student/formRegisterStore";
import { useCampusStore } from "@/store/common/campusStore";
import { useCareersStore } from "@/store/common/careersStore";
import Dropdown from '../common/Dropdown.vue';
export default {
    components:{
        Dropdown
    },
    data(){
        return{
            formStore: useFormRegisterStore(),
            campusStore: useCampusStore(),
            careerStore: useCareersStore(),
            listCampus: [],
            listCareers: [],
        }
    },
    methods:{
        //Obtener todas las sedes
        async getCampus(){
            await this.campusStore.loadCampuse();
            this.listCampus= this.campusStore.campuses.result;
            //Convertir el array de sedes en un array de objetos con id y label
            this.listCampus = this.listCampus.map((campus) => {
                return {
                    id: campus.id,
                    label: campus.nombresede,
                };
            });
        },
        //Obtener todas las carreras
        async getCareers(){
            await this.careerStore.loadCareer();
            this.listCareers= this.careerStore.careers;
            //Convertir el array de carreras en un array de objetos con id y label
            this.listCareers = this.listCareers.map((career) => {
                return {
                    id: career.id,
                    label: career.nombrecarrera,
                };
            });
            console.log(this.careerStore);
        },
        updateCampus (option) {
            this.formStore.campus = option.label;
        },
        updateCareer (option) {
            this.formStore.career = option.label;
        },
    },
    //Tercer paso, obtener todas las sedes cuando se crea el componente
    created(){
        this.getCampus();
        this.getCareers();
    }
    
}
</script>
<style scoped>
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

/*CSS del input*/
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
/*Fin del css*/
.container__select{
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
}
.container__select label{
    font-size: 1.25rem;
    font-weight: 700;
    margin-bottom: 5px;
}
</style>
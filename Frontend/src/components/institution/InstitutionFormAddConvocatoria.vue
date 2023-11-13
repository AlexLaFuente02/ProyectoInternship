<template>
  <!-- Formulario de registro de estudiantes -->
  <div class="formVue">
    <div class="form__tittle">
      <h1>Solicitud agregar convocatoria</h1>
    </div>
    <div class="form__description">
      <p>Por favor complete los campos requeridos:</p>
    </div>
    <div class="container__select">
      <div class="select__container">
        <label for="">Area de pasantía *:</label>
        <input
          type="text"
          id="option1"
          v-model="newInternship.areapasantia"
          placeholder="Ingrese el área de la pasantía"
          autofocus
        />
        <!-- <Dropdown
          :options="this.listArea"
          :selectedValue="formStore.area"
          placeholderValue="Seleccione el área de la pasantía"
          @option-selected="updateArea"
          class="dropdown-wide"
        /> -->
      </div>
    </div>
    <div class="form__container">
      <div class="container__field">
        <div class="field__container">
          <label for="">Funciones o actividades: *:</label>
          <textarea
            name=""
            id=""
            cols="30"
            rows="5"
            placeholder="Descripción funciones o actividades"
            v-model="newInternship.descripcionfunciones"
            type="text"
            class="field"
          ></textarea>
          <!-- <input
            placeholder="Descripción actividades"
            v-model="formStore.acti"
            type="text"
            class="field"
          /> -->
        </div>
      </div>
      <div class="container__field">
        <div class="field__container">
          <label for="">Requisitos mínimos: *</label>
          <textarea
            name=""
            id=""
            cols="30"
            rows="5"
            placeholder="Descripción requisitos mínimos"
            v-model="newInternship.requisitoscompetencias"
            type="text"
            class="field"
          ></textarea>
          <!-- <input
            placeholder="Descripción requisitos mínimos"
            v-model="formStore.requi"
            type="text"
            class="field"
          /> -->
        </div>
      </div>
      <div class="field__container">
        <label cx>Horario:</label>
        <div class="checkbox-container">
          <input
            type="radio"
            id="option1"
            v-model="newInternship.horario_inicio"
            value="option1"
          />
          <label for="option1">Tiempo completo</label>
          <input
            type="radio"
            id="option2"
            v-model="formStore.selectedOption"
            value="option2"
          />
          <label for="option2">Medio tiempo</label>
        </div>
      </div>

      <div class="container__select">
        <div class="select__container">
          <label for="">Tiempo requerido *:</label>
          <Dropdown
            :options="this.listTime"
            :selectedValue="formStore.tiempo"
            placeholderValue="Seleccione el tiempo requerido"
            @option-selected="updateTiempo"
            class="dropdown-wide"
          />
        </div>
      </div>

      <div class="container__field">
        <div class="field__container">
          <label for="">Fecha de selecci&oacute;n de pasante:</label>
          <input type="date" v-model="formStore.birthDate" class="field-wide" />
        </div>
      </div>

      <div class="container__field">
        <div class="field__container">
          <label for="">Fecha de solicitud:</label>
          <input
            type="date"
            :v-model="newInternship.fechasolicitud"
            class="field-wide"
            disabled
          />
        </div>
      </div>

      <div class="buttons">
        <div class="button-left">
          <Button
            text="Volver atras"
            :color="0"
            :disabled="false"
            @option-selected="inicio"
          ></Button>
        </div>
        <div class="button-right">
          <Button
            text="Enviar solicitud"
            :color="1"
            :disabled="false"
            @option-selected="sendRequest"
          ></Button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Button from "@/components/common/Button.vue";
import Dropdown from "../common/Dropdown.vue";
import { InternshipRegisterStore } from "../../store/institution/internshipRegisterStore";
import { createInternship } from "../../services/institutionService";
export default {
  components: {
    Button,
    Dropdown,
  },
  data() {
    return {
      formStore: InternshipRegisterStore(),
      newInternship: {},
      listTime: ["Semestral", "Trimestral", "Anual"],
      selectedOption: null,
    };
  },
  methods: {
    getCurrentDate() {
      var date = new Date();
      var year = date.getFullYear();
      var month = date.getMonth();
      var day = date.getDate();
      if (day < 10) day = "0" + day;
      if (month < 10) month = "0" + month;
      return day + "/" + month + "/" + year;
    },
    async sendRequest() {
      this.newInternship = this.formStore.$state;
      this.newInternship.fechasolicitud = this.getCurrentDate();
      await createInternship(this.newInternship);
      console.log(this.newInternship);
    },
    //Obtener todas las sedes
    // async getCampus() {
    //   await this.campusStore.loadCampuse();
    //   this.listCampus = this.campusStore.campuses.result;
    //   //Convertir el array de sedes en un array de objetos con id y label
    //   this.listCampus = this.listCampus.map((campus) => {
    //     return {
    //       id: campus.id,
    //       label: campus.nombresede,
    //     };
    //   });
    // },
    // //Obtener todas las carreras
    // async getCareers() {
    //   await this.careerStore.loadCareer();
    //   this.listCareers = this.careerStore.careers;
    //   //Convertir el array de carreras en un array de objetos con id y label
    //   this.listCareers = this.listCareers.map((career) => {
    //     return {
    //       id: career.id,
    //       label: career.nombrecarrera,
    //     };
    //   });
    //   console.log(this.careerStore);
    // },
    // updateCampus(option) {
    //   this.formStore.campus = option.label;
    // },
    // updateCareer(option) {
    //   this.formStore.career = option.label;
    // },
  },
  //Tercer paso, obtener todas las sedes cuando se crea el componente
  //   created() {
  //     this.getCurrentDate();
  //   },
};
</script>
<style scoped>
.buttons {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
}

.checkbox-container {
  display: flex;
}

textarea {
  resize: none;
}

.button-left,
.button-right {
  width: 48%; /* Establece un ancho para cada botón */
}

.button-left {
  float: left; /* Alinea el botón "Volver atrás" a la izquierda */
}

.button-right {
  float: right; /* Alinea el botón "Enviar solicitud" a la derecha */
}

.formVue {
  background-color: #fff;
  padding: 5% 10%;
  border-radius: 10px;
}

/*Modo oscuro*/
.dark-theme .formVue {
  background-color: #434b54;
}

.form__tittle {
  display: flex;
  justify-content: center;
  align-items: center;
}
.form__tittle h1 {
  font-size: 1.5rem;
  text-align: center;
}
.form__description {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 5%;
}

/*CSS del input*/
.container__field {
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
}
.container__field label {
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 5px;
}
/*Fin del css*/
.container__select {
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
}
.container__select label {
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 5px;
}
/* Modificación para la colocación de etiquetas y campos en línea */
.field__container {
  display: flex;
  align-items: center;
}

.field__container label {
  width: 30%;
  margin-right: 20px;
}

.field-wide {
  flex: 1; /* El campo de entrada ocupará el espacio restante */
  overflow-x: auto; /* Hacer que el campo de entrada haga scroll si el texto es demasiado largo */
}
/**texte de seleccion */
.select__container {
  display: flex;
  align-items: center;
}

.select__container label {
  width: 30%;
  margin-right: 20px;
}

.dropdown-wide {
  flex: 1;
  overflow-x: auto;
}
</style>

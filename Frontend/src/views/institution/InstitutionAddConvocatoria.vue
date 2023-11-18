<template>
  <div class="addConvocatoria-form">
    <div class="form-title">
      <h1>Solicitud Agregar Convocatoria</h1>
    </div>
    <div class="form-description">
      <h6>Por favor, complete los siguientes campos requeridos:</h6>
    </div>
    <div class="field-container">
      <div class="form-label">
        <label for="internshipAreaField"
          >Area de pasantía <strong>*</strong>:</label
        >
      </div>
      <div class="form-field">
        <input
          type="text"
          name="internshipAreaField"
          id="internshipAreaField"
          v-model="formStore.areapasantia"
          placeholder="Ingrese el área de la pasantía"
          autofocus
        />
      </div>
    </div>
    <div class="field-container">
      <div class="form-label">
        <label for="internshipFunctionsField"
          >Funciones o actividades: <strong>*</strong>:</label
        >
      </div>
      <div class="form-field">
        <textarea
          name="internshipFunctionsField"
          id="internshipFunctionsField"
          cols="30"
          rows="5"
          placeholder="Ingrese la descripción de las funciones o actividades de la pasantía"
          v-model="formStore.descripcionfunciones"
        ></textarea>
      </div>
    </div>
    <div class="field-container">
      <div class="form-label">
        <label for="internshipRequirementsField"
          >Requisitos mínimos <strong>*</strong>:</label
        >
      </div>
      <div class="form-field">
        <textarea
          name="internshipRequirementsField"
          id="internshipRequirementsField"
          cols="30"
          rows="5"
          placeholder="Ingrese la descripción de los requisitos mínimos de la pasantía"
          v-model="formStore.requisitoscompetencias"
        ></textarea>
      </div>
    </div>
    <div class="field-container">
      <div class="form-label">
        <label for="internshipBeginHourField"
          >Horario de inicio <strong>*</strong>:</label
        >
      </div>
      <div class="form-field">
        <input
          type="time"
          name="internshipBeginHourField"
          id="internshipBeginHourField"
          v-model="formStore.horario_inicio"
        />
      </div>
      <div class="form-label">
        <label for="internshipEndHourField"
          >Horario de fin <strong>*</strong>:</label
        >
      </div>
      <div class="form-field">
        <input
          type="time"
          name="internshipEndHourField"
          id="internshipEndHourField"
          v-model="formStore.horario_fin"
        />
      </div>
    </div>
    <div class="field-container">
      <div class="form-label">
        <label for="internshipSelectionDateField"
          >Fecha de selecci&oacute;n de pasante <strong>*</strong>:</label
        >
      </div>
      <div class="form-field">
        <input
          type="date"
          name="internshipSelectionDateField"
          id="internshipSelectionDateField"
          v-model="formStore.fechaseleccionpasante"
        />
      </div>
    </div>
    <div class="field-container">
      <div class="form-label">
        <label>Fecha de solicitud:</label>
      </div>
      <div class="form-field">
        <h5>{{ getCurrentDate() }}</h5>
      </div>
    </div>
    <div class="buttons">
      <div class="button-left">
        <Button
          text="Volver atrás"
          :color="0"
          :disabled="false"
          @option-selected="goBack"
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
</template>

<script>
import Button from "@/components/common/Button.vue";
import { InternshipRegisterStore } from "../../store/institution/internshipRegisterStore";
import { createInternship } from "../../services/institutionService";
export default {
  components: {
    Button,
  },
  data() {
    return {
      formStore: InternshipRegisterStore(),
      newInternship: {},
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
      return year + "-" + month + "-" + day;
    },
    goBack() {
      this.$router.push({ name: "InstitutionPrincipalPage" });
    },
    async sendRequest() {
      this.newInternship = this.formStore.$state;
      this.formStore.$state.fechasolicitud = this.getCurrentDate();
      this.newInternship.estadoconvocatoria.id = 2;
      this.newInternship.institucion.id = 1;
      this.newInternship.tiempoacumplir.id = 2;
      const response = await createInternship(this.newInternship);
      console.log(response);
    },
  },
};
</script>

<style scoped>
input[type="text"] {
  width: 100%;
}

textarea {
  width: 100%;
  resize: none;
}

strong {
  color: red;
}

.addConvocatoria-form {
  background-color: #fff;
  padding: 5% 10%;
  border-radius: 10px;
}

/* DARK THEME */
.dark-theme .addConvocatoria-form {
  background-color: #434b54;
}

.form-title,
.form-description {
  text-align: center;
}

.form-description {
  margin-bottom: 6%;
}

.field-container {
  margin-bottom: 3%;
}

.form-label {
  margin-bottom: 1%;
}

.field-container:nth-child(6),
.field-container:nth-child(7),
.field-container:nth-child(8) {
  display: flex;
  justify-content: space-between;
}

.form-field {
  text-align: center;
}

@media screen and (max-width: 1025px) {
  .field-container:nth-child(6),
  .field-container:nth-child(7),
  .field-container:nth-child(8) {
    display: block;
  }
}
</style>

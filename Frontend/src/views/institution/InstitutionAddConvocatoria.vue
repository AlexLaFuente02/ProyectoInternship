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
          v-model="internshipRegisterStore.areapasantia"
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
          v-model="internshipRegisterStore.descripcionfunciones"
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
          v-model="internshipRegisterStore.requisitoscompetencias"
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
        <Time
          name="internshipBeginHourField"
          id="internshipBeginHourField"
          @time-emit="setBeginTimeInput"
        />
      </div>
      <div class="form-label">
        <label for="internshipEndHourField"
          >Horario de fin <strong>*</strong>:</label
        >
      </div>
      <div class="form-field">
        <Time
          name="internshipEndHourField"
          id="internshipEndHourField"
          @time-emit="setEndTimeInput"
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
        <Calendar
          name="internshipSelectionDateField"
          id="internshipSelectionDateField"
          @date-emit="setDateInput"
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
    <div class="internship-message">
      <span v-text="internshipMessages.errorMessage"></span>
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
import Calendar from "@/components/common/Calendar.vue";
import Time from "@/components/common/TimePicker.vue";
import { InternshipRegisterStore } from "../../store/institution/internshipRegisterStore";
import { createInternship } from "../../services/institutionService";
export default {
  components: {
    Button,
    Calendar,
    Time,
  },
  data() {
    return {
      internshipRegisterStore: InternshipRegisterStore(),
      newInternship: {},
      internshipMessages: {
        errorMessage: "",
      },
      formComponents: {
        beginTimeInput: "",
        endTimeInput: "",
        dateInput: "",
      },
    };
  },
  methods: {
    getCurrentDate() {
      var date = new Date();
      var year = date.getFullYear();
      var month = date.getMonth() + 1;
      var day = date.getDate();
      if (day < 10) day = "0" + day;
      if (month < 10) month = "0" + month;
      return year + "-" + month + "-" + day;
    },
    setBeginTimeInput(beginTimeValue) {
      var hours = beginTimeValue.getHours();
      var minutes = beginTimeValue.getMinutes();
      if (hours < 10) hours = "0" + hours;
      if (minutes < 10) minutes = "0" + minutes;
      this.formComponents.beginTimeInput = hours + ":" + minutes;
    },
    setEndTimeInput(endTimeValue) {
      var hours = endTimeValue.getHours();
      var minutes = endTimeValue.getMinutes();
      if (hours < 10) hours = "0" + hours;
      if (minutes < 10) minutes = "0" + minutes;
      this.formComponents.endTimeInput = hours + ":" + minutes;
    },
    setDateInput(dateValue) {
      this.formComponents.dateInput = dateValue.toISOString().split("T")[0];
    },
    goBack() {
      this.$router.push({ name: "InstitutionPrincipalPage" });
    },
    async sendRequest() {
      this.newInternship = this.internshipRegisterStore.$state;
      this.internshipRegisterStore.$state.horario_inicio = this.formComponents.beginTimeInput;
      this.internshipRegisterStore.$state.horario_fin = this.formComponents.endTimeInput;
      this.internshipRegisterStore.$state.fechaseleccionpasante = this.formComponents.dateInput;
      this.internshipRegisterStore.$state.fechasolicitud = this.getCurrentDate();
      if (this.internshipRegisterStore.$state.areapasantia === "") {
        this.internshipMessages.errorMessage =
          "Error, ingrese el área de la pasantía por favor.";
      } else if (this.internshipRegisterStore.$state.descripcionfunciones === "") {
        this.internshipMessages.errorMessage =
          "Error, ingrese las funciones o actividades de la pasantía por favor.";
      } else if (this.internshipRegisterStore.$state.requisitoscompetencias === "") {
        this.internshipMessages.errorMessage =
          "Error, ingrese los requisitos mínimos de la pasantía por favor.";
      } else if (this.internshipRegisterStore.$state.horario_inicio === "") {
        this.internshipMessages.errorMessage =
          "Error, ingrese la hora de inicio de la pasantía por favor.";
      } else if (this.internshipRegisterStore.$state.horario_fin === "") {
        this.internshipMessages.errorMessage =
          "Error, ingrese la hora de finalización de la pasantía por favor.";
      } else if (this.internshipRegisterStore.$state.fechaseleccionpasante === "") {
        this.internshipMessages.errorMessage =
          "Error, ingrese la fecha de selección del pasante por favor.";
      } else {
        this.internshipMessages.errorMessage = "";
        this.newInternship.estadoconvocatoria.id = 2;
        this.newInternship.institucion.id = $cookies.get("institutionID");
        this.newInternship.tiempoacumplir.id = 2;
        const response = await createInternship(this.newInternship);
        console.log(response);
        if (response.code === "C-0000") {
          this.showMessage("¡Éxito!", response.message, "success");
        } else {
          this.showMessage("Error", response.message, "error");
        }
        this.goBack();
      }
    },
    showMessage(titleMessage, textMessage, iconMessage) {
      this.$swal({
        title: titleMessage,
        text: textMessage,
        icon: iconMessage,
        showConfirmButton: false,
        timer: 5000,
        showClass: {
          popup: "animate__animated animate__fadeInDown",
        },
        hideClass: {
          popup: "animate__animated animate__fadeOutUp",
        },
      });
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

.internship-message {
  text-align: center;
  margin-bottom: 3%;
}

span {
  color: red;
  font-size: 1.5em;
}

.buttons {
  display: flex;
  justify-content: space-between;
  width: 70%;
  margin: 0 auto;
}

.dark-theme span {
  color: rgb(255, 105, 105);
}

@media screen and (max-width: 1025px) {
  .field-container:nth-child(6),
  .field-container:nth-child(7),
  .field-container:nth-child(8) {
    display: block;
  }

  span {
    font-size: 1.2em;
  }
}
</style>

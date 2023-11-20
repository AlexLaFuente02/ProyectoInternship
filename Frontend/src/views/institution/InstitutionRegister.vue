<template>
  <div class="formVue">
    <div class="form__tittle">
      <h1>SOLICITUD ADICI&Oacute;N NUEVA INSTITUCI&Oacute;N</h1>
    </div>
    <div class="form__description">
      <h5>Por favor complete el formulario a continuaci&oacute;n:</h5>
    </div>
    <div class="form__container">
      <div class="form__tittle">
        <h1>Datos generales</h1>
      </div>
      <div class="container__field">
        <label for="">Nombre de la Instituci&oacute;n <strong>*</strong>:</label>
        <input
          type="text"
          name=""
          id=""
          placeholder="Introduzca el nombre"
          v-model="formStore.nombreinstitucion"
        />
      </div>
      <div class="container__field">
        <label for="">Reseña de la Instituci&oacute;n <strong>*</strong>:</label>
        <input
          type="text"
          name=""
          id=""
          placeholder="Introduzca su segundo apellido"
          v-model="formStore.reseniainstitucion"
        />
      </div>
      <div class="container__field2">
        <label for="">Logo de la Instituci&oacute;n <strong>*</strong>:</label>
        <input
          type="file"
          name=""
          id=""
          @change="onFileChange"
          accept="image/*"
        />
      </div>
      <div class="container__field">
        <label for="">Sector al que pertenece <strong>*</strong>:</label>
        <input
          type="text"
          name=""
          id=""
          placeholder="Introduzca el sector al que pertenece"
          v-model="formStore.sector"
        />
      </div>
      <div class="form__tittle">
        <h1>Datos del contacto</h1>
      </div>
      <div class="container__field">
        <label for="">Nombre del contacto <strong>*</strong>:</label>
        <input
          type="text"
          name=""
          id=""
          placeholder="Introduzca el nombre del contacto"
          v-model="formStore.nombrecontacto"
        />
      </div>
      <div class="container__field">
        <label for="">Correo electr&oacute;nico <strong>*</strong>:</label>
        <input
          type="text"
          name=""
          id=""
          placeholder="Introduzca el correo electronico"
          v-model="formStore.correocontacto"
        />
      </div>
      <div class="container__field">
        <label for="">Celular del contacto <strong>*</strong>:</label>
        <input
          type="text"
          name=""
          id=""
          placeholder="Introduzca el celular de contacto"
          v-model="formStore.celularcontacto"
        />
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
  </div>
</template>
<script>
import Dropdown from "@/components/common/Dropdown.vue";
import Button from "@/components/common/Button.vue";
import { InstitutionRegisterStore } from "../../store/institution/InstitutionRegisterStore";
export default {
  components: {
    Button,
    Dropdown,
  },
  data() {
    return {
      formStore: InstitutionRegisterStore(),
      newInstitution: {},
    };
  },
  methods: {
    toggleDarkMode() {
      const darkModeStore = useThemeStore();
      this.isDarkMode = !this.isDarkMode;
      darkModeStore.toggleDarkMode();
      console.log(darkModeStore.$event);
    },
    goBack() {
      this.$router.push({ name: "PrincipalPage" });
    },
    sendRequest() {
      this.newInstitution = this.formStore.$state;
      console.log(this.newInstitution);
    },
  },

  //subir archivo joijo
  onFileChange(e) {
    const file = e.target.files[0];
    if (file) {
      // Aquí puedes procesar el archivo
      // Por ejemplo, puedes mostrar una vista previa de la imagen seleccionada
      this.showPreview(file);
    }
  },
  showPreview(file) {
    // Lógica para mostrar una vista previa de la imagen
    // Podría ser asignar el archivo a una propiedad de datos y mostrar la vista previa en tu template
  },
};
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
.container__field2 {
  display: flex;
  border: 0px solid #ccc;
  flex-direction: column;
  margin-bottom: 10px;
}
.container__field2 label {
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
</style>

<template>
  <div class="main-container">
    <h1>TUS PASANTÍAS</h1>
    <h5>Te mostramos tus pasantías activas en la plataforma.</h5>
    <div class="internship-container">
      <div v-if="everyInternshipsAreLoaded">
        <div
          class="internship-information-grid"
          v-for="internship in listInternship"
          :key="internship.id"
        >
          <img
            src="https://i.pinimg.com/564x/0f/76/1c/0f761c01d1fb284eb429061e577aa623.jpg"
            alt="Logo de la Empresa"
          />
          <div class="information-grid">
            <h4 class="information-title">Detalles de la Pasantía:</h4>
            <div class="i_details">
              <ul class="internship-details">
                <li><strong>Ubicación: </strong>Ubicación de la empresa</li>
                <li><strong>Duración: </strong>Duración de la pasantía</li>
                <li><strong>Fecha de Inicio: </strong>Fecha de inicio</li>
                <li>
                  <strong>Fecha de Finalización: </strong>Fecha de finalización
                </li>
                <li>
                  <strong>Tipo de Pasantía: </strong>Pasantía de Desarrollo Web
                  Backend
                </li>
                <li><strong>Tecnologías: </strong>Spring, Java, SQL, etc.</li>
                <li><strong>Ciudad: </strong>La Paz</li>
              </ul>
            </div>
          </div>
          <div class="more-information-button">
            <router-link
              class="link"
              to="/institution/InternshipApplicationTray"
            >
              <ButtonVue
                text="Bandeja de Solicitudes"
                :color="3"
                :disabled="false"
              />
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { UseUseiInternshipStore } from "@/store/usei/UseiInternshipStore";
import { useLoaderStore } from "@/store/common/loaderStore";
import ButtonVue from "../../components/common/Button.vue";
export default {
  name: "institutionInternshipFilterPage",
  components: {
    ButtonVue,
  },
  data() {
    return {
      listInternship: [],
      everyInternshipsAreLoaded: false,
    };
  },
  methods: {
    async getData() {
      useLoaderStore().activateLoader();
      await UseUseiInternshipStore().LoadInternship();
      this.listInternship = UseUseiInternshipStore().InternshipList.result;
      this.everyInternshipsAreLoaded = true;
      useLoaderStore().desactivateLoader();
      console.log(this.listInternship);
    },
  },
  created() {
    this.getData();
  },
};
</script>

<style scoped>
.main-container {
  margin: 3% auto;
  width: 90%;
}

img {
  width: 100%;
}

.link {
  text-decoration: none;
}

.internship-container {
  display: grid;
  grid-template-rows: auto;
  grid-template-columns: auto;
  background-color: rgb(255, 255, 255);
  text-align: center;
  border: 2px solid black;
  padding-bottom: 2%;
}

.internship-information-grid {
  display: grid;
  grid-template-rows: auto;
  grid-template-columns: 20% 55% auto;
  align-items: center;
  margin: 2% auto 0;
  width: 92%;
  border: 2px solid black;
}

.information-title {
  margin: 2% auto 0;
}

.i_details {
  width: 70%;
  margin: 2% auto;
}

.internship-details {
  text-align: start;
  list-style: none;
}

@media screen and (max-width: 768px) {
  .internship-container,
  .internship-information-grid {
    display: block;
  }

  .i_details {
    margin: 5% auto;
  }

  .more-information-button {
    margin-bottom: 5%;
  }
}

/* DARK THEME */
.dark-theme .internship-container {
  background-color: #353e48;
}

.dark-theme .internship-container {
  border: 2px solid white;
}

.dark-theme .internship-information-grid {
  border: 2px solid white;
}
</style>

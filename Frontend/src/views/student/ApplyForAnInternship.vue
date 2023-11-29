<template>
  <div class="main-container">
    <h1>POSTULAR A UNA PASANTÍA</h1>
    <div class="internship-container" v-if="allDataIsLoaded">
      <div class="first-grid-container">
        <img
          src="https://www.cainco.org.bo/empresaydesarrollo/wp-content/uploads/2021/05/1550703145451.png"
          alt="Logo de la Empresa"
        />
      </div>
      <div class="second-grid-container">
        <div class="i_description">
          <h4>Descripción de la Pasantía:</h4>
          <p>
            {{ this.dataInternship.descripcionfunciones }}
          </p>
        </div>
        <div class="institution_name">
          <h4>Empresa:</h4>
          <p>{{ this.dataInternship.institucion.nombreinstitucion }}</p>
        </div>
      </div>
      <div class="third-grid-container">
        <div class="internship-information-grid">
          <div class="first-information-grid">
            <div class="title-grid">
              <h4 class="title">Detalles</h4>
            </div>
            <div class="information-grid">
              <h4 class="information-title">Detalles de la Pasantía:</h4>
              <div class="i_details">
                <ul class="internship-details">
                  <li><strong>Empresa: </strong>{{ this.dataInternship.institucion.nombreinstitucion }}</li>
                  <li>
                    <strong>
                      Fecha de Inicio para la selección:
                    </strong>
                    {{ this.dataInternship.fechasolicitud  }}
                  </li>
                  <li>
                    <strong>Fecha de Finalización para la selección: </strong>{{ this.dataInternship.fechaseleccionpasante  }}
                  </li>
                  <li>
                    <strong>Tipo de Pasantía: </strong>{{ this.dataInternship.estadoconvocatoria.nombreestadoconvocatoria  }}
                  </li>
                  <li>
                    <strong>
                      Hora de Inicio de la Pasantía: 
                    </strong>
                    {{ this.dataInternship.horario_inicio  }}
                  </li>
                  <li>
                    <strong>
                      Hora de Finalización de la Pasantía: 
                    </strong>
                    {{ this.dataInternship.horario_fin  }}
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="second-information-grid">
            <div class="title-grid">
              <h4 class="title">Requisitos</h4>
            </div>
            <div class="information-grid">
              <h4 class="information-title">Requisitos de Postulación:</h4>
              <div class="i_details">
                <div class="internship-details">
                  <p>
                    {{ this.dataInternship.requisitoscompetencias }}
                  </p>
                </div>
              </div>
              <h4 class="information-title">Carreras a las que va dirigida:</h4>
              <div class="i_details">
                <div class="internship-details">
                  <p>
                    {{ this.dataInternship.areapasantia }}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="third-information-grid">
            <div class="title-grid">
              <h4 class="title">Postular</h4>
            </div>
            <div class="information-grid">
              <h4 class="information-title">¿Cómo Postular?</h4>
              <div class="i_details">
                <p>
                  Si estás interesado en esta pasantía, por favor, sigue estos
                  pasos:
                </p>
              </div>
              <div class="upload-CV">
                <h6>Subir CV:</h6>
                <Button
                  text="Subir PDF"
                  :color="4"
                ></Button>
                <input
                  type="file"
                  id="fileInput"
                  ref="fileInput"
                  style="display: none"
                />
              </div>
              <div class="insert-curriculum">
                <input
                  type="text"
                  name="uploadCV"
                  id="uploadCV"
                  placeholder="Link de Curriculum Vitae"
                />
              </div>
              <div class="submit-container">
                <div class="presentation-letter">
                  <p>
                    Escribe una breve carta de presentación en la que expliques
                    por qué estás interesado en esta pasantía y cómo tu
                    formación y habilidades pueden contribuir al equipo de Jala
                    Soft.
                  </p>
                </div>
                <textarea
                  name="userDescription"
                  id="userDescription"
                  cols="25"
                  rows="10"
                  placeholder="Breve carta de presentación"
                ></textarea>
                <Button text="POSTULAR" :color="2"></Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Button from "@/components/common/Button.vue";
import {useInternshipsByIDStore } from "@/store/student/internshipsByIDStore";
import {useLoaderStore} from "@/store/common/loaderStore";
import {useUserByIdStore} from "@/store/common/dataUserStore";
export default {
  name: "ApplyForAnInternshipPage",
  components: {
    Button,
  },
  data() {
    return {
      idInternship: null,
      dataInternship: {},
      dataUserStore: useUserByIdStore(),
      dataUser: {},
      allDataIsLoaded: false,
    };
  },
  methods: {
    async getInternship() {
      await useInternshipsByIDStore().loadInternshipById(this.idInternship);
      this.dataInternship = useInternshipsByIDStore().internship;
    },
    async getUser() {
      const id = $cookies.get("id");
      await this.dataUserStore.getUserByIdUsuario(id);
      this.dataUser = this.dataUserStore.user;
    },
  },
  async mounted() {
    useLoaderStore().activateLoader();
    await this.getInternship();
    await this.getUser();
    this.allDataIsLoaded = true;
    useLoaderStore().desactivateLoader();
  },
  created() {
    this.idInternship = this.$route.params.id;
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

.internship-container {
  display: grid;
  grid-template-rows: auto auto;
  grid-template-columns: 41% 1fr;
  background-color: rgb(255, 255, 255);
  text-align: center;
  border: 2px solid black;
}

.first-information-grid,
.second-information-grid,
.third-information-grid {
  border: 1px solid black;
}

.third-grid-container {
  grid-column: span 2;
  border-top: 2px solid black;
}

.internship-information-grid {
  display: grid;
  grid-template-rows: auto auto;
  grid-template-columns: repeat(3, 1fr);
  margin: 2% auto;
  width: 92%;
  border: 1px solid black;
}

.title-grid {
  background-color: rgb(223, 255, 255);
  border-bottom: 2px solid black;
}

.second-grid-container {
  margin: auto;
}

.i_description {
  width: 80%;
  margin: 0 auto;
}
.institution_name {
  margin-top: 2%;
}

.title {
  margin: 0;
  padding: 5% 0;
}

.information-title {
  margin: 4% auto;
}

.i_details,
.presentation-letter {
  width: 90%;
  margin: 5% auto;
}

.internship-details {
  text-align: start;
  list-style: none;
}

.upload-CV {
  display: flex;
  justify-content: space-between;
  width: 70%;
  margin: 4% auto;
}

.i_download {
  margin: 7% auto 5%;
}

.download-internship,
.submit-container {
  margin-bottom: 5%;
}

#uploadCV,
#userDescription {
  border: 1px solid cadetblue;
  resize: none;
}

#userDescription {
  margin-bottom: 4%;
}

@media screen and (max-width: 768px) {
  .internship-container,
  .internship-information-grid {
    display: block;
  }

  .second-grid-container {
    margin: 3% auto 8%;
  }

  .i_description {
    margin-bottom: 7%;
  }
}

/* DARK THEME */
.dark-theme .internship-container {
  background-color: #353e48;
}

.dark-theme .internship-container {
  border: 2px solid white;
}

.dark-theme .third-grid-container {
  border-top: 2px solid white;
}

.dark-theme .internship-information-grid,
.dark-theme .first-information-grid,
.dark-theme .second-information-grid,
.dark-theme .third-information-grid {
  border: 1px solid white;
}

.dark-theme .title-grid {
  background-color: rgb(0, 169, 169);
  border-bottom: 2px solid white;
}
</style>

<template>
  <div class="main-container">
    <h1>ESTADO DE POSTULACIÓN</h1>
    <div class="internship-container" v-if="allDataIsLoaded">
      <div class="first-grid-container">
        <img v-if="srcLogo !== ''"
          src="https://www.cainco.org.bo/empresaydesarrollo/wp-content/uploads/2021/05/1550703145451.png"
          alt="Logo de la Empresa"
          class="company-logo"
        />
        <img v-else
          :src="srcLogo"
          alt="Logo de la Empresa"
          class="company-logo"
        />
      </div>
      <div class="second-grid-container">
        <div class="i_title">
          <h2>
            {{ institution.nombreinstitucion }}
          </h2>
        </div>
        <div class="i_description">
          <h4>Descripción de la Pasantía:</h4>
          <p>
            ¡Gracias por tu interés en la pasantía de {{
              institution.nombreinstitucion
            }}! Esta es una oportunidad emocionante para
            adentrarte en el mundo de 
            {{ institution.sectorpertenencia.nombresectorpertenencia }}!
          </p>
        </div>
        <div class="institution_name">
          <h4>Empresa:</h4>
          <p>{{ institution.nombreinstitucion }}</p>
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
                  <li><strong>Empresa: </strong>{{ institution.nombreinstitucion }}</li>
                  <li>
                    <strong>
                      Fecha de Inicio para la selección:
                    </strong>
                    {{ postulation.convocatoria_id.fechasolicitud  }}
                  </li>
                  <li>
                    <strong>Fecha de Finalización para la selección: </strong>{{ this.postulation.convocatoria_id.fechaseleccionpasante  }}
                  </li>
                  <li>
                    <strong>Tipo de Pasantía: </strong>{{ this.postulation.estadopostulacion_id.nombreestadopostulacion  }}
                  </li>
                  <li>
                    <strong>
                      Hora de Inicio de la Pasantía: 
                    </strong>
                    {{ this.postulation.convocatoria_id.horario_inicio  }}
                  </li>
                  <li>
                    <strong>
                      Hora de Finalización de la Pasantía: 
                    </strong>
                    {{ this.postulation.convocatoria_id.horario_fin  }}
                  </li>
                </ul>
              </div>
              <!--<div class="download-internship">
                <p class="i_download"><strong>Descargar aplicativo:</strong></p>
                <Button text="Descargar" :color="0"></Button>
              </div>-->
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
                    {{ this.postulation.convocatoria_id.requisitoscompetencias }}
                  </p>
                </div>
              </div>
              <h4 class="information-title">
                Áreas a la que va dirigida la pasantía:
              </h4>
              <div class="i_details">
                <div class="internship-details">
                  <p>
                    {{ this.postulation.convocatoria_id.areapasantia }}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="third-information-grid">
            <div class="title-grid">
              <h4 class="title">Estado de Postulación</h4>
            </div>
            <div class="information-grid">
              <div
                class="postulation-status"
                v-if="postulationStatus.status === 'APROBADO'"
              >
                <h4 class="status approved-status">APROBADO</h4>
                <img
                  src="@/components/images/approved.png"
                  alt="Estado de Postulación"
                  class="status-image"
                />
                <p class="status-text">
                  Usted ha sido contratado. ¡Bienvenido! En los próximos días
                  nos estaremos contactando con usted.
                </p>
              </div>
              <div
                class="postulation-status"
                v-if="postulationStatus.status === 'PENDIENTE'"
              >
                <h4 class="status on-hold-status">EN ESPERA</h4>
                <img
                  src="@/components/images/onHold.png"
                  alt="Estado de Postulación"
                  class="status-image"
                />
                <p class="status-text">
                  Aun estamos procesando su postulación, vuelva mañana por
                  favor.
                </p>
              </div>
              <div
                class="postulation-status"
                v-if="postulationStatus.status === 'RECHAZADO'"
              >
                <h4 class="status rejected-status">RECHAZADO</h4>
                <img
                  src="@/components/images/rejected.png"
                  alt="Estado de Postulación"
                  class="status-image"
                />
                <p class="status-text">
                  Usted NO ha sido contratado, debido a que no cumple plenamente
                  con los requisitos de la pasantía.
                </p>
              </div>
              <div
                class="submit-container"
                v-if="postulationStatus.status !== 'RECHAZADO'"
              >
                <label for="userDescription">Comentario:</label>
                <textarea
                  name="userDescription"
                  id="userDescription"
                  cols="25"
                  rows="5"
                  placeholder="Comentario..."
                ></textarea>
                <Button text="Enviar" :color="3"></Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {useRequestsByIDStore} from '@/store/student/requestsByIDStore';
import {useLoaderStore} from "@/store/common/loaderStore";
import Button from "@/components/common/Button.vue";
import {useInstitutionsByIDSectorStore} from "@/store/student/institutionsByIDSectorStore";
export default {
  name: "PostulationStatusPage",
  components: {
    Button,
  },
  data() {
    return {
      postulationStatus: {
        status: "APROBADO", // APROBADO | EN ESPERA | RECHAZADO
      },
      idPostulation: null,
      postulation: null,
      isPostulationLoaded: false,
      institution: null,
      allDataIsLoaded: false,
      srcLogo: "",
    };
  },
  methods: {
    async getPostulationStatus() {
      await useRequestsByIDStore().loadRequestById(this.idPostulation);
      this.postulation = useRequestsByIDStore().request;
      this.isPostulationLoaded = true;
    },
    async getInstitution() {
      await useInstitutionsByIDSectorStore().loadInstitutionById(
        this.postulation.convocatoria_id.institucion
      );
      this.institution = useInstitutionsByIDSectorStore().institution;
    },

  },
  async mounted() {
    useLoaderStore().activateLoader();
    await this.getPostulationStatus();
    await this.getInstitution();
    this.postulationStatus.status = this.postulation.estadopostulacion_id.nombreestadopostulacion;
    this.srcLogo = this.institution.logoinstitucion;
    this.allDataIsLoaded = true;
    useLoaderStore().desactivateLoader();
  },
  created() {
    this.idPostulation = this.$route.params.id;
  },
};
</script>

<style scoped>
.main-container {
  margin: 3% auto;
  width: 90%;
}

.company-logo {
  width: 100%;
}
.status-image {
  width: 25%;
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

.status-text,
.i_details {
  width: 90%;
  margin: 5% auto;
}

.internship-details {
  text-align: start;
  list-style: none;
}

.i_download {
  margin: 7% auto 5%;
}

.status {
  margin: 0;
  padding: 5% 0;
  font-size: 3em;
}

.approved-status {
  color: limegreen;
}

.on-hold-status {
  color: gold;
}

.rejected-status {
  color: red;
}

.download-internship,
.submit-container {
  margin-bottom: 5%;
}

#userDescription {
  border: 1px solid cadetblue;
  margin-bottom: 4%;
  resize: none;
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

  .status {
    font-size: 2.2em;
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

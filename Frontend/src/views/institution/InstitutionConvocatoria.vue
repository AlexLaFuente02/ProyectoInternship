<template>
  <div class="main-container">
    <h1>TUS CONVOCATORIAS</h1>
    <h5>Te mostramos tus convocatorias activas</h5>
    <div class="internships-container">
      <div v-if="internshipsAreLoaded">
        <div
          v-for="internship in activeInternshipsByInstitutionList"
          :key="internship.id"
          class="card-inicio"
        >
          <div class="image">
            <img
              :src="getRandomImage"
              alt="Internship image"
              class="card-image"
            />
          </div>
          <div class="text-content">
            <div class="internship-information">
              <div class="title">ID: {{ internship.id }}</div>
              <div class="description">
                &Aacute;rea de la pasant&iacute;a: {{ internship.areapasantia }}
              </div>
              <div class="description">
                Descripci&oacute;n funciones o actividades:
                {{ internship.descripcionfunciones }}
              </div>
              <div class="description">
                Requisitos de la pasant&iacute;a:
                {{ internship.requisitoscompetencias }}
              </div>
              <div class="description">
                Horario de inicio: {{ internship.horario_inicio }}
              </div>
              <div class="description">
                Horario de fin: {{ internship.horario_fin }}
              </div>
              <div class="description">
                Fecha de solicitud: {{ internship.fechasolicitud }}
              </div>
              <div class="description">
                Fecha de selecci&oacute;n del pasante:
                {{ internship.fechaseleccionpasante }}
              </div>
              <div class="description">
                Estado de la convocatoria:
                {{ internship.nombreestadoconvocatoria }}
              </div>
              <div class="description">
                Tiempo a cumplir de la pasant&iacute;a:
                {{ internship.tiempoacumplir }}
              </div>
            </div>
          </div>
          <div>
            <div class="button-container">
              <div class="button-group">
                <button class="edit-btn" @click="editCard(internship.id)">
                  Editar
                </button>
                <button class="delete-btn" @click="deleteCard(internship.id)">
                  Borrar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useLoaderStore } from "@/store/common/loaderStore";
import { activeInternshipsByInstitutionIdStore } from "../../store/institution/ActiveInternshipsByInstitutionIdStore";
import firstInternshipImage from "@/components/institution/staticImages/firstInternshipStaticImage.jpg";
import secondInternshipImage from "@/components/institution/staticImages/secondInternshipStaticImage.png";
import thirdInternshipImage from "@/components/institution/staticImages/thirdInternshipStaticImage.png";
import fourthInternshipImage from "@/components/institution/staticImages/fourthInternshipStaticImage.png";
export default {
  data() {
    return {
      internshipsImages: [
        firstInternshipImage,
        secondInternshipImage,
        thirdInternshipImage,
        fourthInternshipImage,
      ],
      activeInternshipsByInstitutionIdStore: activeInternshipsByInstitutionIdStore(),
      internshipsAreLoaded: false,
      activeInternshipsByInstitutionList: [],
    };
  },
  methods: {
    async getActiveInternshipsByInstitution() {
      useLoaderStore().activateLoader();
      await this.activeInternshipsByInstitutionIdStore.loadActiveInternshipsByInstitutionId($cookies.get("institutionID"));
      this.activeInternshipsByInstitutionList = this.activeInternshipsByInstitutionIdStore.internships.result;
      this.activeInternshipsByInstitutionList = this.activeInternshipsByInstitutionList.map((internship) => {
        return {
          id: internship.id,
          areapasantia: internship.areapasantia,
          descripcionfunciones: internship.descripcionfunciones,
          requisitoscompetencias: internship.requisitoscompetencias,
          horario_inicio: internship.horario_inicio,
          horario_fin: internship.horario_fin,
          fechasolicitud: internship.fechasolicitud,
          fechaseleccionpasante: internship.fechaseleccionpasante,
          nombreestadoconvocatoria: internship.estadoconvocatoria.nombreestadoconvocatoria,
          tiempoacumplir: internship.tiempoacumplir.descripcion,
        };
      });
      console.log(this.activeInternshipsByInstitutionList);
      this.internshipsAreLoaded = true;
      useLoaderStore().desactivateLoader();
    },
    editCard(cardId) {
      console.log(`Editar tarjeta con ID: ${cardId}`);
    },
    deleteCard(cardId) {
      console.log(`Borrar tarjeta con ID: ${cardId}`);
    },
  },
  computed: {
    getRandomImage() {
      const randomImage = Math.floor(Math.random() * this.internshipsImages.length);
      return this.internshipsImages[randomImage];
    },
  },
  created() {
    this.getActiveInternshipsByInstitution();
  },
};
</script>

<style scoped>
.card-image {
  width: 100%;
}

.main-container {
  margin: 3% 5%;
  width: 90%;
}

.internships-container {
  display: grid;
  grid-template-rows: auto;
  grid-template-columns: auto;
  background-color: rgb(255, 255, 255);
  text-align: center;
  border: 2px solid black;
  padding-bottom: 2%;
}

.text-content {
  margin: 5% auto;
}

.internship-information {
  text-align: start;
}

.card-inicio {
  display: grid;
  grid-template-rows: auto;
  grid-template-columns: 20% 55% auto;
  align-items: center;
  margin: 2% auto 0;
  width: 92%;
  border: 2px solid black;
}

.dark-theme .card-inicio {
  background-color: #353e48;
  border: 2px solid white;
}

.image {
  text-align: center;
}

@media (max-width: 880px) {
  .text-content {
    padding: 10%;
  }

  .card-inicio {
    display: block;
  }

  .button-container {
    margin-bottom: 5%;
  }
}

.title {
  font-weight: bold;
  font-size: 20px;
}

.edit-btn,
.delete-btn {
  padding: 10px 20px;
  background-color: #5a99dd;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  margin: auto 3%;
}
</style>

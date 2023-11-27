<template>
  <div class="institution-principal-page">
    <div class="institution-profile">
      <div class="profile-content-header">
        <div class="welcome-content">
          <div class="emoji">👋</div>
          <div class="institution-data">
            <span class="institution-welcome">
              Hola, {{ companyInformation.nombreinstitucion }}!
            </span>
            <span class="institution-sector">
              {{ companyInformation.sectorpertenencia.nombresectorpertenencia }}
            </span>
          </div>
        </div>
        <div class="more-content">
          <router-link to="/institution/Settings">
            <button class="edit-profile-button bn23">
              <font-awesome-icon :icon="['fas', 'user-edit']" size="2xl" />
              <span class="edit-profile">Editar Perfil</span>
            </button>
          </router-link>
        </div>
      </div>
      <div class="summary">
        <span class="summary-title">
          Resumen general de tus convocatorias
        </span>
        <div class="summary-content">
          <span class="summary-content-number">
            {{ internshipsQuantities.ConvocatoriasActivas }}
            <span class="summary-content-text">activas</span>
          </span>
          <span class="summary-content-number">
            {{ internshipsQuantities.ConvocatoriasInactivas }}
            <span class="summary-content-text">inactivas</span>
          </span>
          <span class="summary-content-number">
            18
            <span class="summary-content-text">total solicitudes</span>
          </span>
        </div>
      </div>
    </div>
    <div class="active-internships-by-institution">
      <h1>Pasantías activas</h1>
      <div class="container__cards" v-if="companyInformationIsLoaded">
        <div
          class="card"
          v-for="internship in activeInternships"
          :key="internship.id"
        >
          <SimpleCard :key="internship.id" :internship="internship" />
        </div>
      </div>
    </div>
    <div class="requests-by-institution">
      <h1>Solicitudes</h1>
      <div class="container__requests" v-if="companyInformationIsLoaded">
        <div class="container__little__nav">
          <LittleNav @filter="filterRequests" />
        </div>
        <div class="container__Arrow">
          <ArrowCards
            :listRequests="postulationsByInstitution"
            :type="{
              id: 4,
              title: 'Todo',
              icon: '🌎',
              color: '#04befe',
            }"
            v-show="type == 'Todo'"
          />
          <ArrowCards
            :listRequests="requestsPending"
            :type="{
              id: 3,
              title: 'Pendiente',
              icon: '🤷',
              color: '#f15f0e',
            }"
            v-show="type == 'Pendiente'"
          />
          <ArrowCards
            :listRequests="requestsAccepted"
            :type="{
              id: 2,
              title: 'Aceptado',
              icon: '😁',
              color: '#36aeb3',
            }"
            v-show="type == 'Aceptado'"
            aria-hidden="true"
          />
        </div>
      </div>
    </div>
    <div class="container__header__page">
      <div class="container__header__description">
        <h1>¡Acción rápida!</h1>
        <div class="action-buttons">
          <router-link class="link" to="/institution/Convocatoria">
            <Button text="Tus Convocatorias" :color="2" :disabled="false" />
          </router-link>
          <router-link class="link" to="/institution/addConvocatoria">
            <Button text="Agregar Convocatoria" :color="3" :disabled="false" />
          </router-link>
          <router-link class="link" to="/institution/InternshipFilter">
            <Button text="Solicitudes" :color="4" :disabled="false" />
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useInternshipsByIDStore } from "@/store/student/internshipsByIDStore";
import CardList from "@/components/common/CardList.vue";
import Button from "../../components/common/Button.vue";
import { useLoaderStore } from "@/store/common/loaderStore";
import SimpleCard from "@/components/common/SimpleCard.vue";
import ArrowCards from "@/components/common/ArrowCards.vue";
import LittleNav from "@/components/common/LittleNav.vue";
import { useRequestsByIDStore } from "@/store/student/requestsByIDStore";
import { InstitutionByIdStore } from "@/store/institution/InstitutionByIdStore";
import { QuantityOfActiveNInactiveInternshipsStore } from "../../store/institution/QuantityOfActiveNInactiveInternshipsStore";
import { activeInternshipsByInstitutionIdStore } from "../../store/institution/ActiveInternshipsByInstitutionIdStore";
import { postulationsByInstitutionIdStore } from "../../store/institution/PostulationsByInstitutionIdStore";
export default {
  data() {
    return {
      listInternships: [],
      title: "Pasantías Populares",
      everyInternshipsAreLoaded: false,
      listRequests: [],
      requestsAccepted: [],
      requestsRejected: [],
      requestsPending: [],
      type: "Pendiente",

      companyInformationIsLoaded: false,
      institutionById: InstitutionByIdStore(),
      activeNInactiveInternshipsQuantityStore: QuantityOfActiveNInactiveInternshipsStore(),
      activeInternshipsByInstitutionIdStore: activeInternshipsByInstitutionIdStore(),
      postulationsByInstitutionIdStore: postulationsByInstitutionIdStore(),
      companyInformation: [],
      internshipsQuantities: [],
      activeInternships: [],
      postulationsByInstitution: [],
    };
  },
  components: {
    Button,
    CardList,
    SimpleCard,
    ArrowCards,
    LittleNav,
  },
  methods: {
    async getInstitutionData(institutionID) {
      useLoaderStore().activateLoader();
      await this.institutionById.loadInstitutionById(institutionID);
      this.companyInformation = this.institutionById.institution.result;
      await this.activeNInactiveInternshipsQuantityStore.loadQuantitiesOfInternships(institutionID);
      this.internshipsQuantities = this.activeNInactiveInternshipsQuantityStore.quantityResults.result;
      await this.activeInternshipsByInstitutionIdStore.loadActiveInternshipsByInstitutionId(institutionID);
      this.activeInternships = this.activeInternshipsByInstitutionIdStore.internships.result;
      await this.postulationsByInstitutionIdStore.loadPostulationsByInstitutionId(institutionID);
      this.postulationsByInstitution = this.postulationsByInstitutionIdStore.postulations.result;
      console.log(this.companyInformation);
      console.log(this.internshipsQuantities);
      console.log(this.activeInternships);
      console.log(this.postulationsByInstitution);
      this.companyInformationIsLoaded = true;
      useLoaderStore().desactivateLoader();
    },
    async getData() {
      useLoaderStore().activateLoader();
      await useInternshipsByIDStore().loadInternshipsByIdStudent();
      await useRequestsByIDStore().loadRequestsByIdStudent();
      this.listInternships = useInternshipsByIDStore().internships;
      this.listRequests = useRequestsByIDStore().requests.result;
      this.listRequests.forEach((element) => {
        if (
          element.estadopostulacion_id.nombreestadopostulacion == "EN ESPERA"
        ) {
          this.requestsPending.push(element);
        } else if (
          element.estadopostulacion_id.nombreestadopostulacion == "APROBADO"
        ) {
          this.requestsAccepted.push(element);
        } else {
          this.requestsRejected.push(element);
        }
      });
      this.everyInternshipsAreLoaded = true;
      useLoaderStore().desactivateLoader();
    },
    filterRequests(key) {
      if (key == "Todo") {
        this.listRequests = useRequestsByIDStore().requests.result;
        this.type = "Todo";
      } else if (key == "Pendiente") {
        this.listRequests = this.requestsPending;
        this.type = "Pendiente";
      } else if (key == "Aceptado") {
        this.listRequests = this.requestsAccepted;
        this.type = "Aceptado";
      }
    },
  },
  computed: {
    listRequestsComputed() {
      return this.listRequests;
    },
    typeComputed() {
      return this.type;
    },
  },
  created() {
    this.getInstitutionData($cookies.get("institutionID"));
    // this.getData();
  },
};
</script>
<style scoped>
.institution-principal-page {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
}

.student__content__internship {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
}

/*Estilos para el perfil del estudiante*/
.institution-profile {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 0.5rem;
  margin: 0 0 1.5rem 0;
  border-radius: 10px;
  background-color: #fff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
.dark-theme .institution-profile {
  background-color: #434b54;
}
.profile-content-header {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
}
.welcome-content {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 50%;
}
.emoji {
  font-size: 2rem;
}
.institution-data {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin: 4% 0;
}
.institution-welcome {
  font-size: 1.5rem;
  font-weight: 700;
}
.institution-sector {
  font-size: 1rem;
  font-weight: 400;
}
.more-content {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 50%;
}
.edit-profile-button {
  padding: 0.9rem;
  margin: 0.5rem;
  color: #fff;
  cursor: pointer;
  text-align: center;
  border: none;
  background-size: 300% 100%;
  border-radius: 50px;
  -o-transition: all 0.4s ease-in-out;
  -webkit-transition: all 0.4s ease-in-out;
  transition: all 0.4s ease-in-out;
}

.edit-profile-button:hover {
  background-position: 100% 0;
  -o-transition: all 0.4s ease-in-out;
  -webkit-transition: all 0.4s ease-in-out;
  transition: all 0.4s ease-in-out;
}

.edit-profile-button:focus {
  outline: none;
}

.edit-profile-button.bn23 {
  background-image: linear-gradient(
    to right,
    #25aae1,
    #4481eb,
    #04befe,
    #3f86ed
  );
  box-shadow: 0 4px 15px 0 rgba(65, 132, 234, 0.75);
}
.dark-theme .edit-profile-button.bn23 {
  background-image: linear-gradient(
    to right,
    #29323c,
    #485563,
    #2b5876,
    #4e4376
  );
  box-shadow: 0 4px 15px 0 rgba(45, 54, 65, 0.75);
}

.see_vitae {
  font-size: 1rem;
  font-weight: 700;
  margin-left: 0.5rem;
}
.edit-profile {
  font-size: 1rem;
  font-weight: 700;
  margin-left: 0.5rem;
}
.summary {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  text-align: center;
  padding: 0.5rem;
  margin: 0 auto;
}
.summary-title {
  font-size: 1.5rem;
  font-weight: 700;
}
.summary-content {
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  font-size: 1rem;
}
.summary-content-number {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  font-size: 3rem;
  font-weight: 700;
}
.summary-content-text {
  font-size: 1rem;
  font-weight: 700;
  margin-left: 0.5rem;
}

.container__header__page {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 1rem;
  margin: 0 0 1rem;
  border-radius: 10px;
  background-color: #fff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
.container__header__description {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 3% 7%;
}
.container__header__description h1 {
  font-size: 1.5rem;
  text-align: center;
}
.container__header__description p {
  font-size: 1rem;
  text-align: center;
}
.container__header__description Button {
  margin-top: 25%;
}

.link {
  text-decoration: none;
  margin-right: 6%;
}

.action-buttons {
  display: flex;
  align-items: center;
}

/*Estilos para las pasantías del estudiante*/
/*Estilos para las pasantías activas del estudiante*/
.active-internships-by-institution {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 0.5rem;
  margin: 0 0 1.5rem 0;
  height: 500px;
  border-radius: 10px;
  background-color: #fff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
.dark-theme .active-internships-by-institution {
  background-color: #434b54;
}
.active-internships-by-institution h1 {
  font-size: 2.2rem;
  font-weight: 700;
  margin: 1rem;
}
.container__cards {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  overflow-y: scroll;
  height: 100%;
  width: 80%;
}
/*Estilos para las solicitudes del estudiante*/

.requests-by-institution {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 0.5rem;
  margin: 0 0 1.5rem 0;
  height: 500px;
  border-radius: 10px;
  background-color: #fff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
.container__requests {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
}

.dark-theme .requests-by-institution {
  background-color: #434b54;
}

.dark-theme .container__header__page {
  background-color: #434b54;
}

.container__little__nav {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
}
.container__Arrow {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 300px;
}

/* Estilos para dispositivos pequeños (teléfonos) */

@media screen and (max-width: 1250px) {
  .container__header__page {
    flex-direction: column;
  }
  .container__header__description {
    padding: 3% 7%;
  }

  .action-buttons {
    display: block;
  }

  .link {
    margin: 0;
  }
}

@media only screen and (max-width: 600px) {
  /* Estilos específicos para dispositivos pequeños */
  .institution-principal-page {
    padding: 0.5rem;
  }
  .profile-content-header {
    flex-direction: column;
  }
  .welcome-content {
    width: 100%;
    margin-bottom: 0.3rem;
  }
  .more-content {
    width: 100%;
  }
  .edit-profile-button {
    margin: 0.2rem;
    padding: 0.5rem;
    font-size: 0.4rem;
  }
  .edit-profile-button span {
    font-size: 0.6rem;
  }
  .summary-content {
    flex-wrap: wrap;
  }
  .summary-title {
    font-size: 1rem;
    font-weight: 700;
  }
  .summary-content-number {
    font-size: 1.2rem;
  }
  .summary-content-text {
    font-size: 0.6rem;
  }
}

/* Estilos para tabletas */
@media only screen and (min-width: 600px) and (max-width: 1024px) {
  /* Estilos específicos para tabletas */
  .institution-principal-page {
    padding: 1rem;
  }
  .profile-content-header {
    flex-direction: column;
  }
  .welcome-content {
    width: 100%;
    margin-bottom: 0.5rem;
  }
  .more-content {
    width: 100%;
  }
  .edit-profile-button {
    margin: 0.3rem 0.3rem;
    padding: 0.8rem;
    font-size: 0.6rem;
  }
  .edit-profile-button span {
    font-size: 0.8rem;
  }
  .summary-content {
    flex-wrap: wrap;
  }
  .summary-title {
    font-size: 1.3rem;
    font-weight: 700;
  }
  .summary-content-number {
    font-size: 1.5rem;
  }
  .summary-content-text {
    font-size: 0.8rem;
  }
}

/* Estilos para dispositivos medianos */
@media only screen and (min-width: 1025px) and (max-width: 1440px) {
  /* Estilos específicos para dispositivos medianos */
  .institution-principal-page {
    padding: 1.5rem;
  }
}

/* Estilos para dispositivos grandes (pantallas de escritorio) */
@media only screen and (min-width: 1441px) {
  /* Estilos específicos para dispositivos grandes */
}
</style>

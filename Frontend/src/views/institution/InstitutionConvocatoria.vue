<template>
  <div class="inicio">
    <h1>TUS CONVOCATORIAS</h1>
    <h5>Te mostramos tus convocatorias</h5>
    <div class="card-inicio">
      <div class="card">
        <div
          v-for="internship in internshipsList"
          :key="internship.id"
          class="card-individual"
        >
          <div class="content">
            <div class="image">
              <img
                :src="internship.logoinstitucion"
                alt="Card image"
                class="card-image"
              />
            </div>
            <div class="text-content">
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
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { internshipsStore } from "../../store/institution/internshipsStore";
export default {
  data() {
    return {
      internshipsStore: internshipsStore(),
      internshipsList: [],
    };
  },
  methods: {
    async getInternships() {
      await this.internshipsStore.loadInternships();
      this.internshipsList = this.internshipsStore.internships.result;
      this.internshipsList = this.internshipsList.map((internship) => {
        return {
          id: internship.id,
          areapasantia: internship.areapasantia,
          descripcionfunciones: internship.descripcionfunciones,
          requisitoscompetencias: internship.requisitoscompetencias,
          horario_inicio: internship.horario_inicio,
          horario_fin: internship.horario_fin,
          fechasolicitud: internship.fechasolicitud,
          fechaseleccionpasante: internship.fechaseleccionpasante,
          nombreestadoconvocatoria:
            internship.estadoconvocatoria.nombreestadoconvocatoria,
          tiempoacumplir: internship.tiempoacumplir.descripcion,
          logoinstitucion: internship.institucion.logoinstitucion,
        };
      });
      console.log(this.internshipsList);
    },
    editCard(cardId) {
      // Lógica para editar la tarjeta con el ID proporcionado
      console.log(`Editar tarjeta con ID: ${cardId}`);
    },
    deleteCard(cardId) {
      // Lógica para borrar la tarjeta con el ID proporcionado
      console.log(`Borrar tarjeta con ID: ${cardId}`);
    },
  },
  created() {
    this.getInternships();
  },
};
</script>

<style scoped>
/** estilo eltra de titulo*/
h1 {
  font-weight: 900;
  color: rgb(90, 133, 253);
  --x-offset: -0.0625em;
  --y-offset: 0.0625em;
  --stroke: 0.025em;
  --background-color: white;
  --stroke-color: lightblue;
  text-shadow: var(--x-offset) var(--y-offset) 0px var(--background-color),
    calc(var(--x-offset) - var(--stroke)) calc(var(--y-offset) + var(--stroke))
      0px var(--stroke-color);
}
/* for browsers that support spread, added in
    https://drafts.csswg.org/css-text-decor-4/#text-shadow-property
    currently: none browsers! none of them!
    I can't even find a test: 
    https://wpt.fyi/results/css/css-text-decor */
@supports (text-shadow: 1px 1px 1px 1px rgb(0, 0, 0)) {
  h1 {
    text-shadow: var(--x-offset) var(--y-offset) 0px 0px var(--background-color),
      var(--x-offset) var(--y-offset) var(--stroke) 0px var(--stroke-color);
  }
}

/**iniiciooo  boton  */
.text-content {
  position: relative;
}
.text-content2 {
  position: relative;
}
.text-content3 {
  position: relative;
}
@media (max-width: 585px) {
  .text-content2 {
    position: relative;
    margin-bottom: 20%;
  }
  .text-a {
    margin-top: 30px;
  }
  .text-content {
    margin-bottom: 20%;
  }
}
@media (max-width: 290px) {
  .text-content2 {
    margin-bottom: 90%;
  }
}
@media (max-width: 380px) {
  .text-content2 {
    position: relative;
    margin-bottom: 40%;
  }
}
@media (max-width: 290px) {
  .text-content2 {
    margin-bottom: 60%;
  }
}
.content-text {
  margin-right: 10%; /* Ajusta el espacio para el botón de reserva */
}

.book-btn {
  position: absolute;
  top: 5%;
  right: 1%;
}
/**fin  boton  */
.inicio {
  margin: 3% 5%;
}

/**colores de texto de si esta aprobado o no */
.text-a,
.text-p,
.text-r {
  position: relative;
  left: 10%;
  right: 60%;
  transform: translate(50%, -50%);
  text-transform: uppercase;
  font-family: verdana;
  font-size: 200%;
  font-weight: 50%;
  text-shadow: 1px 1px 1px #919191, 1px 2px 1px #919191, 1px 3px 1px #919191,
    1px 4px 1px #919191, 1px 5px 1px #919191, 1px 6px 1px #919191,
    1px 7px 1px #919191, 1px 8px 1px #919191, 1px 9px 1px #919191,
    1px 10px 1px #919191, 1px 18px 6px rgba(16, 16, 16, 0.4),
    1px 22px 10px rgba(16, 16, 16, 0.2), 1px 25px 35px rgba(16, 16, 16, 0.2),
    1px 30px 60px rgba(16, 16, 16, 0.4);
}
.text-a {
  color: #00c123;
}
.text-p {
  color: #fee900;
}
.text-r {
  color: #dc0c0c;
}
/**finnnnnnnnnnnnnnnnnnnnnnnn*/
.card {
  /**contenedore de indivialues */
  border: 0px solid #ccc;
  border-radius: 8px;
  overflow: hidden;
  margin-top: 30px;
  margin-left: 5%;
  margin-right: 5%;
  margin-bottom: 15px;
}
.card-individual {
  border: 2px solid black;
  border-radius: 8px;
  overflow: hidden;
  margin-bottom: 2%;
}
.dark-theme .card-individual {
  border: 2px solid white;
}

.card-inicio {
  background-color: rgb(255, 255, 255);
  border-radius: 8px;
  overflow: hidden;
  border: 2px solid black;
}
.dark-theme .card-inicio {
  background-color: #353e48;
  border: 2px solid white;
}

.content {
  display: flex;
}

.image {
  flex: 0 0 auto; /* Ancho fijo para la imagen */
}

.image .card-image {
  width: 200px; /* Tamaño fijo para la imagen */
  height: auto;
  border-radius: 8px;
}

.text-content {
  flex: 1;
  padding: 20px;
}
/* Estilos responsivos */
@media (max-width: 880px) {
  .content {
    flex-direction: column;
  }
  .text-content {
    padding: 20px;
  }
}
.title {
  font-weight: bold;
  font-size: 20px;
  margin-bottom: 10px;
}

.description {
  margin-bottom: 15px;
}

.info {
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
  font-size: 16px;
}

.book-btn {
  padding: 10px 20px;
  background-color: #5a99dd;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
}

.disclaimer {
  font-size: 12px;
  color: #777;
  margin-top: 10px;
}

.star {
  display: inline-block;
  width: 15px;
  height: 15px;
  background-image: url("https://image.flaticon.com/icons/svg/148/148841.svg");
  background-size: contain;
  margin-right: 3px;
}

.review-count {
  color: #777;
}

/* Estilos para los botones Editar y Borrar */
.edit-btn,
.delete-btn {
  padding: 10px 20px;
  background-color: #5a99dd;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  margin: 0 5px;
}

/* Estilos para alinear botones a la derecha */
.button-container {
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  margin-bottom: 10px;
}
</style>

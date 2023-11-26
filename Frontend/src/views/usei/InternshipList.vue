<template>
  <div class="main-container">
    <h1>PASANTÍAS</h1>
    <h5>Te mostramos las pasantías activas en la plataforma.</h5>
    <div class="internship-container">
      <div class="internship-information-grid" v-for="card in listInternship" :key="card.id" v-if="everyInternshipsAreLoaded">
        <img
          src="https://scontent.flpb3-1.fna.fbcdn.net/v/t39.30808-6/326368094_757490342424242_7018585822248141862_n.png?_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_ohc=QxL6kFOuUq0AX-3EyiD&_nc_ht=scontent.flpb3-1.fna&oh=00_AfCxCbY-DO9PuXBWEF4EqWFFpYzznYGa0twkeL-NvXnxrA&oe=65548BF4"
          alt="Logo de la Empresa"
        />

        <div class="information-grid">
          <h4 class="information-title">Detalles de la Pasantía:</h4>
          <div class="i_details">
            <ul class="internship-details">
              <li><strong>Empresa: </strong>{{card.institucion}}</li>
              <li><strong>Requisitos: </strong>{{card.requisitoscompetencias}}</li>
              <li><strong>Duración: </strong>{{card.tiempoacumplir}}</li>
              <li><strong>Fecha de Inicio: </strong>{{card.fechasolicitud}}</li>
              <li>
                <strong>Fecha de Finalización: </strong>{{card.fechaseleccionpasante}}</li>
              <li>
                <strong>Tipo de Pasantía: </strong>{{card.areapasantia}}</li>
      
            </ul>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import {UseUseiInternshipStore }from "@/store/usei/UseiInternshipStore";
import {useLoaderStore} from "@/store/common/loaderStore";
export default {
  data() {
        return {
            listInternship:[],
           everyInternshipsAreLoaded: false,
        };
    },
    methods: {
        async getData(){
            useLoaderStore().activateLoader();
            await UseUseiInternshipStore().LoadInternship();
            this.listInternship = UseUseiInternshipStore().InternshipList.result;
            this.everyInternshipsAreLoaded = true;
            useLoaderStore().desactivateLoader();
          
        },
    },
    created(){
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
  grid-template-columns: 20% auto;
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

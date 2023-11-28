<template>
    <div class="inicio">
      <h1>TUS SOLICITUDES DE EMPRESAS</h1>
      <p>Te mostramos tus solicitudes de empresas para entrar a la pagina</p>
      <div class="card-inicio">
        <div class="card">
          <div v-for="card in listInstitution" :key="card.id" v-if="everyInternshipsAreLoaded" class="card-individual">
            <div class="content">
              <div class="image">
                <img :src="card.logoinstitucion || defaultImage" alt="Imagen de la Empresa" class="card-image">
              </div>
              <div class="text-content">
                <div class="button-container">
                  <div class="button-group">
                    <button class="edit-btn" @click="editCard(card.id)">Aceptar</button>
                    <button class="delete-btn" @click="deleteCard(card.id)">Rechazar</button>
                  </div>
                </div>
                    <div class="title">{{ card.nombreinstitucion }}</div>
                    <div class="description"><strong>Sector:</strong>{{card.sectorpertenencia.nombresectorpertenencia}}</div>
                    <div class="description"><strong>Nombre del Contacto:</strong>{{card.nombrecontacto}}</div>
                    <div class="description"><strong>Correo electr&oacute;nico:</strong>{{ card.correocontacto }}</div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  
  <script>
import { useLoaderStore } from "@/store/common/loaderStore";
import { UseUseiInstitutionStore } from "@/store/usei/UseiInstitutionStore";


export default {
  data() {
    return {
      listInstitution: [],
      everyInternshipsAreLoaded: false,
      defaultImage: 'https://i.pinimg.com/564x/0f/76/1c/0f761c01d1fb284eb429061e577aa623.jpg',
    };
  },
  methods: {
    async getData() {
      useLoaderStore().activateLoader();
      // Asegúrate de que LoadPendentInstitutions() se implemente correctamente y devuelva los datos esperados.
      await UseUseiInstitutionStore().LoadPendentInstitutions();
      // Asumiendo que LoadPendentInstitutions() actualiza InstitutionList de manera similar a LoadInstitutions() en tu ejemplo.
      this.listInstitution = UseUseiInstitutionStore().InstitutionList.result;
      this.everyInternshipsAreLoaded = true;
      useLoaderStore().desactivateLoader();
    },
    async editCard(institutionId) {
      try {
        const result = await UseUseiInstitutionStore().ActivateInstitution(institutionId);
        console.log('Institución activada correctamente', result);
        // Aquí podrías llamar a getData() para refrescar la lista o quitar la tarjeta de la vista
      } catch (error) {
        console.error('Error al activar la institución', error);
        // Aquí podrías manejar el error, por ejemplo, mostrando un mensaje al usuario
      }
    },
      deleteCard(cardId) {
        // Lógica para rechazar la solicitud
        console.log(`Rechazar solicitud con ID: ${cardId}`);
        // Aquí iría la llamada al backend o la lógica para actualizar el estado
      },
  },
  created() {
    this.getData();
  },
};
</script>

    
    <style scoped>
    /** estilo eltra de titulo*/
    
    
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
      margin-bottom:20%;
    }
    .text-a{
        margin-top: 30px;
       
    }
    .text-content {
      margin-bottom:20%;
    }
    }
    @media (max-width: 290px) {
      .text-content2 {
      margin-bottom:90%;
    
    }
    }
    @media (max-width: 380px) {
      .text-content2 {
      position: relative;
      margin-bottom:40%;
    }
   
    }
    @media (max-width: 290px) {
      .text-content2 {
      margin-bottom:60%;
    
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
    .inicio{
      position: relative;
      top: 10px;
      left: 10px;
      margin-bottom: 30px;
    }
    /**colores de texto de si esta aporbado o no */
    
    /**finnnnnnnnnnnnnnnnnnnnnnnn*/
    .card {/**contenedore de indivialues */
      border: 0px solid #ccc;
      border-radius: 8px;
      overflow: hidden;
      margin-top: 30px;
      margin-left: 5%;
      margin-right: 5%;
      margin-bottom: 15px;
      color: #000;
      background: rgb(255, 255, 255);
    }
    .card-individual {
      border: 3px solid #000000;
      border-radius: 8px;
      overflow: hidden;
      margin-bottom: 1rem;
      background: rgb(116, 181, 203);
    }
    .card-inicio{
      border: 3px solid #000000;
background:  #ffffff;
      border-radius: 8px;
      overflow: hidden;
      margin-top: 15px;
      margin-right: 10%;
      margin-left: 1%;
       /* Ajusta este valor según el espacio que desees */
    }

    .dark-theme .card {/**contenedore de indivialues */
      border: 0px solid #ccc;
      color: #ffffff;
      background: rgb(255, 255, 255);
   
    }
    .dark-theme .card-individual {
      border: 3px solid #000000;
      background: rgb(52, 87, 184);
    }
    .dark-theme .card-inicio{
      border: 3px solid #000000;
background:  #ffffff;
     
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
.edit-btn {
  padding: 10px 20px;
  background-color: rgb(3, 170, 14);
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  margin: 0 5px;
}

.delete-btn {
  padding: 10px 20px;
  background-color: #ff0000;
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
    
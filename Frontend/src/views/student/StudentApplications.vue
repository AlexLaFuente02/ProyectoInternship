<template>
    <div class="inicio">
      <h1>TUS SOLICITUDES DE PASANTIAS</h1> 
      <p>Te mostramos tus pasantias</p>
      <div class="card-inicio">
      <span class="text-a">PASANTIAS APROBADAS</span>
        <div class="card">
          <div v-for="card in cards" :key="card.id" class="card-individual">
            <div class="content">
              <div class="image">
                <img :src="card.imageUrl" alt="Card image" class="card-image">
              </div>
              <div class="text-content">
                <div class="text-content2">
                  <div class="title">{{ card.title }}</div>
                  <button class="book-btn">Mas informacion</button>
                </div>
                
                <div class="description">{{ card.description }}</div>
                <div class="info">
                  <div class="price">{{ card.price }} per person*</div>
                  <div class="ratings">
                    <span v-for="i in 5" :key="i" class="star"></span>
                    <span class="review-count">{{ card.reviews }} reviews</span>
                  </div>
                </div>
                <div class="disclaimer">*Prices may vary depending on selected date.</div>
              </div>
            </div>
          </div>
        </div>
        <span class="text-p">PASANTIAS EN ESPERA</span>
        <div class="card">
          <div v-for="card in cards" :key="card.id" class="card-individual">
            <div class="content">
              <div class="image">
                <img :src="card.imageUrl" alt="Card image" class="card-image">
              </div>
              <div class="text-content">
                <div class="text-content2">
                  <div class="title">{{ card.title }}</div>
                  <button class="book-btn">Mas informacion</button>
                </div>
                
                <div class="description">{{ card.description }}</div>
                <div class="info">
                  <div class="price">{{ card.price }} per person*</div>
                  <div class="ratings">
                    <span v-for="i in 5" :key="i" class="star"></span>
                    <span class="review-count">{{ card.reviews }} reviews</span>
                  </div>
                </div>
                <div class="disclaimer">*Prices may vary depending on selected date.</div>
              </div>
            </div>
          </div>
        </div>
        <span class="text-r">PASANTIAS RECHAZADAS</span>
        <div class="card">
          <div v-for="card in cards" :key="card.id" class="card-individual">
            <div class="content">
              <div class="image">
                <img :src="card.imageUrl" alt="Card image" class="card-image">
              </div>
              <div class="text-content">
                <div class="text-content2">
                  <div class="title">{{ card.title }}</div>
                  <button class="book-btn">Mas informacion</button>
                </div>
                
                <div class="description">{{ card.description }}</div>
                <div class="info">
                  <div class="price">{{ card.price }} per person*</div>
                  <div class="ratings">
                    <span v-for="i in 5" :key="i" class="star"></span>
                    <span class="review-count">{{ card.reviews }} reviews</span>
                  </div>
                </div>
                <div class="disclaimer">*Prices may vary depending on selected date.</div>
              </div>
            </div>
          </div>
        </div>
       </div> 
    </div>
    </template>
    
    
    <script>
    export default {
      data() {
        return {
          cards: [
            {
              id: 1,
              empresa:"JALA",
              estado:"APROBADO",
              descripcion:"Breve infromacion sobre la empresa y la pasantia",
              imageUrl: "https://okdiario.com/img/2023/04/10/-es-malo-que-los-gatos-coman-moscas-y-mosquitos-635x358.jpg",
              title: "Amsterdam Walking Tour",
              description: "Explore popular tourist destinations as well as hidden local favourites.",
              price: 17,
              reviews: 28
            },
            {
              id: 2,
              imageUrl: "https://img.freepik.com/vector-premium/cute-dibujos-animados-perro-pug-sentado-fondo-aislado_701683-46.jpg?w=996",
              title: "Card 2",
              description: "Description for Card 2",
              price: 20,
              reviews: 15
            },
            {
              id: 3,
              imageUrl: "https://img.freepik.com/vector-premium/cute-dibujos-animados-perro-pug-sentado-fondo-aislado_701683-46.jpg?w=996",
              title: "Card 3",
              description: "Description for Card 3",
              price: 25,
              reviews: 10
            },
            // Agrega más objetos para mostrar más tarjetas si lo necesitas
          ]
        };
      }
    };
    </script>
    
    <style scoped>
.inicio {
    position: relative;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    /* align-content: center; */
    justify-content: center;
    align-items: center;
    padding: 2rem;
    
}
    /** estilo eltra de titulo*/
    h1 {
      font-weight: 900;
      color: tomato;
      --x-offset: -0.0625em;
      --y-offset: 0.0625em;
      
      text-align: center;
      --stroke: 0.025em;
      text-shadow:
        var(--x-offset)
        var(--y-offset)
        0px
        var(--background-color), 
        
        calc( var(--x-offset) - var(--stroke) )
        calc( var(--y-offset) + var(--stroke) )
        0px
        var(--stroke-color);
      
    }
    /* for browsers that support spread, added in
    https://drafts.csswg.org/css-text-decor-4/#text-shadow-property
    currently: none browsers! none of them!
    I can't even find a test: 
    https://wpt.fyi/results/css/css-text-decor */
    @supports ( text-shadow: 1px 1px 1px 1px rgb(0, 0, 0) ) {
      h1 {
        text-shadow:
          
          var(--x-offset)
          var(--y-offset)
          0px
          0px
          var(--background-color), 
          
          var(--x-offset) 
          var(--y-offset)
          var(--stroke)
          0px
          var(--stroke-color);
        
      }
    }
    
    /**iniiciooo  boton  */
    .text-content {
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      
    }
    .text-content2 {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;

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

    .text-a,.text-p,.text-r{
        font-size: 1.5rem;
        font-weight: 900;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0.5rem;
    }
    .text-a{
        color: #00c123;
    }
    .text-p {
        color: #fee900;
      }
    .text-r {
       color: #dc0c0c;
       }
    .card {/**contenedore de indivialues */
      border: 0px solid #ccc;
      border-radius: 8px;
      overflow: hidden;
    }
    .card-individual {
      border: 3px solid #ccc;
      border-radius: 8px;
      overflow: hidden;
      margin: 1rem;
    }
    .card-inicio{
      border: 3px solid #ffffff;
      background-color:  #ffffff;
      border-radius: 8px;
      overflow: hidden;
      margin: 1rem;
    }
    .dark-theme .card-inicio {
      background-color: #434B54;
    }
    
    .content {
      display: flex;
      flex-direction: row;
      height: 100%;
    }
    
    .image {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 300px;
      height: 250px;
      padding: 0.5rem;
    }
    
    .image .card-image {
      width: 200px; /* Tamaño fijo para la imagen */
      height: auto;
      border-radius: 8px;
    }
    
    .text-content {
      width: 100%;
      padding: 0.5rem;
      display: flex;
      flex-direction: column;
      justify-content: space-between;


    }

    .title {
      font-weight: bold;
      font-size: 20px;
      margin-bottom: 10px;
    }
    
    .description {
      margin-bottom: 10px;
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
/* Estilos para dispositivos pequeños (teléfonos) */

@media only screen and (max-width: 600px) {
  .inicio{
    padding: 0.2rem;
  }
  /* Estilos específicos para dispositivos pequeños */
    h1{
        font-size: 1rem;
    }
    .text-a,.text-p,.text-r{
        font-size: 0.8rem;
    }
    .card-individual{
        margin: 0.4rem;
    }
    .card-inicio{
        padding: 0.2rem;
    }
    .content{
        flex-direction: column;
    }
    .image{
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 100%;
    }
    .image .card-image{
        width: 150px!important;
        height: auto!important;
    }
    .text-content{
        width: 100%;
        padding: 0.2rem;
    }
    .text-content2{
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    .title{
        font-size: 0.8rem;
    }
    .description{
        font-size: 0.5rem;
    }
}

/* Estilos para tabletas */
@media only screen and (min-width: 600px) and (max-width: 1024px) {

}

/* Estilos para dispositivos medianos */
@media only screen and (min-width: 1025px) and (max-width: 1440px) {
  /* Estilos específicos para dispositivos medianos */
  .student__principalPage{
        padding: 1.5rem;
  }
}

/* Estilos para dispositivos grandes (pantallas de escritorio) */
@media only screen and (min-width: 1441px) {
  /* Estilos específicos para dispositivos grandes */
}







    </style>
    
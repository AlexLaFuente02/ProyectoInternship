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
                  <button class="book-btn">Mas informacion</button>
                </div>
                <div class="title">{{ card.empresa }}</div>
                <div class="description">{{ card.descripcion }}</div>
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
                  <button class="book-btn">Mas informacion</button>
                </div>
                <div class="title">{{ card.title }}</div>
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
                <div class="title">{{ card.title }}</div>
                <div class="description">{{ card.description }}</div>
                <div class="info">
                  <div class="price">{{ card.price }} per person*</div>
                  <div class="ratings">
                    <span v-for="i in 5" :key="i" class="star"></span>
                    <span class="review-count">{{ card.reviews }} reviews</span>
                  </div>
                </div>
                <button class="book-btn">Book now</button>
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
    
    <style>
    /** estilo eltra de titulo*/
    h1 {
      font-size: calc( 1em + 30vmin );
      font-weight: 900;
      color: tomato;
      
      
      --x-offset: -0.0625em;
      --y-offset: 0.0625em;
      --stroke: 0.025em;
      --background-color: white;
      --stroke-color: lightblue;
      
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
      position: relative;
      
    }
    .text-content2 {
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
    }
    /**colores de texto de si esta aporbado o no */
    .text-a,.text-p,.text-r{
        position: relative;
        left: 10%; 
        right: 60%;
        transform: translate(50%,-50%);
        text-transform: uppercase;
        font-family: verdana;
        font-size: 200%;
        font-weight: 50%;
        text-shadow: 1px 1px 1px #919191,
            1px 2px 1px #919191,
            1px 3px 1px #919191,
            1px 4px 1px #919191,
            1px 5px 1px #919191,
            1px 6px 1px #919191,
            1px 7px 1px #919191,
            1px 8px 1px #919191,
            1px 9px 1px #919191,
            1px 10px 1px #919191,
        1px 18px 6px rgba(16,16,16,0.4),
        1px 22px 10px rgba(16,16,16,0.2),
        1px 25px 35px rgba(16,16,16,0.2),
        1px 30px 60px rgba(16,16,16,0.4);
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
    /**finnnnnnnnnnnnnnnnnnnnnnnn*/
    .card {/**contenedore de indivialues */
      border: 0px solid #ccc;
      border-radius: 8px;
      overflow: hidden;
      margin-top: 30px;
      margin-left: 5%;
      margin-right: 5%;
      margin-bottom: 15px;
    }
    .card-individual {
      border: 3px solid #ccc;
      border-radius: 8px;
      overflow: hidden;
      margin-bottom: 7px;
    }
    .card-inicio{
      border: 3px solid #ffffff;
      background-color:  #434B54;
      border-radius: 8px;
      overflow: hidden;
      margin-top: 15px;
      margin-right: 10%;
      margin-left: 1%;
       /* Ajusta este valor según el espacio que desees */
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
    </style>
    
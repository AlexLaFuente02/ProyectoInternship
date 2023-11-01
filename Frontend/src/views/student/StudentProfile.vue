<template>
    <div class="inicio">
      <div class="inicio2">
  <h1>PERFIL DE ESTUDIANTE / GRADUADO</h1></div>
    <div class="container">
      <div class="profile">
        <div class="personal-description box1">
  <!-- Título y botón para editar -->
            <div class="description-header">
            <h2>Acerca de mí</h2>
          </div>
          <!-- Texto de ejemplo -->
          <p>
            Inserta aquí la descripción personal del usuario.
            onal del usuario.Inserta aquí la descripción personal 
            del usuario.Inserta aquí la descripción personal del 
            usuario.Inserta aquí la descripción personal del usuari
            o.Inserta aquí la descripción personal del usuario.Inse
            rta aquí la descripción personal del usuario.Inserta aquí
              al del usuario.Inserta aquí la descripción personal del 
              usuario.
          </p>
          
        </div>
           <!-- Sección "Mi Perfil" -->
        <div class="social-media box2">
  
          <h2 style="justify-content: center;">Mi perfil</h2>
          <!-- Imagen de perfil -->
          <img src="https://t2.ea.ltmcdn.com/es/razas/2/3/5/pug-o-carlino_532_0_orig.jpg" alt="Mi Foto de Perfil" class="profile-picture" />
          <!--botones funenme-->
          <div class="footer__links">
          <a
            class="btn text-white btn-floating rounded-circle m-1"
            style="background-color: #3b5998"
            href="https://www.facebook.com/usei.lpz"
            role="button"
            ><font-awesome-icon :icon="['fab', 'facebook']"
          /></a>
          <a
            class="btn text-white btn-floating rounded-circle m-1"
            style="background-color: #55acee"
            href="https://twitter.com/UCBLaPaz"
            role="button"
            ><font-awesome-icon :icon="['fab', 'twitter']"
          /></a>
          <a
            class="btn text-white btn-floating rounded-circle m-1"
            style="background-color: #ac2bac"
            href="https://www.instagram.com/usei.lapaz/?fbclid=IwAR07aYlD7DflEtSJDuW6ERzw_r7DjawQAQVxbXcShM4RmZjLHQAUPensFyc"
            role="button"
            ><font-awesome-icon :icon="['fab', 'instagram']"
          /></a>
          <a
            class="btn text-white btn-floating rounded-circle m-1"
            style="background-color: #0082ca"
            href="https://www.linkedin.com/in/usei-la-paz-080327253/?originalSubdomain=bo"
            role="button"
            ><font-awesome-icon :icon="['fab', 'linkedin']"
          /></a>
      </div>
      </div>
        <div class="user-details box3">
          <!-- Detalles del usuario -->
          <h2>Datos del usuario</h2>
          <p>Nombre: Nombre del usuario</p>
          <p>Edad: Edad del usuario</p>
          <p>Cumpleaños: Fecha de nacimiento del usuario</p>
          <p>Carrera: Carrera académica del usuario</p>
        </div>
      </div>
    </div>
  </div>
  </template>
  
  <script>
  export default {
    // Código de tu componente
  };
  </script>
  
  <style>
  /*contendores para ordenas*/
  .personal-description,
  .social-media,
  .user-details {
    flex: 1; /* Permite que los contenedores ocupen el mismo ancho */
    margin: 10px; /* Espaciado entre contenedores */
    border-radius: 10px; 
    background-color: azure;
    border: 100px dotted #000; /* Ancho del borde de 2px, estilo punteado y color negro (#000) */
    padding: 20px; /* Añade algo de relleno para visualizar mejor el borde */
  }
  /**perfil */
  .profile {
      background: linear-gradient(-45deg, #eb52ee, #b93ce7, #23a6d5, #23d5ab);
      background-size: 400% 400%;
      animation: gradient 15s ease infinite;
      margin-right: 10%;
    padding: 20px;
    border-radius: 10px; /* Añade bordes redondeados */
    display: flex;
    border: 2px dotted #000; /* Ancho del borde de 2px, estilo punteado y color negro (#000) */
    padding: 20px; }
  
  @keyframes gradient {
      0% {
          background-position: 0% 50%;
      }
      50% {
          background-position: 100% 50%;
      }
      100% {
          background-position: 0% 50%;
      }
  }
  h2 {
       
        font-size: calc( 1em + 5vmin );
        font-weight: 900;
        color: rgb(0, 0, 0);
        
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
        h2 {
         
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
  
  /* Estilos para el contenedor principal */
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 10%; /* Ajusta la altura según tus necesidades */
  }
  
  /**contenedor inicial */
  .inicio{
    margin-top: 20px;
    left: 20px;
    margin-bottom:10%;
  }
  .inicio2{
    left: 20px;
  
  }
  @media (max-width: 990px) {
    .inicio{
    margin-top: 20px;
    left: 20px;
  }
  
  }
  
  @media (max-width: 768px) {
    .inicio{
    margin-top: 20px;
    left: 20px;
  }
  
  }
  
  @media (max-width: 556px) {
    .inicio{
    margin-top: 20px;
    left: 20px;
  }
  
  }
  
  
  
  h1 {
        font-size: calc( 1em + 5vmin );
        font-weight: 900;
        color: rgb(0, 0, 0);
        
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
  /* Estilos para la imagen de perfil */
  .profile-picture {
    display: flex;
    width:100%;
    height: auto;
    margin-top: 10px;
    right: 10%;
    border-radius: 50%;
  }
  
  /** */
  .description-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
    position: relative;
  }
  
  
  /* Estilos para los contenedores */
  .profile {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    max-width: 100%;
    background-color: aqua;
  }
  
  .box1,
  .box2,
  .box3 {
    padding: 5%;
    border: 1px solid #ccc;
    flex: 1;
    min-width: 300px; /* Ancho mínimo para evitar que se colapsen completamente */
  }
  
  /* Media query para responsividad */
  @media (max-width: 600px) {
    .profile {
      flex-direction: column;
    }
    .box1,
    .box2,
    .box3 {
    
      width: calc(100% - 20px);
    }
  }
  
  .footer__links{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    margin-top: 15%;
  }
  @media (max-width: 768px) {
    footer{
      flex-direction: column-reverse;
    }
    .footer__links{
      margin-top: 1rem;
    }
    img{
      width: 200px;
      height: auto;
    }
  }
  @media (max-width: 576px) {
    .footer__links{
      margin-top: 0.5rem;
    }
  }
  
  </style>
  
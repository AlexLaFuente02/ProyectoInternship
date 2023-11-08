<template>
  <main>
    <div class="container__landingPage">
      <div class="landing__page__information">
        <div class="container__header__description">
          <h1>¡Bienvenido a la plataforma de pasantías!</h1>
          <p>
            En esta plataforma podrás encontrar pasantías y prácticas
            profesionales que te ayudarán a desarrollar tus habilidades y
            competencias en el mundo laboral.
          </p>
          
        </div>
        <div class="top-section">
        <div class="left-section">
          <p>Bienvenido, desde esta página puedes agregar nuevas convocatorias y revisar las solicitudes de estudiantes que recibiste.</p>
        </div>
        <div class="right-section">
          <img src="https://img.freepik.com/vector-premium/cute-dibujos-animados-perro-pug-sentado-fondo-aislado_701683-46.jpg?w=996" alt="Logo de la empresa" class="company-logo" />
        </div>
      </div>
      <hr/>
        <div class="container__header__page">
        <div class="container__header__description">
          <h1>¡Acción rápida!</h1>
          <div class="action-buttons">
          <button @click="addNewConvocatoria">Agregar Convocatoria</button>
          <button @click="misConvocatorias">Mis Convocatorias</button>
          <button @click="bandejaSolicitudes">Bandeja de Solicitudes</button>
        </div>

        </div>
      </div>
      <hr/>

      <div class="container__problem">
        <div class="container__problem__image">
          <img src="https://s.yimg.com/ny/api/res/1.2/0h_DQCqc7Q8A.rc5jVk2kA--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTQyNw--/https://media.zenfs.com/en/homerun/feed_manager_auto_publish_494/cc75c92508ef9b1713bfca5cc2f1a3d3" />
        </div>
        <div class="container__problem__description">
          <h1>¿Cuál es el problema?</h1>
          <p>
            En la actualidad, los estudiantes y graduados no cuentan con una
            plataforma que les permita encontrar pasantías y prácticas
            profesionales de manera fácil y rápida.
          </p>
        </div>
      </div>
      <hr/>
      <div class="container__header__page">
        <div class="container__header__description">
          <h1>¡Convocatorias activas o Solicitudes recibidas!</h1>
          <p>
            En esta plataforma podrás encontrar pasantías y prácticas
            profesionales que te ayudarán a desarrollar tus habilidades y
            competencias en el mundo laboral.
          </p>
          <Button 
              text="Crear Cuenta" 
              :color="0" 
              :disabled="false"
              @option-selected="createAccount"
              >
            </Button>

        </div>
        <div class="container__carrousel">
          <Carousel :listImages="PhotoService" />
        </div>
      </div>
      </div>
    </div>
  </main>
</template>
<script>
import Carousel from "@/components/common/Carousel.vue";
import Button from "@/components/common/Button.vue";
export default {
  components: {
    Carousel,
    Button
  },
  data() {
    return {
      PhotoService:[
      {
            itemImageSrc: 'https://www.animafestexperience.net/internshipsabroad/wp-content/uploads/2019/08/ANIMAFEST-PASANTIAS-REMUNERADAS-min-min-800x333.jpg',
            thumbnailImageSrc: 'https://www.animafestexperience.net/internshipsabroad/wp-content/uploads/2019/08/ANIMAFEST-PASANTIAS-REMUNERADAS-min-min-800x333.jpg',
            alt: 'Explota todas tus habilidades ¡Enhorabuena!',
            title: '¡Bienvenido al Mundo Laboral!'
          },
          {
            itemImageSrc: 'https://idiomasseif.com/wp-content/uploads/2019/04/importancia-del-ingles-en-el-mundo-laboral.jpg',
            thumbnailImageSrc: 'https://idiomasseif.com/wp-content/uploads/2019/04/importancia-del-ingles-en-el-mundo-laboral.jpg',
            alt: 'Renueva tu empresa con los mejores estudiantes del país.',
            title: '¡Como institución puedes contratar a estudiantes y graduados!'
          },
          {
            itemImageSrc: 'https://media.gq.com.mx/photos/642447f1c632255eae24a045/master/w_1920,c_limit/trabajo.jpg',
            thumbnailImageSrc: 'https://media.gq.com.mx/photos/642447f1c632255eae24a045/master/w_1920,c_limit/trabajo.jpg',
            alt: '¡Estamos seguros de que pronto encontraras tu lugar...!',
            title: '¡Muéstranos todo lo que sabes!'
          },
      ],
    };
  },
  methods: {
    createAccount(option) {
      if (option) {
        console.log("createAccount");
        this.$router.push("/UserRegister");
      }
    },
  },
  
};
</script>
<style scoped>
.container__landingPage {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  
}
.landing__page__information{
  background-color: #FDFEFF;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  box-shadow: 0 24px 64px -2px rgba(0, 0, 0, 0.02),
    0 6px 16px -2px rgba(0, 0, 0, 0.06), 0 2px 6px -2px rgba(0, 0, 0, 0.08);
}
.dark-theme .landing__page__information {
  background-color: #434b54;
}
.container__header__page{
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
}
.container__header__description{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 3% 7%;
}
.container__header__description h1{
  font-size: 1.5rem;
  text-align: center;
}
.container__header__description p{
  font-size: 1rem;
  text-align: center;
}
.container__header__description Button{
  margin-top: 25%;
}
.container__carrousel {
  display: flex;
  padding: 1rem;
  align-items: center;
  justify-content: center;
  width: 600px;
  height: 400px;
  z-index: 0;
}
.container__problem{
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  margin-top: 2%;
}
.container__problem__description{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 3% 7%;
}
.container__problem__description h1{
  font-size: 1.5rem;
  text-align: center;
}
.container__problem__description p{
  font-size: 1rem;
  text-align: center;
}
.container__problem__image{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 3% 7%;
}
.container__problem__image img{
  width: 400px;
  height: 300px;
}
.container__solution{
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  margin-top: 2%;
}
.container__solution__description{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 3% 7%;
}
.container__solution__description h1{
  font-size: 1.5rem;
  text-align: center;
}
.container__solution__description p{
  font-size: 1rem;
  text-align: center;
}
hr{
  width: 90%;
  margin-top: 2%;
  margin-bottom: 2%;
  border: 1px solid #E4E5E5;
  /*Centrar hr*/
  display: block;
  margin-left: auto;
  margin-right: auto;

}
.dark-theme hr{
  border: 1px solid #5B646D;
}
@media screen and (max-width: 1250px) {
  .container__header__page{
    flex-direction: column;
  }
  .container__header__description{
    padding: 3% 7%;
  }
  .container__carrousel {
    width: 400px;
    height: 300px;
  }
  .container__problem{
    flex-direction: column-reverse;
  }
  .container__problem__description{
    padding: 3% 7%;
  }
  .container__problem__image{
    padding: 3% 7%;
  }
  .container__problem__image img{
    width: 300px;
    height: 200px;
  }
  .container__solution{
    flex-direction: column;
  }
  .container__solution__description{
    padding: 3% 7%;
  }
}
@media screen and (max-width: 768px) {
  .container__header__page{
    flex-direction: column;
  }
  .container__header__description{
    padding: 3% 7%;
  }
  .container__carrousel {
    width: 300px;
    height: 200px;
  }
  .container__problem{
    flex-direction: column-reverse;
  }
  .container__problem__description{
    padding: 3% 7%;
  }
  .container__problem__image{
    padding: 3% 7%;
  }
  .container__problem__image img{
    width: 200px;
    height: 150px;
  }
  .container__solution{
    flex-direction: column;
  }
  .container__solution__description{
    padding: 3% 7%;
  }
}
@media screen and (max-width: 425px) {
  .container__header__page{
    flex-direction: column;
  }
  .container__header__description{
    padding: 3% 7%;
  }
  .container__carrousel {
    width: 200px;
    height: 150px;
  }
  .container__problem{
    flex-direction: column-reverse;
  }
  .container__problem__description{
    padding: 3% 7%;
  }
  .container__problem__image{
    padding: 3% 7%;
  }
  .container__problem__image img{
    width: 150px;
    height: 100px;
  }
  .container__solution{
    flex-direction: column;
  }
  .container__solution__description{
    padding: 3% 7%;
  }
}
@media screen and (max-width: 375px) {
  .container__header__page{
    flex-direction: column;
  }
  .container__header__description{
    padding: 3% 7%;
  }
  .container__carrousel {
    width: 200px;
    height: 150px;
  }
  .container__problem{
    flex-direction: column-reverse;
  }
  .container__problem__description{
    padding: 3% 7%;
  }
  .container__problem__image{
    padding: 3% 7%;
  }
  .container__problem__image img{
    width: 150px;
    height: 100px;
  }
  .container__solution{
    flex-direction: column;
  }
  .container__solution__description{
    padding: 3% 7%;
  }
}
/**ARREGLO0S   DE COSAS */

/* Estilos para la página de inicio de sesión */
@media (max-width: 480px) {
  .top-section {
    flex-direction: column;
    align-items: center;
  }

  .left-section {
    width: 100%;
  }

  .right-section {
    width: 100%;
    text-align: center;
  }

  .company-logo {
    margin-top: 15px;
  }
}
  .login-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  
  .top-section {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }
  
  .left-section {
    width: 50%;
    margin: 5%;
  }
  
  .right-section {
    width: 50%;
    text-align: right;
    margin: 5%;
  }
  
  h2 {
    font-size: 20px;
    color: #333;
    text-align: left;
  }
  
  .company-logo {
    max-width: 100%;
    height: auto;
  }
  
  .quick-action {
    margin-top: 20px;
  }
  
  h3 {
    font-size: 18px;
    color: #333;
    text-align: center;
    margin-bottom: 10px;
  }
  
  .action-buttons {
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    margin-top: 0%;
  }
  
  button {
    padding: 10px 20px;
    background-color: #5a99dd;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
    margin: 0% 5px 10px 5px;
  }
  
  
  @media (min-width: 700px) {
    .company-logo {
    max-width:auto;
    height: 280px;
  }
  
}
</style>

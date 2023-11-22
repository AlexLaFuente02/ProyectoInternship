<template>
   <div class="student__principalPage">
            <div class="student__profile">
                <div class="profile__content__header">
                        <div class="content__welcome">
                          
                            <div class="student__data">
                                <span class="welcome__student">
                                  ¡Bienvenido a la plataforma !
                                </span>
                                <br>
                                <span class="career__student">
                                  En esta plataforma administrar las empresas y pasantias que tenemos.
            
                                </span>
                                <span class="career__student">
                                  <img src="https://img.freepik.com/vector-premium/cute-dibujos-animados-perro-pug-sentado-fondo-aislado_701683-46.jpg?w=996" alt="Logo de la empresa" class="company-logo" />
                                </span>
                            </div>
                        </div>
                        
                </div>
                <div class="summary">
                    <span class="summary__title">
                        Resumen general de tus pasantías
                    </span>
                    <div class="summary__content">
                        <span class="summary__content__number">120 
                            <span class="summary__content__text">Instituciones</span>
                        </span>
                        <span class="summary__content__number">10 
                            <span class="summary__content__text">Solicitudes deInstituciones</span>
                        </span>
                        <span class="summary__content__number">13 
                            <span class="summary__content__text">Pasantias</span>
                        </span>
                        <span class="summary__content__number">12
                            <span class="summary__content__text">Solicitudes de Pasantias</span>
                        </span>
                    </div>
                </div>
            </div>

          </div>
          <div class="student__principalPage">
            <div class="student__profile">
                <div class="profile__content__header">
                        <div class="content__welcome">
                          
                            <div class="student__data">
                                <span class="welcome__student">
                                 ¿Cuál es el problema?
                                </span>
                                <br>
                                <span class="career__student">
                                 
              En la actualidad, los estudiantes y graduados no cuentan con una
              plataforma que les permita encontrar pasantías y prácticas
              profesionales de manera fácil y rápida.
            </span>
                                <span class="career__student">
                                  <img src="https://img.freepik.com/vector-premium/cute-dibujos-animados-perro-pug-sentado-fondo-aislado_701683-46.jpg?w=996" alt="Logo de la empresa" class="company-logo" />
                                </span>
                            </div>
                        </div>
                        
                </div>
              
            </div>

          </div>

          <div class="student__principalPage">
            <div class="student__profile">
                <div class="profile__content__header">
                        <div class="content__welcome">
                          
                            <div class="student__data">
                                <span class="welcome__student">
                                  ¡Convocatorias activas o Solicitudes recibidas!
                                </span>
                                <br>
                                <span class="career__student">
                                 
                                  En esta plataforma podrás encontrar pasantías y prácticas
              profesionales que te ayudarán a desarrollar tus habilidades y
              competencias en el mundo laboral.
            </span>
            <div class="container__carrousel">
            <Carousel :listImages="PhotoService" />
          </div>
                            </div>
                        </div>
                        
                </div>
              
            </div>

          </div>
      

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
    
    .company-logo {
      max-width: 100%;
      height: auto;
    }
    
    
    h3 {
      font-size: 18px;
      color: #333;
      text-align: center;
      margin-bottom: 10px;
    }
    

    
    @media (min-width: 700px) {
      .company-logo {
      max-width:auto;
      height: 280px;
    }}
  
    @media (max-width: 700px) {
      .company-logo {
      max-width:auto;
      height: 150px;
    }
    
  }

  /**prueba */

  .student__principalPage{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 2rem;
    
}

.student__content__internship{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
}


/*Estilos para el perfil del estudiante*/
.student__profile{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 0.5rem;
    border-radius: 10px;
    background-color: #Fff;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
.dark-theme .student__profile{
    background-color: #434B54;
}
.profile__content__header{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
}
.content__welcome{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 50%;
}

.student__data{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-left: 1rem;
}
.welcome__student{
    font-size: 1.5rem;
    font-weight: 700;
}
.career__student{
    font-size: 1rem;
    font-weight: 400;
    margin-top: 10px;
    margin-bottom: 30px;
}
.content__more{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 50%;
}
.profile__button {
  padding: 0.9rem;
  margin: 0.5rem;
  color: #fff;
  cursor: pointer;
  text-align:center;
  border: none;
  background-size: 300% 100%;
  border-radius: 50px;
  -o-transition: all .4s ease-in-out;
  -webkit-transition: all .4s ease-in-out;
  transition: all .4s ease-in-out;
}

.profile__button:hover {
  background-position: 100% 0;
  -o-transition: all .4s ease-in-out;
  -webkit-transition: all .4s ease-in-out;
  transition: all .4s ease-in-out;
}

.profile__button:focus {
  outline: none;
}

.profile__button.bn23 {
    background-image: linear-gradient(
    to right,
    #25aae1,
    #4481eb,
    #04befe,
    #3f86ed
  );
  box-shadow: 0 4px 15px 0 rgba(65, 132, 234, 0.75);
}
.dark-theme .profile__button.bn23{
    background-image: linear-gradient(
    to right,
    #29323c,
    #485563,
    #2b5876,
    #4e4376
  );
  box-shadow: 0 4px 15px 0 rgba(45, 54, 65, 0.75);
}

.see_vitae{
    font-size: 1rem;
    font-weight: 700;
    margin-left: 0.5rem;
}
.edit__Profile{
    font-size: 1rem;
    font-weight: 700;
    margin-left: 0.5rem;
}
.summary{
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    padding: 0.5rem;
    margin: 0.5rem;
}
.summary__title{
    font-size: 1.5rem;
    font-weight: 700;
}
.summary__content{
    display: flex;
    flex-direction: row;
    width: 100%;
    font-size: 1rem;
}
.summary__content__number{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0.5rem;
    font-size: 3rem;
    font-weight: 700;
}
.summary__content__text{
    font-size: 1rem;
    font-weight: 700;
    margin-left: 0.5rem;
}
/*Estilos para las pasantías del estudiante*/
/*Estilos para las pasantías activas del estudiante*/
.internship__active__by__student{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 0.5rem;
    margin: 0 0 1.5rem 0;
    height: 500px; 
    border-radius: 10px;
    background-color: #Fff;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
.dark-theme .internship__active__by__student{
    background-color: #434B54;
}
.internship__active__by__student h1{
    font-size: 1.5rem;
    font-weight: 700;
    margin: 1rem;
}
.container__cards{
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

.requests__by__student{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 0.5rem;
    margin: 0 0 1.5rem 0;
    height: 500px; 
    border-radius: 10px;
    background-color: #Fff;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
.container__requests{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
}

.dark-theme .requests__by__student{
    background-color: #434B54;
}
.container__little__nav{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
}
.container__Arrow{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 300px;
}



/* Estilos para dispositivos pequeños (teléfonos) */

@media only screen and (max-width: 600px) {
  /* Estilos específicos para dispositivos pequeños */
    .student__principalPage{
            padding: 0.5rem;
    }
    .profile__content__header{
        flex-direction: column;
  }
    .content__welcome{
        width: 100%;
        margin-bottom: 0.3rem;
    }
    .content__more{
        width: 100%;
    }
    .profile__button{
        margin: 0.2rem;
        padding: 0.5rem;
        font-size: 0.4rem;
    }
    .profile__button span{
        font-size: 0.6rem;
    }
    .summary__content{
        flex-wrap: wrap;
    }
    .summary__title{
        font-size: 1rem;
        font-weight: 700;
    }
    .summary__content__number{
        font-size: 1.2rem;
    }
    .summary__content__text{
        font-size: 0.6rem;
    }





}

/* Estilos para tabletas */
@media only screen and (min-width: 600px) and (max-width: 1024px) {
  /* Estilos específicos para tabletas */
  .student__principalPage{
        padding: 1rem;
    
  }
  .profile__content__header{
        flex-direction: column;
  }
    .content__welcome{
        width: 100%;
        margin-bottom: 0.5rem;
    }
    .content__more{
        width: 100%;
    }
    .profile__button{
        margin: 0.3rem 0.3rem;
        padding: 0.8rem;
        font-size: 0.6rem;
    }
    .profile__button span{
        font-size: 0.8rem;
    }
    .summary__content{
        flex-wrap: wrap;
    }
    .summary__title{
        font-size: 1.3rem;
        font-weight: 700;
    }
    .summary__content__number{
        font-size: 1.5rem;
    }
    .summary__content__text{
        font-size: 0.8rem;
    }
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
  
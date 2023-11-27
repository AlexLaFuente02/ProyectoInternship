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
                                  <img src="data:image/jpeg;base64,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" alt="Logo de la empresa" class="company-logo" />
                                </span>
                            </div>
                        </div>
                        
                </div>
                <div class="summary">
                    <span class="summary__title">
                        Resumen general de tus pasantías
                    </span>
                    <div class="summary__content">
                       
                        <span class="summary__content__number">10 
                            <span class="summary__content__text">Solicitudes deInstituciones</span>
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
              <div class="student__principalPage">
            <h1>Solicitudes de pasantias</h1>
            <div class="container__cards">
                <div class="card" v-for="internship in listInterships.result" v-if="everyInternshipsAreLoaded">
                    <SimpleCard 
                    :key="internship.id"
                    :internship="internship"/>
                </div>
            </div>                  
                </div>
              
            </div>

          </div>
          <div class="student__principalPage">
            <div class="student__profile">
              <div class="student__principalPage">
            <h1>Solicitudies de empresas</h1>
            <div class="container__cards">
                <div class="card" v-for="internship in listInterships.result" v-if="everyInternshipsAreLoaded">
                    <SimpleCard 
                    :key="internship.id"
                    :internship="internship"/>
                </div>
            </div>                  
                </div>
              
            </div>

          </div>

          <!--prueba -->
          <div class="card-inicio">
        <div class="card">
          <h1>Solicitudies de empresas</h1>
          <div class="EmpresasDestacadas">
           
        <div class="company-cards-container">
          <!-- Card Component -->
        <Tarjetitas 
        name="YPFB" 
        description="YPFB es una empresa estatal de hidrocarburos de Bolivia. Es una de las empresas más grandes de Bolivia y es responsable de la exploración, explotación, refinación, transporte y comercialización de hidrocarburos en el país."
        />
        <Tarjetitas 
        name="Banco Mercantil Santa Cruz"
        description="Banco Mercantil Santa Cruz es una empresa financiera boliviana fundada en 1982. Es el banco más grande de Bolivia en términos de activos y patrimonio."
        />
        <Tarjetitas
        name="Banco Nacional de Bolivia"
        logoSrc="https://debolivia.site/wp-content/uploads/classified-listing/2021/06/bnb-bolivia-2021-841x493.jpg"
        description="Banco Nacional de Bolivia es una empresa financiera boliviana fundada en 1871. Es el banco más antiguo de Bolivia y es el segundo banco más grande del país en términos de activos y patrimonio."
        />
        <Tarjetitas
        name="Banco BISA"
        logoSrc="data:image/jpeg;base64,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"
        description="Banco BISA es una empresa financiera boliviana fundada en 1963. Es el tercer banco más grande de Bolivia en términos de activos y patrimonio."
        />
        <Tarjetitas
        name="Banco Ganadero"
        logoSrc="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAABvFBMVEUCTAH///8ATQEATwAAAAADSwH//f8AUQAAPAABTAMAQAADSgMARwAANQAANwD8//8AQwAALQAAJgAAOgD2//8AEwAAMAAALAAAGwD/+f8AGAAAEQAAIQAAxAAAIwAAyADu//8GvwAACwAAHgAASRUASwrj//+AdXZOT0oMzwsADQAPRgYFdwgEbwQIig8PsQwGlw0CXAEZihghligWrxUF1wgiZThQk21OkXQ+hWMvcUxBhGs3cVIAUREmcElGhnI0fVVsmYESVyhvooNelnFbjnNOfmEfVzAoZUgLWiksXk0IXDUfWT0ETzAta0EJZgN1lYXC6de828qi1ril1MHL++LS5t3Y9usvWzWs4M1lhm7V//xJblR0qYCM0b7K+u7j29+4rq/Fy8zj1t2woqeIrp53fW9TZFeWoY7n6OTWxs735vASoBNjZmOorKG2wbcFRhyimpSHo58rHyM6Nzg2QTofSTCIh4Gev5/G6OEhJBdTRERKdGDb39CMkYVmpXJuuaKswa4AMRx5c2l9cntca2C11dEdeUWUxrq1wcSj6tBFkWRrhn5/yapUXFducXPAq7M5XFckNSBINzKy34P0AAAMeklEQVR4nO2Y+19TRxbAM3Nz388kN08IuQFuIEYMWBSw4AoI+GoxmPWKLwgFlZRnVwV160qpFreWdt1/eM/cm/BQ20/3s/2hn/2cr49MJnNn5jxnzg2FEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBECTEf9T4/0GVOY6jJZWqiiarvCrL/8ts1OeP2tsfgwy7Cqkcb4kne2IqpdwnxnA+v2u6P518sKUQz6tuTDyVL2ZPcVZJFT8x5k9omd8P5VVVFcu5XD6fzZV7FLfEfxSLss+nYpU16Ycdod8Rzg198YyDRz9+ig/GHPzffOS/SRcUhouxnnIum83ls9leUfp4jKYyji58dL3m5vxN8zL0BDIf7vz4nn13ONAEf+Ab9NckPLJQs3Fs9UNZPulonGZZfac/E3tzWbBiNt/fo3y0kBaTAEVRgglkHpoWa1NoKEwgaimWv6TFBvK+tFRToG3xR1elVLPgWa25FU3TLL7R0PyRvKb5H0FP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"
        description="Banco Ganadero es una empresa financiera boliviana fundada en 1994. Es el cuarto banco más grande de Bolivia en términos de activos y patrimonio."
        />
        <Tarjetitas
        name="Entel"
        logoSrc="https://micuenta.entel.bo/ui/mc_imgs/gui/ico_entel.png"
        description="Entel es una empresa estatal de telecomunicaciones de Bolivia fundada en 1965. Es la empresa de telecomunicaciones más grande de Bolivia y es responsable de la provisión de servicios de telefonía móvil, telefonía fija, internet y televisión por cable en el país."
        />
        <Tarjetitas
        name="Tigo"
        logoSrc="https://www.tigo.com.bo/assets/square-tigo.png"
        description="Tigo es una empresa de telecomunicaciones de Bolivia fundada en 1991. Es la segunda empresa de telecomunicaciones más grande de Bolivia y es responsable de la provisión de servicios de telefonía móvil, telefonía fija, internet y televisión por cable en el país."
        />
        <Tarjetitas
        name="Viva"
        logoSrc="https://upload.wikimedia.org/wikipedia/commons/b/ba/VIVA2020.png"
        description="Viva es una empresa de telecomunicaciones de Bolivia fundada en 2013. Es la tercera empresa de telecomunicaciones más grande de Bolivia y es responsable de la provisión de servicios de telefonía móvil, telefonía fija, internet y televisión por cable en el país."
        />
        <Tarjetitas
        name="Coca-Cola"
        logoSrc="https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Coca-Cola_bottle_cap.svg/800px-Coca-Cola_bottle_cap.svg.png"
        description="Coca-Cola es una empresa multinacional de bebidas fundada en 1892. Es la empresa de bebidas más grande del mundo y es responsable de la producción y distribución de bebidas en más de 200 países."
        />
        <!-- Add more companies as needed -->
        </div>
      </div><div class="container__button">
          <Button 
            text="Revisa sus solicitudes de empresas Ahora!" 
            :color="0" 
            :disabled="false"
            @option-selected="Empresas"
            >
          </Button>
        </div></div></div>

        <!--prueba -->
          <div class="card-inicio">
        <div class="card">
          <h1>Solicitudies de convocatorias</h1>
          <div class="EmpresasDestacadas">
           
        <div class="company-cards-container">
          <!-- Card Component -->
        
        <TarjetitasPasantias
        name="Banco Ganadero"
        logoSrc="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAABvFBMVEUCTAH///8ATQEATwAAAAADSwH//f8AUQAAPAABTAMAQAADSgMARwAANQAANwD8//8AQwAALQAAJgAAOgD2//8AEwAAMAAALAAAGwD/+f8AGAAAEQAAIQAAxAAAIwAAyADu//8GvwAACwAAHgAASRUASwrj//+AdXZOT0oMzwsADQAPRgYFdwgEbwQIig8PsQwGlw0CXAEZihghligWrxUF1wgiZThQk21OkXQ+hWMvcUxBhGs3cVIAUREmcElGhnI0fVVsmYESVyhvooNelnFbjnNOfmEfVzAoZUgLWiksXk0IXDUfWT0ETzAta0EJZgN1lYXC6de828qi1ril1MHL++LS5t3Y9usvWzWs4M1lhm7V//xJblR0qYCM0b7K+u7j29+4rq/Fy8zj1t2woqeIrp53fW9TZFeWoY7n6OTWxs735vASoBNjZmOorKG2wbcFRhyimpSHo58rHyM6Nzg2QTofSTCIh4Gev5/G6OEhJBdTRERKdGDb39CMkYVmpXJuuaKswa4AMRx5c2l9cntca2C11dEdeUWUxrq1wcSj6tBFkWRrhn5/yapUXFducXPAq7M5XFckNSBINzKy34P0AAAMeklEQVR4nO2Y+19TRxbAM3Nz388kN08IuQFuIEYMWBSw4AoI+GoxmPWKLwgFlZRnVwV160qpFreWdt1/eM/cm/BQ20/3s/2hn/2cr49MJnNn5jxnzg2FEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBECTEf9T4/0GVOY6jJZWqiiarvCrL/8ts1OeP2tsfgwy7Cqkcb4kne2IqpdwnxnA+v2u6P518sKUQz6tuTDyVL2ZPcVZJFT8x5k9omd8P5VVVFcu5XD6fzZV7FLfEfxSLss+nYpU16Ycdod8Rzg198YyDRz9+ig/GHPzffOS/SRcUhouxnnIum83ls9leUfp4jKYyji58dL3m5vxN8zL0BDIf7vz4nn13ONAEf+Ab9NckPLJQs3Fs9UNZPulonGZZfac/E3tzWbBiNt/fo3y0kBaTAEVRgglkHpoWa1NoKEwgaimWv6TFBvK+tFRToG3xR1elVLPgWa25FU3TLL7R0PyRvKb5H0FP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"
        description="Banco Ganadero es una empresa financiera boliviana fundada en 1994. Es el cuarto banco más grande de Bolivia en términos de activos y patrimonio."
        />
        <TarjetitasPasantias
        name="Entel"
        logoSrc="https://micuenta.entel.bo/ui/mc_imgs/gui/ico_entel.png"
        description="Entel es una empresa estatal de telecomunicaciones de Bolivia fundada en 1965. Es la empresa de telecomunicaciones más grande de Bolivia y es responsable de la provisión de servicios de telefonía móvil, telefonía fija, internet y televisión por cable en el país."
        />
        <TarjetitasPasantias
        name="Tigo"
        logoSrc="https://www.tigo.com.bo/assets/square-tigo.png"
        description="Tigo es una empresa de telecomunicaciones de Bolivia fundada en 1991. Es la segunda empresa de telecomunicaciones más grande de Bolivia y es responsable de la provisión de servicios de telefonía móvil, telefonía fija, internet y televisión por cable en el país."
        />
        <TarjetitasPasantias
        name="Viva"
        logoSrc="https://upload.wikimedia.org/wikipedia/commons/b/ba/VIVA2020.png"
        description="Viva es una empresa de telecomunicaciones de Bolivia fundada en 2013. Es la tercera empresa de telecomunicaciones más grande de Bolivia y es responsable de la provisión de servicios de telefonía móvil, telefonía fija, internet y televisión por cable en el país."
        />
        <TarjetitasPasantias
        name="Coca-Cola"
        logoSrc="https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Coca-Cola_bottle_cap.svg/800px-Coca-Cola_bottle_cap.svg.png"
        description="Coca-Cola es una empresa multinacional de bebidas fundada en 1892. Es la empresa de bebidas más grande del mundo y es responsable de la producción y distribución de bebidas en más de 200 países."
        />
        <!-- Add more companies as needed -->
        </div>
      </div><div class="container__button">
          <Button 
            text="Revisa sus convocatorias de empresas Ahora!" 
            :color="0" 
            :disabled="false"
            @option-selected="Convocatorias"
            >
          </Button>
        </div></div></div>

      
    
        
        <div class="card-inicio">
        <div class="card">
          <h1>Solicitudies de convocatorias</h1>
          <div class="EmpresasDestacadas">
           
            <div v-for="card in listInternship" :key="card.id" v-if="everyInternshipsAreLoaded" class="company-cards-container">
          <!-- Card Component -->
        <TarjetitasPasantias 
        name={{card.nombreinstitucion}} 
        description={{ card.reseniainstitucion }}
        />
        <!-- Add more companies as needed -->
        </div>
      
      </div>
      <div class="container__button">
          <Button 
            text="Revisa tus convocatorias de empresas Ahora!" 
            :color="0" 
            :disabled="false"
            @option-selected="Convocatorias"
            >
          </Button>
        </div>
        </div>
      </div>
    
        
        <div class="card-inicio">
        <div class="card">
          <h1>Solicitudies de empresas</h1>
          <div class="EmpresasDestacadas">
           
        <div v-for="card in listInstitution.result" :key="card.id" v-if="everyInternshipsAreLoaded" class="company-cards-container">
          <!-- Card Component -->
        <Tarjetitas 
        :name="card.nombreinstitucion"
        :description=" card.reseniainstitucion "
        />
        <!-- Add more companies as needed -->
        </div>
      
      </div>
      <div class="container__button">
          <Button 
            text="Revisa sus solicitudes de empresas Ahora!" 
            :color="0" 
            :disabled="false"
            @option-selected="Empresas"
            >
          </Button>
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
  import Tarjetitas from '../../components/common/Tarjetitas.vue';
  import TarjetitasPasantias from '../../components/common/TarjetitasPasantias.vue';
  import Carousel from "@/components/common/Carousel.vue";
  import Button from "@/components/common/Button.vue";
  import SimpleCard from "@/components/common/SimpleCard.vue";
  import { useLoaderStore } from "@/store/common/loaderStore";
import { UseUseiInstitutionStore } from "@/store/usei/UseiInstitutionStore";
  export default {
    components: {
      listInstitution: [],
      listInternship: [],
      everyInternshipsAreLoaded: false,
      Carousel,
      SimpleCard,
      Button,
      Tarjetitas,
      TarjetitasPasantias
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
      Empresas(option) {
      if (option) {
        console.log("createAccount");
        this.$router.push("/usei/Business");
      }
    },
    Convocatorias(option) {
      if (option) {
        console.log("createAccount");
        this.$router.push("/usei/Business");
      }
    },
    async getData() {
      useLoaderStore().activateLoader();
      // Asegúrate de que LoadPendentInstitutions() se implemente correctamente y devuelva los datos esperados.
      await UseUseiInstitutionStore().LoadPendentInstitutions();
      // Asumiendo que LoadPendentInstitutions() actualiza InstitutionList de manera similar a LoadInstitutions() en tu ejemplo.
      //await UseUseiInternshipStore().LoadPendenInternship();
      // Asumiendo que LoadPendentInstitutions() actualiza InstitutionList de manera similar a LoadInstitutions() en tu ejemplo.
      
      this.listInstitution = UseUseiInstitutionStore().InstitutionList.result;

      //this.listInternship = UseUseiInternshipStore().InternshipList.result;

      this.everyInternshipsAreLoaded = true;
      useLoaderStore().desactivateLoader();
    },
    
    },
    created() {
    this.getData();

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
.card-inicio{
  padding: 0.5rem;
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
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 1rem;
    border-radius: 10px;
    background-color: #Fff;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
.card{width: 100%;
    padding: 0.1rem;
    border-radius: 10px;
    background-color: #Fff;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);}


.dark-theme .card{
    background-color: #434B54;
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

@media only screen and (max-width: 480px) {
  /* Estilos específicos para dispositivos pequeños */
    .student__profile{
           flex-direction: column;
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

.EmpresasDestacadas {
  display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0.1rem;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
    background: #434B54;
    margin: 0.5rem;
    height: 500px;
    overflow: auto;
    overflow-x: scroll;
    
}
.EmpresasDestacadas {
  background-color: #Fff;
    
}

.dark-theme .EmpresasDestacadas {
 background: #434B54;
 padding: 0.1rem;
   
    
}
.company-cards-container {
  display: inline-flex;
}
.container__button{
  display: flex;
    flex-direction: row;
    align-items: center;
    text-decoration: none;
    justify-content: space-around;
}


@media screen and (max-width: 300px){
  
  .EmpresasDestacadas{
    padding: 0.5rem;
    height: 420px;
  }

}
</style>
<template>
    <div class="student__principalPage">
            <div class="student__profile">
                <div class="profile__content__header">
                        <div class="content__welcome">
                            <div class="emoji">
                                👋
                            </div>
                            <div class="student__data">
                                <span class="welcome__student">
                                    Hola, Edward!
                                </span>
                                <span class="career__student">
                                    Ingenieria de Sistemas
                                </span>
                            </div>
                        </div>
                        <div class="content__more">
                            <button class="profile__button bn23">
                                <font-awesome-icon :icon="['fas', 'file-alt']" size="2xl" />
                                <span class="see_vitae">
                                    Hoja de vida
                                </span>
                            </button>
                            <button class="profile__button bn23">
                                <font-awesome-icon :icon="['fas', 'user-edit']" size="2xl" />
                                <span class="edit__Profile">Editar Perfil</span>
                            </button>
                        </div>
                </div>
                <div class="summary">
                    <span class="summary__title">
                        Resumen general de tus pasantías
                    </span>
                    <div class="summary__content">
                        <span class="summary__content__number">72 
                            <span class="summary__content__text">aprobado</span>
                        </span>
                        <span class="summary__content__number">4 
                            <span class="summary__content__text">pendiente</span>
                        </span>
                        <span class="summary__content__number">18 
                            <span class="summary__content__text">rechazado</span>
                        </span>
                        <span class="summary__content__number">94
                            <span class="summary__content__text">Totales</span>
                        </span>
                    </div>
                </div>
            </div>
        <div class="internship__active__by__student">
            <h1>Pasantías activas</h1>
            <div class="container__cards">
                <div class="card" v-for="internship in listInterships.result" v-if="everyInternshipsAreLoaded">
                    <SimpleCard 
                    :key="internship.id"
                    :internship="internship"/>
                </div>
            </div>
        </div>
        
        <div class="requests__by__student">
            <h1>Tus Solicitudes</h1>
            <div class="container__little__nav">
                <LittleNav />
            </div>
            
            <div class="container__Arrow">
                <ArrowCards />
            </div>
        </div>






        <div class="student__content__internship">
            
            <CardList 
            :list="listInterships"
            :title="title"
            v-if="everyInternshipsAreLoaded"
            />
        </div>
        <!--
            Sección de Pasantás de Estudiante
        -->
    </div>
</template>
<script>
import {useInternshipsByIDStore } from "@/store/student/internshipsByIDStore";
import CardList from "@/components/common/CardList.vue";
import {useLoaderStore} from "@/store/common/loaderStore";
import SimpleCard from "@/components/common/SimpleCard.vue";
import ArrowCards from "../../components/common/ArrowCards.vue";
import LittleNav from "../../components/common/LittleNav.vue";
export default {
    data() {
        return {
            listInterships:[],
            title: "Pasantías Populares",
            everyInternshipsAreLoaded: false,
        };
    },
    components: {
        CardList,
        SimpleCard,
        ArrowCards,
        LittleNav,
    },
    methods: {
        async getData(){
            useLoaderStore().activateLoader();
            await useInternshipsByIDStore().loadInternshipsByIdStudent();
            this.listInterships = useInternshipsByIDStore().internships;
            this.everyInternshipsAreLoaded = true;
            useLoaderStore().desactivateLoader();
        },
    },
    created(){
        this.getData();
    },
}
</script>
<style scoped>
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
    margin: 0 0 1.5rem 0;
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
.emoji{
    font-size: 2rem;
}
.student__data{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    margin-left: 1rem;
}
.welcome__student{
    font-size: 1.5rem;
    font-weight: 700;
}
.career__student{
    font-size: 1rem;
    font-weight: 400;
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
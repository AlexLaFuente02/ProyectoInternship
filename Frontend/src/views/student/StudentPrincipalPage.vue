<template>
    <div class="student__principalPage">
        <div class="student__content__internship">
            <CardList 
            :list="listInterships"
            :title="title"
            v-if="everyInternshipsAreLoaded"
            />
        </div>
    </div>
</template>
<script>
import Dropdown from "@/components/common/Dropdown.vue";
import {useInternshipsByIDStore } from "@/store/student/internshipsByIDStore";
import CardList from "@/components/common/CardList.vue";
import {useLoaderStore} from "@/store/common/loaderStore";
export default {
    data() {
        return {
            listInterships:[],
            title: "Tus pasantías",
            everyInternshipsAreLoaded: false,
        };
    },
    components: {
        Dropdown,
        CardList,
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

.student__topbar{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
}
.student__topbar--title{
    display: flex;
    flex-direction: row;
    padding: 0.1rem;
    font-weight: 600;
}
.student__topbar--title h1{
    font-size: 2rem;
}
.topbar--profile button{
    border: none;
    background-color: transparent;
    cursor: pointer;
    font-size: 1.5rem;
    color: #434B54;
    transition: 0.4s all ease;
    border-radius: 5px;
    padding: 0.5rem;
    border: 1px solid #434B54;
}
.topbar--profile button:hover{
    color: #C8E6C9;
    background: #434B54;
}
.student__content__internship{
    display: flex;
    flex-direction: column;
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
}

/* Estilos para tabletas */
@media only screen and (min-width: 601px) and (max-width: 1024px) {
  /* Estilos específicos para tabletas */
  .student__principalPage{
        padding: 1rem;
    
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
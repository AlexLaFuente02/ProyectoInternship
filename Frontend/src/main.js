//Librerias
import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import { createPinia } from "pinia";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import PrimeVue from "primevue/config";
import App from "./App.vue";
//Paginas
import LoginPage from "@/views/common/LoginPage.vue";
import PrincipalPage from "@/views/common/PrincipalPage.vue";
import MoreInformation from "@/views/common/MoreInformation.vue";
import InstitutionsCommon from "@/views/common/InstitutionsCommon.vue";
import InternshipsCommon from "@/views/common/InternshipsCommon.vue";
import UserRegister from "@/views/common/UserRegister.vue";
//Paginas Student
import StudentRegister from "@/views/student/StudentRegister.vue";
import ApplyForAnInternship from "@/views/student/ApplyForAnInternship.vue";
import StudentApplications from '@/views/student/StudentApplications.vue';
import StudentProfile from '@/views/student/StudentProfile.vue';
//Paginas Institution
import InstitutionRegister from '@/views/institution/InstitutionRegister.vue'
import InstitutionAddConvocatoria from '@/views/institution/InstitutionAddConvocatoria.vue'
 //Paginas Admin

//Librerias de PrimeVue
import ButtonPrime from "primevue/button";
import "primevue/resources/themes/lara-light-indigo/theme.css";
import "primevue/resources/primevue.min.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";
import Galleria from 'primevue/galleria';
//Main
import "./assets/main.css";

//Rutas
const routes = [
    //Common
    {name: 'PrincipalPage', path: '/', component: PrincipalPage},
    {name: 'LoginPage', path: '/login', component: LoginPage},
    {name: 'MoreInformation', path: '/moreInformation', component: MoreInformation},
    {name: 'InstitutionsCommon', path: '/institutionsCommon', component: InstitutionsCommon},
    {name: 'InternshipsCommon', path: '/internshipsCommon', component: InternshipsCommon},
    {name: 'UserRegister', path: '/userRegister', component: UserRegister},
    //Student
    {name: 'StudentRegister', path: '/student/register', component: StudentRegister},
    {name: 'StudentApplications', path: '/student/applications', component: StudentApplications},
    {name: 'StudentProfile', path: '/student/profile', component: StudentProfile},
    {name: 'ApplyForAnInternship',path: '/student/ApplyForAnInternship',component: ApplyForAnInternship},
    //Institution
    {name: 'InstitutionRegister', path : '/institution/register', component:InstitutionRegister},
    {name: 'InstitutionAddConvocatoria', path : '/institution/addConvocatoria', component:InstitutionAddConvocatoria},
  //Usei-Admin
];
// Router
const router = createRouter({
  history: createWebHistory(),
  routes,
});

//Pinia para el manejo de estados
const pinia = createPinia();

//Librerias de fontawesome para los iconos
library.add(fab);
library.add(fas);

// App
const app = createApp(App);

//Uso de las librerias
app.use(router);
app.use(pinia);
app.use(PrimeVue);

//Componentes de fontawesome
app.component("font-awesome-icon", FontAwesomeIcon);

//Componentes de PrimeVue
app.component('ButtonPrime', ButtonPrime);
app.component('Galleria', Galleria);
//Montar la aplicacion
app.mount("#app");

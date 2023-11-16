//Librerias
import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import { createPinia } from "pinia";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import VueCookies from 'vue-cookies'
import PrimeVue from "primevue/config";
import App from "./App.vue";
//Paginas
import LoginPage from "@/views/common/LoginPage.vue";
import PrincipalPage from "@/views/common/PrincipalPage.vue";
import MoreInformation from "@/views/common/MoreInformation.vue";
import InstitutionsCommon from "@/views/common/InstitutionsCommon.vue";
import InternshipsCommon from "@/views/common/InternshipsCommon.vue";
import InternshipInformation from "@/views/common/InternshipInformation.vue";
import UserRegister from "@/views/common/UserRegister.vue";
//Paginas Student
import StudentPrincipalPage from "@/views/student/StudentPrincipalPage.vue";
import StudentRegister from "@/views/student/StudentRegister.vue";
import ApplyForAnInternship from "@/views/student/ApplyForAnInternship.vue";
import StudentApplications from '@/views/student/StudentApplications.vue';
import PostulationStatus from "../src/views/student/PostulationStatus.vue"
import StudentProfile from '@/views/student/StudentProfile.vue';

//Paginas Institution
import InstitutionRegister from '@/views/institution/InstitutionRegister.vue'
import InstitutionAddConvocatoria from "@/views/institution/InstitutionAddConvocatoria.vue";
import InstitutionConvocatoria from '@/views/institution/InstitutionConvocatoria.vue'
import InstitutionProfile from "@/views/institution/InstitutionProfile.vue";
import InstitutionSettings from "@/views/institution/InstitutionSettings.vue";
import InstitutionRequestsTray from "@/views/institution/InstitutionRequestsTray.vue";
import InstitutionPrincipalPage from '@/views/institution/InstitutionPrincipalPage.vue'
//Paginas Admin
import UseiPrincipalPage from '@/views/usei/UseiPrincipalPage.vue'
import InternshipList from "@/views/usei/InternshipList.vue";
import CompaniesList from "@/views/usei/CompaniesList.vue";
import UseiBusinessApplications from '@/views/usei/UseiBusinessApplications.vue'
import UseiInternshipApplications from '@/views/usei/UseiInternshipApplications.vue'


//Librerias de PrimeVue
import ButtonPrime from "primevue/button";
import "primevue/resources/themes/lara-light-indigo/theme.css";
import "primevue/resources/primevue.min.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";
import Galleria from 'primevue/galleria';
//Main
import "./assets/main.css";

import axios from "axios";

//Rutas
const routes = [
    //Common
    {name: 'PrincipalPage', path: '/', component: PrincipalPage},
    {name: 'LoginPage', path: '/login', component: LoginPage},
    {name: 'MoreInformation', path: '/moreInformation', component: MoreInformation},
    {name: 'InstitutionsCommon', path: '/institutionsCommon', component: InstitutionsCommon},
    {name: 'InternshipsCommon', path: '/internshipsCommon', component: InternshipsCommon},
    {name: "InternshipInformation", path: "/internshipsCommon/InternshipInformation", component: InternshipInformation},
    {name: 'UserRegister', path: '/userRegister', component: UserRegister},
    //Student
    {name: 'StudentRegister', path: '/student/register', component: StudentRegister },
    {name: 'StudentPrincipalPage', path: '/student', component: StudentPrincipalPage,},
    {name: 'StudentApplications', path: '/student/applications', component: StudentApplications},
    {name: "PostulationStatus", path: "/student/applications/PostulationStatus", component: PostulationStatus},
    {name: 'StudentProfile', path: '/student/profile', component: StudentProfile},
    {name: 'ApplyForAnInternship',path: '/student/ApplyForAnInternship',component: ApplyForAnInternship},
    //Institution
    {name: 'InstitutionRegister', path : '/institution/register', component:InstitutionRegister},
    {name: 'InstitutionAddConvocatoria', path : '/institution/addConvocatoria', component:InstitutionAddConvocatoria},
    {name: 'InstitutionConvocatoria', path : '/institution/Convocatoria', component:InstitutionConvocatoria},
    {name: 'InstitutionProfile', path: '/institution/Profile', component: InstitutionProfile},
    {name: "InstitutionSettings", path: "/institution/Settings", component: InstitutionSettings},
    {name: "InstitutionRequestsTray", path: "/institution/RequestsTray", component: InstitutionRequestsTray},
    {name: 'InstitutionPrincipalPage', path : '/institution/home', component:InstitutionPrincipalPage},
    //Usei-Admin
    {name: 'UseiPrincipalPage', path : '/usei/principal', component:UseiPrincipalPage},
    {name: "InternshipList", path: "/usei/Internships", component: InternshipList},
    {name: "CompaniesList", path: "/usei/Companies", component: CompaniesList},
    {name: 'UseiBusinessApplications', path : '/usei/Business', component:UseiBusinessApplications},
    {name: 'UseiInternshipApplications', path : '/usei/InternshipApp', component:UseiInternshipApplications},
    
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
// Configura axios para enviar las cookies
axios.defaults.withCredentials = true;
// App
const app = createApp(App);

//Uso de las librerias
app.use(router);
app.use(pinia);
app.use(PrimeVue);
app.use(VueCookies,{
  expireTimes: "7d",
  path: "/",
  httpOnly: true,

});

//Componentes de fontawesome
app.component("font-awesome-icon", FontAwesomeIcon);

//Componentes de PrimeVue
app.component('ButtonPrime', ButtonPrime);
app.component('Galleria', Galleria);
//Montar la aplicacion
app.mount("#app");

//Librerias
import { createApp } from 'vue';
import {createRouter, createWebHistory} from 'vue-router';
import {createPinia} from 'pinia';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import PrimeVue from 'primevue/config';
import App from './App.vue';
//Paginas
import LoginPage from '@/views/common/LoginPage.vue';
import PrincipalPage from '@/views/common/PrincipalPage.vue';
import MoreInformation from '@/views/common/MoreInformation.vue';
import InstitutionsCommon from '@/views/common/InstitutionsCommon.vue';
import InternshipsCommon from '@/views/common/InternshipsCommon.vue';
import SelectionUserRegister from './views/common/SelectionUserRegister.vue';
import UserRegister from '@/views/common/UserRegister.vue';
//Paginas Student
import StudentRegister from '@/views/student/StudentRegister.vue';
//Paginas Institution
//Paginas Admin
//Librerias de PrimeVue
import ButtonPrime from 'primevue/button';
import "primevue/resources/themes/lara-light-indigo/theme.css";
import "primevue/resources/primevue.min.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";

//BOOTSTRAP
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min";
//Main
import './assets/main.css';

//Rutas 
const routes = [
    //Common
    {name: 'PrincipalPage', path: '/', component: PrincipalPage},
    {name: 'LoginPage', path: '/login', component: LoginPage},
    {name: 'StudentRegister', path: '/student/register', component: StudentRegister},
    {name: 'MoreInformation', path: '/moreInformation', component: MoreInformation},
    {name: 'InstitutionsCommon', path: '/institutionsCommon', component: InstitutionsCommon},
    {name: 'InternshipsCommon', path: '/internshipsCommon', component: InternshipsCommon},
    {name: 'SelectUserRegister', path: '/selectUserRegister', component: SelectionUserRegister},
    {name: 'UserRegister', path: '/userRegister', component: UserRegister},
    //Student
    {name: 'StudentRegister', path: '/student/register', component: StudentRegister},
    //Institution

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
app.component('font-awesome-icon', FontAwesomeIcon);
//Componentes de PrimeVue
app.component('ButtonPrime', ButtonPrime);
//Montar la aplicacion
app.mount('#app');
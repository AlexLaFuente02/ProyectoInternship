<template >
    <header class="container__header">
        <div class="container__menu">
            <div class="container__menu--profile">
                <font-awesome-icon :icon="['fas', 'bars']" @click="toggleMobileMenuL" size="2xl"/>
            </div>
        </div>
        <div class="container__logo">
            <router-link to="/">
                <img
                src="../images/USEI.png"
                alt="Unidad de Servicios Estudiantiles Integrales"
            />
            </router-link>
        </div>
        <div class="container__menu">
            <div class="container__menu--profile" @click="toggleMobileMenuR" >
                <font-awesome-icon :icon="['fas', 'circle-user']" size="2xl"/>
            </div>
        </div>
    </header>
    <div class="menu__student" v-show="showMobileMenuLeft">
        <div class="container__logo">
            <router-link to="/">
                <img
                src="../images/USEI.png"
                alt="Unidad de Servicios Estudiantiles Integrales"
            />
            </router-link>
        </div>
        <nav class="container__nav" >
            <div class="nav__links">
                <ul class="nav__list" >
                    <li class="nav__item" @click="closeMobileMenu">
                        <router-link class="link" to="/student">
                            <font-awesome-icon :icon="['fas', 'house']" 
                            size="xl"
                            />
                            <span class="nav__name">Inicio</span>
                        </router-link>
                    </li>
                    <li class="nav__item" @click="closeMobileMenu">
                        <router-link class="link" to="/student/institutions">
                            <font-awesome-icon :icon="['fas', 'building']" size="xl"/>
                            <span class="nav__name">Instituciones</span>
                        </router-link>
                    </li>
                    <li class="nav__item" @click="closeMobileMenu">
                        <router-link class="link" to="/student/internships">
                            <font-awesome-icon :icon="['fas', 'briefcase']" size="xl"/>
                            <span class="nav__name">Pasantías</span>
                        </router-link>
                    </li>
                    <li class="nav__item" @click="closeMobileMenu">
                        <router-link class="link" to="/student/requests">
                            <font-awesome-icon :icon="['fas', 'file-alt']" size="xl"/>
                            <span class="nav__name">Solicitudes</span>
                        </router-link>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
    <div class="container__sidebar" v-show="showMobileMenuRight">
        <div class="navbar__buttons">
            <div class="buttons">
                <router-link to="/student/profile">
                    <button class="link" @click="closeMobileMenu">
                        <font-awesome-icon :icon="['fas', 'user']" size="xl"/>
                        <span class="nav__name">Perfil</span>
                    </button>
                </router-link>
                <router-link to="/student/settings">
                    <button class="link" @click="closeMobileMenu">
                        <font-awesome-icon :icon="['fas', 'cog']" size="xl"/>
                        <span class="nav__name">Configuración</span>
                    </button>
                </router-link>
                <router-link to="/student/help">
                    <button class="link" @click="closeMobileMenu">
                        <font-awesome-icon :icon="['fas', 'question-circle']" size="xl"/>
                        <span class="nav__name">Ayuda</span>
                    </button>
                </router-link>
                <router-link to="/student/login">
                    <button class="link" @click="closeMobileMenu">
                        <font-awesome-icon :icon="['fas', 'sign-out-alt']" size="xl"/>
                        <span class="nav__name">Cerrar sesión</span>
                    </button>
                </router-link>
            </div>
        </div>
    </div>
</template>
<script>
import { useMobileMenuStore } from "../../store/common/mobileMenuStore";
import { useThemeStore } from "@/store/common/useThemeStore";
import Button from "@/components/common/Button.vue";
export default {
    name: "NavbarCommonMobile",
    components: {
        Button,
    },
    data() {
        return {
            isDarkMode: false,
            showMobileMenuLeft: false,
            showMobileMenuRight: false,
        };
    },
    methods: {
        toggleMobileMenuL() {
            useMobileMenuStore().toggleMobileMenu();
            this.showMobileMenuLeft = !this.showMobileMenuLeft;
        },
        toggleMobileMenuR() {
            useMobileMenuStore().toggleMobileMenu();
            this.showMobileMenuRight = !this.showMobileMenuRight;
        },
        closeMobileMenu() {
            useMobileMenuStore().closeMobileMenu();
            this.showMobileMenuLeft = false;
            this.showMobileMenuRight = false;
        },
        createAccount(option) {
            if (option) {
                console.log("createAccount");
                this.$router.push("/UserRegister");
                this.closeMobileMenu();
            }
        },
        login(option) {
            if (option) {
                console.log("login");
                this.$router.push("/Login");
                this.closeMobileMenu();
            }
        },
        toggleDarkMode() {
            this.isDarkMode = !this.isDarkMode;
            useThemeStore().toggleDarkMode();
        },
    },
    computed: {
        showMobileMenuLeft() {
            return this.showMobileMenuLeft;
        },
        showMobileMenuRight() {
            return this.showMobileMenuRight;
        },
    },
}
</script>
<style scoped>
.container__header{
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0.5rem;
  border-radius: 7px;
  box-shadow: 0 24px 64px -2px rgba(0, 0, 0, 0.02),
    0 6px 16px -2px rgba(0, 0, 0, 0.06), 0 2px 6px -2px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease 0s;
  position: sticky;
  top: 0;
  background-color: #FDFEFF;
  color: #515c67;
  z-index: 1;
  justify-content: space-between;
}
/*Modo oscuro*/
.dark-theme header{
    background-color: #434B54;
    color: #CACFDB;
}
/*Estilo del logo*/
.container__header .container__logo img{
    width: 150px;
    height: auto;
    transition: all 0.3s ease 0s;
}
.dark-theme .container__logo{
    filter: invert(20%) sepia(100%) saturate(100%) hue-rotate(220deg);
}

.container__header .container__logo img:hover{
    transform: scale(1.1);
}
/*Fin del estilo del logo*/
.container__header .container__nav{
    display: flex;
    flex-direction: row;
    align-items: center;
    flex-wrap: wrap;
}

.container__header .container__nav .nav__links .link{
    margin-right: 10px;
    font-weight: 700;
    text-align: center;
    text-decoration: none;
    font-size: 15px;
    color: #515c67;
    transition: all 0.3s ease 0s;
    border: none;
    border-radius: 50px;
    cursor: pointer;
    transition: all 0.3s ease 0s;
    padding: 9px 25px;
}
.dark-theme .container__nav .nav__links .link{
    color: #CACFDB;
    background-color: #434B54;
    border: 1px solid #434B54;
}

.container__header .container__nav .nav__links .link:hover{
  background-color: rgba(90, 97, 106, 0.7);
  color: #fff;
  transform: scale(1.1);
}
.dark-theme .container__nav .nav__links .link:hover{
  background-color: rgba(90, 97, 106, 0.7);
}
.navbar__buttons{
    display: flex;
    flex-direction: row;
    align-items: center;
    text-decoration: none;

}
.navbar__buttons .buttons{
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 100%;
}
.navbar__buttons input{
  display: flex;
  
} 
.container__header .container__menu{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
}
.container__header .container__menu--profile{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.3s ease 0s;

}
.container__header .container__menu--profile:hover{
    transform: scale(1.1);
}
.container__header .container__menu--profile svg{
    font-size: 1.7rem;
    font-weight: 700;
    color: #515c67;
}
.dark-theme .container__header .container__menu--profile svg{
    color: #CACFDB;
}
.container__sidebar{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background-color: #FDFEFF;
    z-index: 1;
    transform: translateX(100%);
    transition: transform 0.5s ease-in-out;
}
.dark-theme .container__sidebar{
    background-color: #434B54;
}
.container__sidebar .navbar__buttons{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
}
.container__sidebar .navbar__buttons .buttons{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
}
.container__sidebar .navbar__buttons .buttons button{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin: 0.5rem;
    padding: 0.5rem;
    border: none;
    border-radius: 5px;
    background-color: #FDFEFF;
    transition: all 0.3s ease 0s;
    cursor: pointer;
}
.dark-theme .container__sidebar .navbar__buttons .buttons button{
    background-color: #434B54;
    color: #CACFDB;
}
.container__sidebar .navbar__buttons .buttons button:hover{
    background-color: rgba(90, 97, 106, 0.7);
    color: #fff;
    transform: scale(1.1);
}
.container__sidebar .navbar__buttons .buttons button svg{
    margin-right: 0.5rem;
    font-size: 1.5rem;
    font-weight: 700;
}
.container__sidebar .navbar__buttons .buttons button span{
    font-size: 1.2rem;
    font-weight: 700;
}
.container__sidebar .navbar__buttons .buttons button:last-child{
    margin-bottom: 1rem;
}
.container__sidebar .navbar__buttons .buttons button:last-child:hover{
    background-color: #FDFEFF;
    color: #515c67;
}
.container__sidebar .navbar__buttons .buttons button:last-child svg{
    color: #515c67;
}
.container__sidebar .navbar__buttons .buttons button:last-child span{
    color: #515c67;
}
.container__sidebar .navbar__buttons .buttons button:last-child:hover svg{
    color: #515c67;
}
.container__sidebar .navbar__buttons .buttons button:last-child:hover span{
    color: #515c67;
}
.container__sidebar .navbar__buttons .buttons button:last-child:hover{
    transform: scale(1);
}

</style>
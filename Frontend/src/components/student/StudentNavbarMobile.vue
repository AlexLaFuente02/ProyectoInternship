<template >
    <header class="container__header">
        <div class="container__nav">
            <div class="container__nav--bars">
                <font-awesome-icon :icon="['fas', 'bars']" @click="toggleMobileMenu" />
            </div>
        </div>
        <div class="container__menu">
            <div class="container__menu--profile" @click="toggleMobileMenu">
                <font-awesome-icon :icon="['fas', 'circle-user']" />
            </div>
        </div>
    </header>
    <div class="menu__student" v-show="showMobileSideBar">
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
                    <li class="nav__item">
                        <router-link class="link" to="/student">
                            <font-awesome-icon :icon="['fas', 'house']" 
                            size="xl"
                            />
                            <span class="nav__name">Inicio</span>
                        </router-link>
                    </li>
                    <li class="nav__item">
                        <router-link class="link" to="/student/institutions">
                            <font-awesome-icon :icon="['fas', 'building']" size="xl"/>
                            <span class="nav__name">Instituciones</span>
                        </router-link>
                    </li>
                    <li class="nav__item">
                        <router-link class="link" to="/student/internships">
                            <font-awesome-icon :icon="['fas', 'briefcase']" size="xl"/>
                            <span class="nav__name">Pasantías</span>
                        </router-link>
                    </li>
                    <li class="nav__item">
                        <router-link class="link" to="/student/requests">
                            <font-awesome-icon :icon="['fas', 'file-alt']" size="xl"/>
                            <span class="nav__name">Solicitudes</span>
                        </router-link>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
    <div class="container__sidebar" v-show="showMobileMenu">

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
        };
    },
    methods: {
        toggleMobileMenu() {
            useMobileMenuStore().toggleMobileMenu();
            
        },
        closeMobileMenu() {
            useMobileMenuStore().closeMobileMenu();
        },
        createAccount(option) {
            if (option) {
                console.log("createAccount");
                this.$router.push("/UserRegister");
                //Cerrar el menu
                this.closeMobileMenu();
            }
        },
        login(option) {
            if (option) {
                console.log("login");
                this.$router.push("/Login");
                //Cerrar el menu
                this.closeMobileMenu();
            }
        },
        toggleDarkMode() {
            this.isDarkMode = !this.isDarkMode;
            useThemeStore().toggleDarkMode();
        },
    },
    computed: {
        showMobileMenu(){
            return useMobileMenuStore().mobileMenu;
        }
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
  z-index: 1000;
  background-color: #FDFEFF;
  color: #515c67;
  
  
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
    justify-content: space-between;
    width: 100%;
    align-items: center;
    flex-wrap: wrap;
    margin-bottom: 0.3rem;
    margin-left: 5px;
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
</style>
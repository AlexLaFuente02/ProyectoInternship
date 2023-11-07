<template>
    <header class="menu__student">
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
                <router-link class="link" to="/">
                    Inicio
                </router-link>
                <router-link class="link" to="/moreInformation">
                    M&aacute;s informaci&oacute;n
                </router-link>
                <router-link class="link" to="/institutionsCommon">
                    Instituciones
                </router-link>
                <router-link class="link" to="/internshipsCommon">
                    Pasant&iacute;as
                </router-link>
            </div>
            
            <div class="navbar__buttons">
                <input 
                type="checkbox"
                name="darkModeToggle"
                class="switch"
                @change="toggleDarkMode()"
                />
                <div class="buttons">
                
                <div class="container__button">
                <Button 
                    text="Logout" 
                    :color="0" 
                    :disabled="false"
                    @option-selected="logout"
                    >
                </Button>
                </div>
                </div>
            </div>
        </nav>
    </header>
</template>
<script>
import { useThemeStore } from "@/store/common/useThemeStore";
import Button from "@/components/common/Button.vue";
export default {
  name: "NavbarCommon",
  components:{
    Button,
  },
  data() {
    return {
      isDarkMode: false,
    };
  },
  methods: {
    toggleDarkMode() {
      const darkModeStore = useThemeStore();
      this.isDarkMode = !this.isDarkMode;
      darkModeStore.toggleDarkMode();
    },
    logout(){
    },
  },
};
</script>
<style scoped>
.menu__student{
    width: 7rem;
    z-index: 99;
    position: fixed;
    background: #FDFEFF;
    height: 100%;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 0;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
    transition: all 0.3s ease 0s;
    flex-wrap: wrap;
}
/*Modo oscuro*/
.dark-theme .menu__student{
    background: #434B54;
}
.container__logo img{
    width: 100px;
    height: auto;
    transition: all 0.3s ease 0s;
}
.container__logo img:hover{
    transform: scale(1.1);
}
.container__logo{
    filter: invert(20%) sepia(100%) saturate(100%) hue-rotate(220deg);
}
</style>
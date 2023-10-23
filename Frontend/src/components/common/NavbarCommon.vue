<!--<template>
    <header class="header">
        <div class="topBar" v-if="!this.responsiveMode">
            <div class="topBarImage">
                <div class="logo__area">
                    <div class="logo">
                        <img src="https://img.freepik.com/vector-premium/cute-dibujos-animados-perro-pug-sentado-fondo-aislado_701683-46.jpg?w=360" alt="Logo de la marca">
                    </div>
                    <span class="logo__name">Internship</span>
                </div>
            </div>
            <div class="topBarNavigator">
                <nav >
                    
                    <router-link class="btn" to="/"><button>Inicio</button></router-link>
                    <router-link class="btn" to="/moreInformation"><button>Mas informacion</button></router-link>
                    <router-link class="btn" to="/institutionsCommon"><button>Instituciones</button></router-link>
                    <router-link class="btn" to="/internshipsCommon"><button>Pasantias</button></router-link>
                    <router-link class="btn" to="/userRegister"><button>Crear Cuenta</button></router-link>
                </nav>
                <button @click="toggleDarkMode">{{ isDarkMode ? 'Light Mode' : 'Dark Mode' }}</button>
            </div>
        </div>
        <div class="topBarResponsive" v-else>
            <div class="topBarImageResponsive">
                <div class="logo__area">
                    <div class="logo">
                        <img src="https://img.freepik.com/vector-premium/cute-dibujos-animados-perro-pug-sentado-fondo-aislado_701683-46.jpg?w=360" alt="Logo de la marca">
                    </div>
                    <span class="logo__name">Internship</span>
                </div>
            </div>
            <div class="topBarNavigatorResponsive">
                <nav >
                    <router-link class="btn" to="/"><button>Inicio</button></router-link>
                    <router-link class="btn" to="/moreInformation"><button>Mas informacion</button></router-link>
                    <router-link class="btn" to="/institutionsCommon"><button>Instituciones</button></router-link>
                    <router-link class="btn" to="/internshipsCommon"><button>Pasantias</button></router-link>
                    <router-link class="btn" to="/userRegister"><button>Crear Cuenta</button></router-link>
                </nav>
                <button @click="toggleDarkMode">{{ isDarkMode ? 'Light Mode' : 'Dark Mode' }}</button>
            </div>
        </div>
    </header>
</template>
<script>
import { useThemeStore } from '@/store/common/useThemeStore';
export default {
    name: 'NavbarCommon',
    data(){
        return{
            responsiveMode: false,
        }
    },
    setup() {
    const darkModeStore = useThemeStore();

    function toggleDarkMode() {
      darkModeStore.toggleDarkMode();
    }

    return {
      isDarkMode: darkModeStore.isDarkMode,
      toggleDarkMode,
    };
  },
};
</script>
<style>
*{
    margin: 0;
    padding: 0;
    font-size: 20px;
}
.dark-theme .header {
    background: #2F363F;
}
body.main-body .header {
    background: #FDFEFF;
}


.header{
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: auto;
    position: fixed;
    z-index: 1000;
    box-shadow: 0 24px 64px -2px rgba(0, 0, 0, 0.02), 0 6px 16px -2px rgba(0, 0, 0, 0.06), 0 2px 6px -2px rgba(0, 0, 0, 0.08);
    transition: all 0.3s ease 0s;
    height: 56px;
}
.topBar{
    align-items: center;
    display: flex;
    height: 100%;
}





.header .logo{
    cursor: pointer;
    margin-right: auto;
}
    
.header .logo img{
    height: 70px;
    width: auto;
    transition: all 0.3s;
}
    
.header .logo img:hover{
    transform: scale(1.2);
}
    
.header .nav-links{
    list-style: none;
}
    
.header .nav-links li{
    display: inline-block;
    padding: 0 20px;
}
    
.header .nav-links li:hover{
    transform: scale(1.1);
}
    
.header .nav-links a{
    font-size: rem;
    color: #eceff1;
    text-decoration: none;
}
    
.header .nav-links li a:hover{
    color: #ffbc0e;
}
    
.header .btn button{
    margin-left: 20px;
    font-weight: 700;
    color: #1b3039;
    padding: 9px 25px;
    background: #eceff1;
    border: none;
    border-radius: 50px;
    cursor: pointer;
    transition: all 0.3s ease 0s;
    font-size: 1rem;
    margin-bottom: 3px;
}
/*media query for small displays*/
@media (max-width: 768px){
    .header .logo img{
        height: 50px;
    }
    .header .nav-links li{
        padding: 0 10px;
    }
    .header .btn button{
        margin-left: 10px;
        padding: 7px 15px;
        font-size: 0.7rem;
    }
} 
    
.header .btn button:hover{
    background-color: #1d79a4;
    color: #ffbc0e;
    transform: scale(1.1);
}
</style>
=======-->
<template>
  <header class="sticky-top">
    <nav
      class="navbar navbar-expand-lg bg-body-secondary bg-opacity-75 shadow-lg"
    >
      <div class="container-md">
        <div class="navbar-brand p-0 me-0 me-lg-2">
          <img
            class="img-fluid py-3 w-16rem"
            src="../images/USEI.png"
            alt="Unidad de Servicios Estudiantiles Integrales"
          />
        </div>
        <div class="bd-navbar-toggle">
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
        </div>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <div
            class="nav col-6 col-md-auto mb-lg-0 mx-auto justify-content-center mb-md-0 mb-3"
          >
            <router-link class="nav-item nav-link" to="/">Inicio</router-link>
            <router-link class="nav-item nav-link" to="/moreInformation"
              >M&aacute;s informaci&oacute;n</router-link
            >
            <router-link class="nav-item nav-link" to="/institutionsCommon"
              >Instituciones</router-link
            >
            <router-link class="nav-item nav-link" to="/internshipsCommon"
              >Pasant&iacute;as</router-link
            >
          </div>
        </div>
        <div class="mx-auto my-2">
          <button
            type="button"
            @click="$router.push('selectUserRegister')"
            class="btn btn-warning me-3"
          >
            Crear una Cuenta
          </button>
          <button
            type="button"
            @click="$router.push('login')"
            class="btn btn-primary me-3"
          >
            Iniciar Sesi&oacute;n
          </button>
          <button
            type="button"
            class="btn border-warning"
            @click="toggleDarkMode()"
          >
            <svg
              v-if="!isDarkMode"
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              fill="currentColor"
              class="bi bi-moon-fill"
              viewBox="0 0 16 16"
              style="font-size: 1.8em"
            >
              <path
                d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z"
              />
            </svg>
            <svg
              v-else
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              fill="currentColor"
              class="bi bi-brightness-high"
              viewBox="0 0 16 16"
              style="font-size: 1.8em"
            >
              <path
                d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  </header>
</template>
<script>
import { useThemeStore } from "@/store/common/useThemeStore";
export default {
  name: "NavbarCommon",
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
      console.log(darkModeStore.$event);
    },
  },
  /*setup() {
    const darkModeStore = useThemeStore();

    function toggleDarkMode() {
      this.isDarkMode = !this.isDarkMode; // Actualiza inmediatamente el estado
      darkModeStore.toggleDarkMode();
      console.log(darkModeStore.$event);
    }

    return {
      isDarkMode: darkModeStore.isDarkMode,
      toggleDarkMode,
    };
  },*/
};
</script>
<style>
.sticky-top {
  box-shadow: 0 24px 64px -2px rgba(0, 0, 0, 0.02),
    0 6px 16px -2px rgba(0, 0, 0, 0.06), 0 2px 6px -2px rgba(0, 0, 0, 0.08);
}
</style>

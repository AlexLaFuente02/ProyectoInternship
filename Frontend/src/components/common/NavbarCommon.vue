<template>
  <header class="sticky-top">
    <nav class="navbar navbar-expand-lg bg-body-secondary bg-opacity-50 shadow-lg">
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
          <router-link type="button" class="btn btn-warning me-3" to="/userRegister">Crear una Cuenta</router-link>
          <router-link type="button" class="btn btn-primary" to="/login">Iniciar Sesi&oacute;n</router-link>
          <button type="button" class="btn border-warning" @click="toggleDarkMode()">
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
<style scoped>

.sticky-top{
    box-shadow: 0 24px 64px -2px rgba(0, 0, 0, 0.02), 0 6px 16px -2px rgba(0, 0, 0, 0.06), 0 2px 6px -2px rgba(0, 0, 0, 0.08);
    background-color: #FDFEFF;
}
/*Modo oscuro*/
.dark-theme .sticky-top{
    background-color: #434B54;
}


/*Bajar de tamaño el logo*/
@media (max-width: 768px){
    .img-fluid{
        width: 8rem;
    }
    /*Bajar el tamaño de los botones*/
    .btn{
        font-size: 0.7rem;
    }
    /*Bajar el tamano del toggle*/
    .navbar-toggler-icon{
        width: 1rem;
        height: 1rem;
    }
}
/*Bajar de tamaño el logo*/
@media (max-width: 576px){
    .img-fluid{
        width: 6rem;
    }
    /*Bajar el tamaño de los botones*/
    .btn{
        font-size: 0.5rem;
    }
    /*Bajar el tamano del toggle*/
    .navbar-toggler-icon{
        width: 0.8rem;
        height: 0.8rem;
    }
}
/*Bajar de tamaño el logo*/
@media (max-width: 420px){
    .img-fluid{
        width: 3rem;
    }
    /*Bajar el tamaño de los botones*/
    .btn{
        font-size: 0.3rem;
    }
    /*Bajar el tamano del toggle*/
    .navbar-toggler-icon{
        width: 0.5rem;
        height: 0.5rem;
    }
}
</style>

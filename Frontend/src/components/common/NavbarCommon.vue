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
          <div class="nav col-6 col-md-auto mb-lg-0 mx-auto justify-content-center mb-md-0 mb-3">
            <router-link class="nav-item nav-link" to="/">Inicio</router-link>
            <router-link class="nav-item nav-link" to="/moreInformation">M&aacute;s informaci&oacute;n</router-link>
            <router-link class="nav-item nav-link" to="/institutionsCommon">Instituciones</router-link>
            <router-link class="nav-item nav-link" to="/internshipsCommon">Pasant&iacute;as</router-link>
            <button @click="toggleDarkMode">{{ isDarkMode ? 'Light Mode' : 'Dark Mode' }}</button>
          </div>
        </div>
        <div class="mx-auto my-2">
          <router-link type="button" class="btn btn-warning me-3" to="/userRegister">Crear una Cuenta</router-link>
          <router-link type="button" class="btn btn-primary" to="/login">Iniciar Sesi&oacute;n</router-link>
        </div>
      </div>
    </nav>
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

<template>
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
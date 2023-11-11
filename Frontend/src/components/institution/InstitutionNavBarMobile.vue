<template>
  <header class="ins-header">
    <h1>Institution Mobile Navbar</h1>
    <header class="institution-mobile-header">
      <div class="logo-container">
        <router-link to="/">
          <img
            src="../images/USEI.png"
            alt="Unidad de Servicios Estudiantiles Integrales"
          />
        </router-link>
      </div>
      <div class="menu-container">
        <div class="container__menu--profile" @click="toggleMobileMenu">
          <font-awesome-icon :icon="['fas', 'circle-user']" />
        </div>
      </div>
    </header>
    <div class="container__sidebar" v-show="showMobileMenu">
      <div class="container__sidebar--profile">
        <div class="container__sidebar--profile__image">
          <font-awesome-icon :icon="['fas', 'circle-user']" />
        </div>
        <div class="container__sidebar--profile__name">
          <span>Hola</span>
        </div>
      </div>
      <div class="container__sidebar--options">
        <ul class="container__menu--options">
          <li class="container__menu--options__item" @click="closeMobileMenu">
            <router-link class="link" to="/">
              <font-awesome-icon :icon="['fas', 'home']" />
              <span>Inicio</span>
            </router-link>
          </li>
          <li class="container__menu--options__item" @click="closeMobileMenu">
            <router-link class="link" to="/moreInformation">
              <font-awesome-icon :icon="['fas', 'info-circle']" />
              <span>M&aacute;s informaci&oacute;n</span>
            </router-link>
          </li>
          <li class="container__menu--options__item" @click="closeMobileMenu">
            <router-link class="link" to="/institutionsCommon">
              <font-awesome-icon :icon="['fas', 'university']" />
              <span>Instituciones</span>
            </router-link>
          </li>
          <li class="container__menu--options__item" @click="closeMobileMenu">
            <router-link class="link" to="/internshipsCommon">
              <font-awesome-icon :icon="['fas', 'briefcase']" />
              <span>Pr&aacute;cticas</span>
            </router-link>
          </li>
          <!--Modo oscuro-->
          <li
            class="container__menu--options__item"
            @click="toggleDarkMode"
            v-if="isDarkMode"
          >
            <div class="container__menu--options__item__dark-mode">
              <font-awesome-icon :icon="['fas', 'moon']" />
              <span>Modo oscuro</span>
            </div>
          </li>
          <li
            class="container__menu--options__item"
            @click="toggleDarkMode"
            v-else
          >
            <div class="container__menu--options__item__dark-mode">
              <font-awesome-icon :icon="['fas', 'sun']" />
              <span>Modo claro</span>
            </div>
          </li>
          <li>
            <div class="container__button">
              <Button
                text="Crear Cuenta"
                :color="0"
                :disabled="false"
                @option-selected="createAccount"
              >
              </Button>
            </div>
          </li>
          <li>
            <div class="container__button">
              <Button
                text="Cerrar Sesi&oacute;n"
                :color="1"
                :disabled="false"
                @option-selected="logout"
              >
              </Button>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>

<script>
import { useMobileMenuStore } from "../../store/common/mobileMenuStore";
import { useThemeStore } from "@/store/common/useThemeStore";
import Button from "@/components/common/Button.vue";
export default {
  name: "InstitutionNavBarMobile",
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
    logout(option) {
      if (option) {
        console.log("logout");
        this.$router.push({ name: "PrincipalPage" });
        this.closeMobileMenu();
      }
    },
    toggleDarkMode() {
      this.isDarkMode = !this.isDarkMode;
      useThemeStore().toggleDarkMode();
    },
  },
  computed: {
    showMobileMenu() {
      return useMobileMenuStore().mobileMenu;
    },
  },
};
</script>

<style scoped>
.institution-mobile-header {
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
  background-color: #fdfeff;
  color: #515c67;
  z-index: 1;
}
/*Modo oscuro*/
.dark-theme header {
  background-color: #434b54;
  color: #cacfdb;
}
.institution-mobile-header .logo-container img {
  width: 150px;
  height: auto;
  transition: all 0.3s ease 0s;
}
.dark-theme .logo-container {
  filter: invert(20%) sepia(100%) saturate(100%) hue-rotate(220deg);
}

.institution-mobile-header .logo-container img:hover {
  transform: scale(1.1);
}

.institution-mobile-header .menu-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-left: auto;
}
.institution-mobile-header .container__menu--profile {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-right: 1rem;
  cursor: pointer;
  transition: all 0.3s ease 0s;
}
.institution-mobile-header .container__menu--profile:hover {
  transform: scale(1.1);
}
.institution-mobile-header .container__menu--profile svg {
  font-size: 1.7rem;
  font-weight: 700;
  color: #515c67;
}
.dark-theme .institution-mobile-header .container__menu--profile svg {
  color: #cacfdb;
}
.container__sidebar {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: #fdfeff;
  z-index: 3;
}
.dark-theme .container__sidebar {
  background-color: #434b54;
}
.container__sidebar .container__sidebar--profile {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  border-bottom: 1px solid #eaeaea;
}
.container__sidebar
  .container__sidebar--profile
  .container__sidebar--profile__image {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-right: 1rem;
}
.container__sidebar
  .container__sidebar--profile
  .container__sidebar--profile__image
  svg {
  font-size: 2rem;
  font-weight: 700;
  color: #515c67;
}
.dark-theme
  .container__sidebar
  .container__sidebar--profile
  .container__sidebar--profile__image
  svg {
  color: #cacfdb;
}
.container__sidebar
  .container__sidebar--profile
  .container__sidebar--profile__name {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
}
.container__sidebar
  .container__sidebar--profile
  .container__sidebar--profile__name
  span {
  font-size: 1rem;
  font-weight: 700;
  color: #515c67;
}
.dark-theme
  .container__sidebar
  .container__sidebar--profile
  .container__sidebar--profile__name
  span {
  color: #cacfdb;
}
.container__sidebar .container__sidebar--options {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 1rem;
}
.container__sidebar .container__sidebar--options .container__menu--options {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  list-style: none;
  padding: 0;
  margin: 0;
}

.container__sidebar
  .container__sidebar--options
  .container__menu--options
  .container__menu--options__item {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 1rem;
  cursor: pointer;
  transition: all 0.3s ease 0s;
}
.container__sidebar
  .container__sidebar--options
  .container__menu--options
  .container__menu--options__item:hover {
  transform: scale(1.1);
}
.container__sidebar
  .container__sidebar--options
  .container__menu--options
  .container__menu--options__item
  svg {
  font-size: 1.5rem;
  font-weight: 700;
  color: #515c67;
  margin-right: 1rem;
}
.dark-theme
  .container__sidebar
  .container__sidebar--options
  .container__menu--options
  .container__menu--options__item
  svg {
  color: #cacfdb;
}
.container__sidebar
  .container__sidebar--options
  .container__menu--options
  .container__menu--options__item
  span {
  font-size: 1rem;
  font-weight: 700;
  color: #515c67;
}
.dark-theme
  .container__sidebar
  .container__sidebar--options
  .container__menu--options
  .container__menu--options__item
  span {
  color: #cacfdb;
}
.container__sidebar
  .container__sidebar--options
  .container__menu--options
  .container__menu--options__item
  .link {
  text-decoration: none;
  color: #515c67;
}
.dark-theme
  .container__sidebar
  .container__sidebar--options
  .container__menu--options
  .container__menu--options__item
  .link {
  color: #cacfdb;
}
.container__sidebar
  .container__sidebar--options
  .container__menu--options
  .container__menu--options__item
  .link:hover {
  text-decoration: underline;
}
.container__sidebar
  .container__sidebar--options
  .container__menu--options
  .container__menu--options__item
  .link:active {
  text-decoration: underline;
}
.container__sidebar
  .container__sidebar--options
  .container__menu--options
  .container__menu--options__item
  .link:visited {
  text-decoration: underline;
}
.container__sidebar
  .container__sidebar--options
  .container__menu--options
  .container__menu--options__item
  .link:focus {
  text-decoration: underline;
}
.container__sidebar
  .container__sidebar--options
  .container__menu--options
  .container__menu--options__item
  .link:link {
  text-decoration: underline;
}
ul {
  list-style-type: none;
}
li {
  width: 100%;
}

.container__sidebar
  .container__sidebar--options
  .container__menu--options
  .container__button {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-bottom: 0.5rem;
  width: 100%;
}

/*Media Queries*/
@media screen and (max-width: 512px) {
  .institution-mobile-header {
    padding: 0.5rem 0.5rem;
  }
  .institution-mobile-header .logo-container img {
    width: 100px;
  }
  .institution-mobile-header .container__menu--profile {
    margin-right: 0.5rem;
  }
  .institution-mobile-header .container__menu--profile svg {
    font-size: 1.5rem;
  }
  .container__sidebar .container__sidebar--profile {
    padding: 0.5rem;
  }
  .container__sidebar
    .container__sidebar--profile
    .container__sidebar--profile__image
    svg {
    font-size: 1.5rem;
  }
  .container__sidebar
    .container__sidebar--profile
    .container__sidebar--profile__name
    span {
    font-size: 0.8rem;
  }
  .container__sidebar .container__sidebar--options {
    padding: 0.5rem;
  }
  .container__sidebar
    .container__sidebar--options
    .container__menu--options
    .container__menu--options__item
    svg {
    font-size: 1.3rem;
  }
}
</style>

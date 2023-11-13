<template>
  <div :class="[darkMode ? 'dark-theme' : 'light-theme']">
    <component 
    :is="getConditionallyRenderedNavbar" 
    v-if="!mobile"/>
    <component 
    :is="getConditionallyRenderedNavbarMobile" 
    v-else/>
    <router-view />
    <FooterCommon/>
    <div class="overlay" v-show="showMobileMenu" @click="closeMobileMenu"></div>
    <div class="overlay" v-show="isLoading">
      <span class="loader"></span>
    </div>
  </div>
</template>

<script>
import FooterCommon from "@/components/common/FooterCommon.vue";
import NavbarCommon from "@/components/common/NavbarCommon.vue";
import NavbarCommonMobile from "@/components/common/NavbarCommonMobile.vue";
// Student
import StudentNavbar from "@/components/student/StudentNavbar.vue";
import StudentNavbarMobile from "@/components/student/StudentNavbarMobile.vue";
// Institution
import InstitutionNavbar from "@/components/institution/InstitutionNavbar.vue";
import InstitutionNavbarMobile from "@/components/institution/InstitutionNavbarMobile.vue";
// USEI
import UseiNavbar from "@/components/usei/UseiNavbar.vue";
import UseiNavbarMovile from "@/components/usei/UseiNavbarMovile.vue";

import { useMobileMenuStore } from "./store/common/mobileMenuStore";
import { useThemeStore } from "@/store/common/useThemeStore"; 
import { useLoginStore } from "@/store/common/loginStore";
import { useLoaderStore } from "@/store/common/loaderStore";
export default {
  name: "App",
  data() {
    return {
      mobile: false,
      windowWidth: 0,
    };
  },
  
  computed: {
      showMobileMenu(){
        return useMobileMenuStore().mobileMenu;
      },
      darkMode(){
        return useThemeStore().isDarkMode;
      },
      getConditionallyRenderedNavbar(){
        if(useLoginStore().isLogged == 1){
          return "StudentNavbar";
        } else if (useLoginStore().isLogged== 2){
          return "InstitutionNavbar";
        } else if (useLoginStore().isLogged == 3){
          return "UseiNavbar";
        } else {
          return "NavbarCommon";
        }
      },
      getConditionallyRenderedNavbarMobile(){
        if(useLoginStore().isLogged == 1){
          return "StudentNavbarMobile";
        } else if (useLoginStore().isLogged== 2){
          return "InstitutionNavbarMobile";
        } else if (useLoginStore().isLogged == 3){
          return "UseiNavbarMovile";
        } else {
          return "NavbarCommonMobile";
        }
      },
      isLoading(){
        return useLoaderStore().isLoading;
      },
  },
  components: {
    FooterCommon,
    NavbarCommon,
    NavbarCommonMobile,
    StudentNavbar,
    InstitutionNavbar,
    InstitutionNavbarMobile,
    UseiNavbar,
    UseiNavbarMovile,
    StudentNavbarMobile,
  },
  created() {
    window.addEventListener("resize", this.handleResize);
    this.handleResize();
    this.loadTheme();
    this.getNavbar();
  },
  methods: {
    handleResize() {
      this.windowWidth = window.innerWidth;
      if (this.windowWidth <= 1024) {
        this.mobile = true;
      } else {
        this.mobile = false;
        this.closeMobileMenu();
      }
    },
    closeMobileMenu() {
      useMobileMenuStore().closeMobileMenu();
    },
    toggleShowMobileMenu() {
      useMobileMenuStore().toggleMobileMenu();
    },
    loadTheme(){
      useThemeStore().loadTheme();
    },
    getNavbar(){
      var userType = $cookies.get("type");
      if(userType == 1){
        useLoginStore().setLogin(1);
        this.isFooterVisible = false;
      } else if (userType == 2){
        this.isFooterVisible = true;
        useLoginStore().setLogin(2);
      } else if (userType == 3){
        this.isFooterVisible = true;
        useLoginStore().setLogin(3);
      } else {
        this.isFooterVisible = true;
        useLoginStore().setLogin(0);
      }
    },
    getNavbarMobile(){

      return this.getConditionallyRenderedNavbarMobile();
      
    }

  },
 
};
</script>

<style scoped>
.overlay {
  display: block;
  position: fixed;
  background-color: rgba(0, 0, 0, 0.5);
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
  z-index: 2;
}
.loader {
    width: 48px;
    height: 48px;
    border: 5px solid #FFF;
    border-bottom-color: #FF3D00;
    border-radius: 50%;
    display: inline-block;
    box-sizing: border-box;
    animation: rotation 1s linear infinite;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    }

    @keyframes rotation {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
  } 
</style>

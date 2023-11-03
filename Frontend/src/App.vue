<template>
  <div :class="[darkMode ? 'dark-theme' : 'light-theme']">
    <NavbarCommon v-if="!mobile" />
    <NavbarCommonMobile v-else 
    @toggle-mobile-menu="toggleShowMobileMenu" 
    />
    <router-view />
    <FooterCommon />
    <div class="overlay" v-show="showMobileMenu" @click="closeMobileMenu"></div>
  </div>
</template>

<script>
import FooterCommon from "@/components/common/FooterCommon.vue";
import NavbarCommon from "@/components/common/NavbarCommon.vue";
import NavbarCommonMobile from "@/components/common/NavbarCommonMobile.vue";
import { useMobileMenuStore } from "./store/common/mobileMenuStore";
import { useThemeStore } from "@/store/common/useThemeStore"; 
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
      }
  },
  components: {
    FooterCommon,
    NavbarCommon,
    NavbarCommonMobile,
  },
  created() {
    window.addEventListener("resize", this.handleResize);
    this.handleResize();
    this.loadTheme();
  },
  methods: {
    handleResize() {
      this.windowWidth = window.innerWidth;
      if (this.windowWidth < 1024) {
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
</style>

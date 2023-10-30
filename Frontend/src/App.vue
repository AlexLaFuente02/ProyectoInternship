<template>
  <div :class="[darkMode ? 'dark-theme' : 'light-theme']">
    <NavbarCommon v-if="!mobile" />
    <NavbarCommonMobile v-else />
    <router-view />
    <FooterCommon />
  </div>
</template>
<script>
import { useThemeStore } from "@/store/common/useThemeStore";
import { computed } from "vue";
import FooterCommon from "@/components/common/FooterCommon.vue";
import NavbarCommon from "@/components/common/NavbarCommon.vue";
import NavbarCommonMobile from "@/components/common/NavbarCommonMobile.vue";
export default {
  name: "App",
  data() {
    return {
      mobile: false,
      windowWidth: 0,
    };
  },
  setup() {
    const themeStore = useThemeStore();
    const darkMode = computed(() => themeStore.isDarkMode);
    return {
      darkMode,
    };
  },
  components: {
    FooterCommon,
    NavbarCommon,
    NavbarCommonMobile,
  },
  created() {
    window.addEventListener("resize", this.handleResize);
    this.handleResize();
  },
  methods: {
    handleResize() {
      this.windowWidth = window.innerWidth;
      if (this.windowWidth < 1000) {
        this.mobile = true;
      } else {
        this.mobile = false;
      }
    },
  },

};
</script>
<style></style>

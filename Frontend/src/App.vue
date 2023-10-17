<template>
  <div :class="[darkMode ? 'dark-theme' : 'light-theme']">
    <NavbarCommon />
    <router-view />
    <FooterCommon />
  </div>
</template>
<script>
import { useThemeStore } from "@/store/common/useThemeStore";
import { computed } from "vue";
import FooterCommon from "@/components/common/FooterCommon.vue";
import NavbarCommon from "@/components/common/NavbarCommon.vue";

export default {
  name: "App",
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
  },
};
</script>
<style></style>

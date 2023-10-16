<template>
  <div :class="[darkMode ? 'dark-theme' : 'contenedor-principal']">
    <router-view />
  </div>
</template>
<script>
import { useThemeStore } from '@/store/common/useThemeStore';
import { computed } from 'vue';

export default {
  name: 'App',
  setup() {
    const themeStore = useThemeStore();
    const darkMode = computed(() => themeStore.isDarkMode);
    return {
      darkMode,
    };
  },
};
</script>
<style>

</style>
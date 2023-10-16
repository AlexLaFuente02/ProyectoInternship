<template>
    <label class="theme-toggle">
      <input type="checkbox" v-model="this.darkMode" @change="toggleTheme()"/>
      <span class="slider">{{ $store.global.darkMode }}</span>
    </label>
</template>
<script>
import { useThemeStore } from '@/store/common/useThemeStore';

export default {
  components: {
    ThemeToggle: {
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
      template: `
        <button @click="toggleDarkMode">{{ isDarkMode ? 'Light Mode' : 'Dark Mode' }}</button>
      `,
    },
  },
};
</script>
  
  <style scoped>
  .theme-toggle {
    position: relative;
    display: inline-block;
    width: 50px;
    height: 24px;
  }
  
  .theme-toggle input {
    display: none;
  }
  
  .theme-toggle .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    border-radius: 24px;
    transition: 0.4s;
  }
  
  .theme-toggle input:checked + .slider {
    background-color: #2196F3;
  }
  
  .theme-toggle input:checked + .slider:before {
    transform: translateX(26px);
  }
  </style>
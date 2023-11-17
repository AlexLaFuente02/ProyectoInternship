<template>
  <div class="main-container">
    <h1>DASHBOARD DE ANÁLISIS</h1>
    <div class="internship-container">
      <h1>Análisis de datos</h1>
    </div>
  </div>
</template>

<script>
import Button from "@/components/common/Button.vue";
export default {
  name: "UseiAnalyticsDashboardPage",
  components: {
    Button,
  },
};
</script>

<style scoped>
.main-container {
  margin: 3% auto;
  width: 90%;
}

.internship-container {
  display: grid;
  grid-template-rows: auto auto;
  grid-template-columns: 41% 1fr;
  background-color: rgb(255, 255, 255);
  text-align: center;
  border: 2px solid black;
}

@media screen and (max-width: 768px) {
  .internship-container {
    display: block;
  }
}

/* DARK THEME */
.dark-theme .internship-container {
  background-color: #353e48;
}

.dark-theme .internship-container {
  border: 2px solid white;
}

.dark-theme .third-grid-container {
  border-top: 2px solid white;
}
</style>

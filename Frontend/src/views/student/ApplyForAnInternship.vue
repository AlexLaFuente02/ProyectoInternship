<template>
  <div class="main-container">
    <h1>POSTULAR A UNA PASANTÍA</h1>
    <div class="internship-container">
        <div class="first-grid-container">
          <h4>hola</h4>
        </div>
        <div class="second-grid-container">
          <h4>hola2</h4>
        </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
/* .main-container {
   width: 50%;   
} */
.internship-container {
    display: grid;
    grid-template-rows: repeat(2, 1fr);
    border: 3px solid black;
}

.first-grid-container {
  grid-template-columns: repeat(2, 1fr);
}
</style>

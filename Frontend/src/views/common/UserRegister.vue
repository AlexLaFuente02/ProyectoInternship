<template>
  <div>
    <h1>Registro</h1>
    <form @submit.prevent="registrarEstudiante">
      <div>
        <label for="nombre">Nombre *</label>
        <input type="text" id="nombre" v-model="estudiante.nombre" required />
      </div>
      <div>
        <label for="primerApellido">Primer Apellido *</label>
        <input
          type="text"
          id="primerApellido"
          v-model="estudiante.primerApellido"
          required
        />
      </div>
      <div>
        <label for="segundoApellido">Segundo Apellido *</label>
        <input
          type="text"
          id="segundoApellido"
          v-model="estudiante.segundoApellido"
          required
        />
      </div>
      <div>
        <label for="documento">Documento</label>
        <input type="text" id="documento" v-model="estudiante.documento" />
      </div>
      <div>
        <label for="complemento">Complemento (Ciudades de Bolivia)</label>
        <select id="complemento" v-model="estudiante.complemento">
          <option value="Santa Cruz">Santa Cruz</option>
          <option value="La Paz">La Paz</option>
          <option value="Cochabamba">Cochabamba</option>
          <!-- Agrega más opciones de ciudades aquí -->
        </select>
      </div>
      <button type="submit">REGISTRARSE</button>
    </form>
  </div>
</template>
<script>
export default {};
</script>
<style></style>

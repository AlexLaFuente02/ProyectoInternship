<template>
    <div>
      <h1>Registro de Estudiante</h1>
      <form @submit.prevent="registrarEstudiante">
        <div>
          <label for="nombre">Nombre *</label>
          <input type="text" id="nombre" v-model="estudiante.nombre" required>
        </div>
        <div>
          <label for="primerApellido">Primer Apellido *</label>
          <input type="text" id="primerApellido" v-model="estudiante.primerApellido" required>
        </div>
        <div>
          <label for="segundoApellido">Segundo Apellido *</label>
          <input type="text" id="segundoApellido" v-model="estudiante.segundoApellido" required>
        </div>
        <div>
          <label for="documento">Documento</label>
          <input type="text" id="documento" v-model="estudiante.documento">
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
        <div>
          <label for="validacion">Validación*</label>
          <input type="checkbox" id="validacion" v-model="estudiante.validacion">
        </div>
        <div>
          <label for="sede">Sede *</label>
          <input type="text" id="sede" v-model="estudiante.sede" required>
        </div>
        <div>
          <label for="carrera">Carrera *</label>
          <input type="text" id="carrera" v-model="estudiante.carrera" required>
        </div>
        <div>
          <label for="anioIngreso">Año de Ingreso *</label>
          <input type="text" id="anioIngreso" v-model="estudiante.anioIngreso" required>
        </div>
        <button type="submit">REGISTRARSE</button>
      </form>
    </div>
  </template>
  <script>
  
  export default {
    data() {
      return {
        estudiante: {
          nombre: '',
          primerApellido: '',
          segundoApellido: '',
          documento: '',
          complemento: '',
          validacion: false,
          sede: '',
          carrera: '',
          anioIngreso: ''
        }
      };
    },
    methods: {
      registrarEstudiante() {
        // Aquí puedes enviar los datos del estudiante a tu servidor o realizar cualquier otra acción necesaria.
        console.log(this.estudiante);
      }
    }
  };
  </script>


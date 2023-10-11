<template>
  <div>
    <h1>Registro de Instituciones</h1>
    <form @submit.prevent="registrarInstitucion">
      <h1>Datos Generales</h1>
      <div>
        <label for="nombre">Nombre Institucion*</label>
        <input type="text" id="nombre" v-model="institucion.nombre" required>
      </div>
      <div>
        <label for="Sector">Sector al que pertenece *</label>
        <input type="text" id="Sector" v-model="institucion.sector" required>
      </div>
      <div>
        <label for="Resenia">Reseña Institucion *</label>
        <input type="text" id="Resenia" v-model="institucion.resenia" required>
      </div>
      <div>
        <label for="Logo">Logo de institucion</label> <!-- Nose poner docu logo -->
        <input type="text" id="Logo" v-model="institucion.logo">
      </div>
      <h1>Datos de contacto</h1>
      <div>
        <label for="nombrecontacto">Nombre contacto*</label>
        <input type="text" id="nombrecontacto" v-model="institucion.nombrecontacto" required>
      </div>
      <div>
        <label for="correo">Correo electronico *</label>
        <input type="text" id="Sector" v-model="institucion.correo" required>
      </div>
      <div>
        <label for="Celular">Celular de contacto *</label>
        <input type="text" id="Celular" v-model="institucion.celular" required>
      </div>
      <button type="/">Cancelar/ Volver atras</button>
      <button type="submit">REGISTRARSE</button>
    </form>
  </div>
</template>
<script>

export default {
  data() {
    return {
      institucion: {
        nombre: '',
        sector: '',
        resenia: '',
        logo: '',
        nombrecontacto: '',
        correo:'',
        Celular: ''
      }
    };
  },
  methods: {
    registrarInstitucion() {
      // Aquí puedes enviar los datos del estudiante a tu servidor o realizar cualquier otra acción necesaria.
      console.log(this.institucion);
    }
  }
};
</script>


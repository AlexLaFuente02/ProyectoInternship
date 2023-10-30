<template>
  <div class="container bg-body-secondary">
    <div class="p-md-5 mx-md-4">
      <div class="text-center">
        <img
          class="img-fluid py-3 w-16rem"
          src="../../components/images/USEI.png"
          alt="Unidad de Servicios Estudiantiles Integrales"
        />
      </div>

      <form class="form-group">
        <h4>Por favor inicia sesión a continuación:</h4>
        <div class="form-outline mb-4">
          <input
            type="text"
            id="idusuario"
            class="form-control"
            placeholder="Ingresa tu usuario"
            v-model="userData.idusuario"
          />
          <label class="form-label" for="idusuario">Usuario</label>
        </div>

        <div class="form-outline mb-4">
          <input
            type="password"
            id="password"
            class="form-control"
            placeholder="Ingresa tu contraseña"
            v-model="userData.password"
          />
          <label class="form-label" for="password">Contraseña</label>
        </div>

        <div class="text-center pt-1 mb-5 pb-1">
          <button
            class="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3"
            type="button"
            @click="login"
          >
            Iniciar sesión
          </button>
          <a class="text-muted" href="#!">¿Olvidaste tu contraseña?:c</a>
        </div>

        <div class="d-flex align-items-center justify-content-center pb-4">
          <p class="mb-0 me-2">¿No tienes una cuenta?</p>
          <button type="button" class="btn btn-outline-danger">
            Crea una cuenta
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userData: {
        idusuario: '',
        password: '',
      },
    };
  },
  methods: {
    login() {
      // Realiza la solicitud POST a la API
      fetch('http://localhost:3000/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(this.userData),
      })
        .then(response => {
          if (response.ok) {
            // La solicitud fue exitosa, puedes redirigir o realizar otras acciones
            console.log('Inicio de sesión exitoso');
            this.$router.push({ name: 'PrincipalPage' });

          } else {
            // La solicitud falló, puedes manejar el error aquí
            console.error('Inicio de sesión fallido');
          }
        })
        .catch(error => {
          console.error('Error de red: ', error);
        });
    },
  },
};
</script>
<style>
body {
  background-image: url(https://unsplash.com/photos/jLwVAUtLOAQ);
}
</style>

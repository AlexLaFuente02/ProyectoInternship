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
        <h4>Por favor incia sesión a continuación:</h4>
        <div class="form-outline mb-4">
          <input
            type="email"
            id="form2Example11"
            class="form-control"
            placeholder="Ingresa tu usuario"
          />
          <label class="form-label" for="form2Example11"> </label>
        </div>

        <div class="form-outline mb-4">
          <input
            type="password"
            id="form2Example22"
            class="form-control"
            placeholder="Ingresa tu contraseña"
          />
          <label class="form-label" for="form2Example22"></label>
        </div>

        <div class="text-center pt-1 mb-5 pb-1">
          <button
            class="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3"
            type="button"
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
export default {};
</script>
<style>
body {
  background-image: url(https://unsplash.com/photos/jLwVAUtLOAQ);
}
</style>

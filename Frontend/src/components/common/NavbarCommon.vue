<template>
  <header class="sticky-top">
    <nav class="navbar navbar-expand-lg bg-body-secondary bg-opacity-75 shadow-lg">
      <div class="container-md">
        <div class="navbar-brand p-0 me-0 me-lg-2">
          <img
            class="img-fluid py-3 w-16rem"
            src="../images/USEI.png"
            alt="Unidad de Servicios Estudiantiles Integrales"
          />
        </div>
        <div class="bd-navbar-toggle">
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
        </div>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <div class="nav col-6 col-md-auto mb-lg-0 mx-auto justify-content-center mb-md-0 mb-3">
            <router-link class="nav-item nav-link" to="/">Inicio</router-link>
            <router-link class="nav-item nav-link" to="/moreInformation">M&aacute;s informaci&oacute;n</router-link>
            <router-link class="nav-item nav-link" to="/institutionsCommon">Instituciones</router-link>
            <router-link class="nav-item nav-link" to="/internshipsCommon">Pasant&iacute;as</router-link>
          </div>
        </div>
        <div class="mx-auto my-2">
          <button type="button" class="btn btn-warning me-3">Crear una Cuenta</button>
          <button type="button" class="btn btn-primary">Iniciar Sesi&oacute;n</button>
        </div>
      </div>
    </nav>
  </header>
</template>
<script>
export default {};
</script>
<style></style>

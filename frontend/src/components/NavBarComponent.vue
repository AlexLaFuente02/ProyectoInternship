<template>
    <div class="navbar navbar-light">
    <nav class="navbar navbar-expand-lg bg-body-secondary bg-opacity-75 w-100 shadow">
      <div class="container-md">
        <span class="navbar-brand fw-light">
          <img class="h-50 w-25 me-5" src="@/components/images/USEI.png" alt="USEI"/>
          USEI
        </span>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <div class="navbar-nav mb-lg-0">
            <router-link class="nav-item nav-link" to="/">Home</router-link> |
            <router-link class="nav-item nav-link" to="/login">Login</router-link>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>
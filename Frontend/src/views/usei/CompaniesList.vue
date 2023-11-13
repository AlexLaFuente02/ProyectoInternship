<template>
  <div class="main-container">
    <h1>EMPRESAS</h1>
    <h5>Te mostramos las empresas que forman parte de Internship By UCB.</h5>
    <div class="companies-container">
      <div class="company-information-grid">
        <img
          src="https://i.pinimg.com/564x/0f/76/1c/0f761c01d1fb284eb429061e577aa623.jpg"
          alt="Logo de la Empresa"
        />
        <div class="information-grid">
          <h4 class="information-title">Detalles de la Empresa:</h4>
          <div class="c_details">
            <ul class="company-details">
              <li><strong>Nombre: </strong>Google</li>
              <li>
                <strong>Pertenece al sector: </strong>
                Sector de pertenencia de la empresa
              </li>
              <li><strong>Rese&ntilde;a: </strong>Descripción de la empresa</li>
              <li><strong>Contacto: </strong>Contacto de la empresa</li>
              <li>
                <strong>Correo electr&oacute;nico: </strong>
                Correo electr&oacute;nico de la empresa
              </li>
              <li>
                <strong>N&uacute;mero de celular: </strong>
                N&uacute;mero de celular de la empresa
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="company-information-grid">
        <img
          src="https://i.pinimg.com/564x/6b/d1/e7/6bd1e7c2aaa62cabc9890c4f82b39a11.jpg"
          alt="Logo de la Empresa"
        />
        <div class="information-grid">
          <h4 class="information-title">Detalles de la Empresa:</h4>
          <div class="c_details">
            <ul class="company-details">
              <li><strong>Nombre: </strong>Apple</li>
              <li>
                <strong>Pertenece al sector: </strong>
                Sector de pertenencia de la empresa
              </li>
              <li><strong>Rese&ntilde;a: </strong>Descripción de la empresa</li>
              <li><strong>Contacto: </strong>Contacto de la empresa</li>
              <li>
                <strong>Correo electr&oacute;nico: </strong>
                Correo electr&oacute;nico de la empresa
              </li>
              <li>
                <strong>N&uacute;mero de celular: </strong>
                N&uacute;mero de celular de la empresa
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.main-container {
  margin: 3% auto;
  width: 90%;
}

img {
  width: 100%;
}

.companies-container {
  display: grid;
  grid-template-rows: auto;
  grid-template-columns: auto;
  background-color: rgb(255, 255, 255);
  text-align: center;
  border: 2px solid black;
  padding-bottom: 2%;
}

.company-information-grid {
  display: grid;
  grid-template-rows: auto;
  grid-template-columns: 20% auto;
  align-items: center;
  margin: 2% auto 0;
  width: 92%;
  border: 2px solid black;
}

.information-title {
  margin: 2% auto 0;
}

.c_details {
  width: 70%;
  margin: 2% auto;
}

.company-details {
  text-align: start;
  list-style: none;
}

@media screen and (max-width: 768px) {
  .companies-container,
  .company-information-grid {
    display: block;
  }

  .c_details {
    margin: 5% auto;
  }
}

/* DARK THEME */
.dark-theme .companies-container {
  background-color: #353e48;
}

.dark-theme .companies-container {
  border: 2px solid white;
}

.dark-theme .company-information-grid {
  border: 2px solid white;
}
</style>

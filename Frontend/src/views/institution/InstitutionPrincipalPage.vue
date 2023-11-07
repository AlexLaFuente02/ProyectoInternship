<template>
    <div class="login-container">
      <div class="top-section">
        <div class="left-section">
          <h2>Bienvenido, desde esta página puedes agregar nuevas convocatorias y revisar las solicitudes de estudiantes que recibiste.</h2>
        </div>
        <div class="right-section">
          <img src="https://img.freepik.com/vector-premium/cute-dibujos-animados-perro-pug-sentado-fondo-aislado_701683-46.jpg?w=996" alt="Logo de la empresa" class="company-logo" />
        </div>
      </div>
  
      <div class="quick-action">
        <h3>Acción rápida</h3>
        <div class="action-buttons">
          <button @click="addNewConvocatoria">Agregar Convocatoria</button>
          <button @click="misConvocatorias">Mis Convocatorias</button>
          <button @click="bandejaSolicitudes">Bandeja de Solicitudes</button>
        </div>
      </div>
  
      <div class="active-convocatorias">
        <h3>Convocatorias activas o Solicitudes recibidas</h3>
        <div class="cards">
          <!-- Lógica para mostrar las convocatorias o solicitudes recibidas -->
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    methods: {
      addNewConvocatoria() {
        // Lógica para el botón 'Agregar Convocatoria'
        console.log('Agregar Convocatoria');
      },
      misConvocatorias() {
        // Lógica para el botón 'Mis Convocatorias'
        console.log('Mis Convocatorias');
      },
      bandejaSolicitudes() {
        // Lógica para el botón 'Bandeja de Solicitudes'
        console.log('Bandeja de Solicitudes');
      }
    }
  };
  </script>
  
  <style scoped>
  /* Estilos para la página de inicio de sesión */
  @media (max-width: 480px) {
  .top-section {
    flex-direction: column;
    align-items: center;
  }

  .left-section {
    width: 100%;
  }

  .right-section {
    width: 100%;
    text-align: center;
  }

  .company-logo {
    margin-top: 15px;
  }
}
  .login-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  
  .top-section {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }
  
  .left-section {
    width: 50%;
  }
  
  .right-section {
    width: 50%;
    text-align: right;
  }
  
  h2 {
    font-size: 20px;
    color: #333;
    text-align: left;
  }
  
  .company-logo {
    max-width: 100%;
    height: auto;
  }
  
  .quick-action {
    margin-top: 20px;
  }
  
  h3 {
    font-size: 18px;
    color: #333;
    text-align: center;
    margin-bottom: 10px;
  }
  
  .action-buttons {
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    margin-top: 10px;
  }
  
  button {
    padding: 10px 20px;
    background-color: #5a99dd;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
    margin: 0 5px 10px 5px;
  }
  
  .active-convocatorias {
    margin-top: 30px;
  }
  
  .cards {
    /* Estilos para mostrar las convocatorias o solicitudes recibidas */
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
  </style>
  
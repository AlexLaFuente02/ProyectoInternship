<template>
    <div class="company-card">
      <img :src="logoSrc" alt="Company Logo" class="company-logo" />
      <h2 class="company-name">{{ name }}</h2>
      <p class="company-description">{{ description }}</p>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      name: {
        type: String,
        required: true,
      },
      logoSrc: {
        type: String,
        required: true,
      },
      description: {
        type: String,
        required: true,
      },
    },
  };
  </script>
  
  <style scoped>
  .company-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #460977;
    padding: 1rem;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
    margin: 0.5rem;
    width: 250px;
    height: 400px;
    color: #fff;
    transition: all 0.3s ease-in-out;
  }
  .dark-theme .company-card {
    background: #310556;
  }
  
  .company-logo {
    width: 100px; /* Adjust the size as needed */
    height: 100px; /* Adjust the size as needed */
    object-fit: contain;
    margin-bottom: 1rem;
  }
  
  .company-name {
    font-size: 1.2rem;
    font-weight: bold;
    margin-bottom: 0.5rem;
  }
  
  .company-description {
    text-align: center;
  }
/*Estilos hover*/
    .company-card:hover {
        background: #310556;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
        scale: 1.1;
    }
    .dark-theme .company-card:hover {
        background: #460977;
    }



  </style>
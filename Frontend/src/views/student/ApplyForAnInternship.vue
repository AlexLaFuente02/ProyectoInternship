<template>
  <div class="main-container">
    <h1>POSTULAR A UNA PASANTÍA</h1>
    <div class="internship-container">
      <div class="first-grid-container">
        <img
          src="https://www.cainco.org.bo/empresaydesarrollo/wp-content/uploads/2021/05/1550703145451.png"
          alt=""
        />
      </div>
      <div class="second-grid-container">
        <div class="i_title">
          <h2>Desarrollo Web Backend con Spring en Jala Soft</h2>
        </div>
        <div class="i_description">
          <h4>Descripción de la Pasantía:</h4>
          <p>
            ¡Gracias por tu interés en la pasantía de desarrollo web backend con
            Spring en Jala Soft! Esta es una oportunidad emocionante para
            adentrarte en el mundo del desarrollo web y trabajar en proyectos
            significativos con un equipo experimentado.
          </p>
        </div>
        <div class="institution_name">
          <h4>Empresa:</h4>
          <p>Jala soft</p>
        </div>
      </div>
      <div class="third-grid-container">
        <div class="internship-information-grid">
          <div class="first-information-grid">
            <div class="title-grid">
              <h4>Detalles</h4>
            </div>
            <div class="information-grid">
              <div class="information-title">
                <h4>Detalles de la Pasantía:</h4>
              </div>
              <div class="i_details">
                <ul class="internship-details">
                  <li>Empresa: Jala Soft</li>
                  <li>Ubicación: Ubicación de la empresa</li>
                  <li>Duración: Duración de la pasantía</li>
                  <li>Fecha de Inicio: Fecha de inicio</li>
                  <li>Fecha de Finalización: Fecha de finalización</li>
                  <li>Tipo de Pasantía: Pasantía de Desarrollo Web Backend</li>
                  <li>Tecnologías: Spring, Java, SQL, etc.</li>
                  <li>Ciudad: Cochabamba</li>
                </ul>
              </div>
              <div class="download-internship">
                <p>Descargar aplicativo:</p>
                <Button text="Descargar" :color="0"></Button>
              </div>
            </div>
          </div>
          <div class="second-information-grid">
            <div class="title-grid">
              <h4>Requisitos</h4>
            </div>
            <div class="information-grid">
              <div class="information-title">
                <h4>Requisitos de Postulación:</h4>
              </div>
              <div class="i_details">
                <ul class="internship-details">
                  <li>Conocimiento básico de programación en Java.</li>
                  <li>Interés en el desarrollo web backend.</li>
                  <li>Habilidades de comunicación y trabajo en equipo.</li>
                </ul>
              </div>
              <div class="information-title">
                <h4>Carreras a las que va dirigida:</h4>
              </div>
              <div class="i_details">
                <ul>
                  <li class="internship-details">
                    Estudiantes de carreras relacionadas con la informática o
                    desarrollo de software.
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="third-information-grid">
            <div class="title-grid">
              <h4>Postular</h4>
            </div>
            <div class="information-grid">
              <div class="information-title">
                <h4>¿Cómo Postular?</h4>
              </div>
              <div class="i_details">
                <p>
                  Si estás interesado en esta pasantía, por favor, sigue estos
                  pasos:
                </p>
              </div>
              <div class="upload-CV">
                <h6>Subir CV:</h6>
                <Button text="Subir PDF" :color="4"></Button>
              </div>
              <div class="insert-curriculum">
                <input type="text" name="uploadCV" id="uploadCV" />
              </div>
              <div class="submit-container">
                <p>
                  Escribe una breve carta de presentación en la que expliques
                  por qué estás interesado en esta pasantía y cómo tu formación
                  y habilidades pueden contribuir al equipo de Jala Soft.
                </p>
                <textarea
                  name="userDescription"
                  id="userDescription"
                  cols="25"
                  rows="10"
                ></textarea>
                <Button text="POSTULAR" :color="2"></Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Button from "@/components/common/Button.vue";
export default {
  name: "ApplyForAnInternshipPage",
  components: {
    Button,
  },
};
</script>

<style scoped>
.main-container {
  margin: 3% auto;
  width: 90%;
}

img {
  width: 80%;
}

.internship-container {
  display: grid;
  grid-template-rows: auto auto;
  grid-template-columns: 41% 1fr;
  background-color: rgb(255, 255, 255);
  text-align: center;
  border: 1px solid black;
}

.first-grid-container {
  border: 1px solid black;
}

.second-grid-container {
  border: 1px solid black;
}

.third-grid-container {
  grid-column: span 2;
  border: 1px solid black;
}

.internship-information-grid {
  display: grid;
  grid-template-rows: auto auto;
  grid-template-columns: repeat(3, 1fr);
  margin: 2% auto;
  width: 92%;
  border: 1px solid black;
}

.first-information-grid {
  border: 1px solid black;
}
.second-information-grid {
  border: 1px solid black;
}
.third-information-grid {
  border: 1px solid black;
}
.title-grid {
  background-color: rgb(223, 255, 255);
  border-bottom: 2px solid black;
}

.internship-details {
  text-align: start;
  list-style: none;
}

.upload-CV {
  display: flex;
  justify-content: space-between;
  width: 70%;
  margin: 3% auto;
}

#uploadCV,
#userDescription {
  border: 2px solid cadetblue;
  resize: none;
}
#uploadCV:focus,
#userDescription:focus {
  border: none;
}

@media screen and (max-width: 768px) {
  .internship-container {
    display: block;
  }

  .internship-information-grid {
    display: block;
  }
}

/* DARK THEME */
.dark-theme .internship-container {
  background-color: #353e48;
}

.dark-theme .internship-container {
  border: 1px solid white;
}

.dark-theme .first-grid-container {
  border: 1px solid white;
}

.dark-theme .second-grid-container {
  border: 1px solid white;
}

.dark-theme .third-grid-container {
  border: 1px solid white;
}

.dark-theme .internship-information-grid {
  border: 1px solid white;
}

.dark-theme .first-information-grid {
  border: 1px solid white;
}
.dark-theme .second-information-grid {
  border: 1px solid white;
}
.dark-theme .third-information-grid {
  border: 1px solid white;
}
.dark-theme .title-grid {
  background-color: rgb(123, 188, 188);
  border-bottom: 2px solid white;
}
</style>

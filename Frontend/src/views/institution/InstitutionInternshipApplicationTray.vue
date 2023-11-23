<template>
  <div class="main-container">
    <h1>BANDEJA DE SOLICITUDES</h1>
    <h5>
      Te mostramos los estudiantes/graduados que est&aacute;n solicitando tu
      pasant&iacute;a <br />
      "<i> Desarrollo Web Backend con Spring Boot en Jala Soft </i>".
    </h5>
    <div class="students-container">
      <table class="studentsRequests-table">
        <tr class="request-table-row">
          <th class="request-table-head">Nombre</th>
          <th class="request-table-head">A&ntilde;o de graduaci&oacute;n</th>
          <th class="request-table-head">Carrera</th>
          <th class="request-table-head">Curriculum Vitae</th>
          <th class="request-table-head">Acci&oacute;n</th>
        </tr>
        <tr class="request-table-row">
          <td class="request-table-cell">Oscar</td>
          <td class="request-table-cell">2020</td>
          <td class="request-table-cell">Ingeniería de Sistemas</td>
          <td class="request-table-cell">Si</td>
          <td class="request-table-cell">
            <router-link class="link" to="/student/profile">
              <Button text="Ver perfil" :color="3"></Button>
            </router-link>
          </td>
        </tr>
        <tr class="request-table-row">
          <td class="request-table-cell">Oscar</td>
          <td class="request-table-cell">2020</td>
          <td class="request-table-cell">Ingeniería de Sistemas</td>
          <td class="request-table-cell">Si</td>
          <td class="request-table-cell">
            <router-link class="link" to="/student/profile">
              <Button text="Ver perfil" :color="3"></Button>
            </router-link>
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
import Button from "@/components/common/Button.vue";
export default {
  name: "InstitutionRequestsTrayPage",
  components: {
    Button,
  },
};
</script>

<style scoped>
.main-container {
  margin: 3% auto;
  width: 90%;
  text-align: center;
}

.students-container {
  background-color: rgb(255, 255, 255);
  border: 2px solid black;
  overflow-x: auto;
}

.studentsRequests-table {
  margin: 2% auto;
  border-collapse: collapse;
  width: 90%;
}

.request-table-head,
.request-table-cell {
  padding: 10px;
}

.link {
  text-decoration: none;
}

tr:nth-child(even) {
  background-color: #e8e8e8;
}

tr:first-child {
  border-bottom: 2px solid black;
}

/* DARK THEME */
.dark-theme .students-container {
  background-color: #353e48;
  border: 2px solid white;
}

.dark-theme tr:nth-child(even) {
  background-color: #4c5865;
}

.dark-theme tr:first-child {
  border-bottom: 2px solid white;
}

/* MEDIA QUERIES */
@media screen and (max-width: 768px) {
  .studentsRequests-table {
    margin: 3%;
  }
}
</style>

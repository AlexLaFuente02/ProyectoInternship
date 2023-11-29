<template>
  <div class="main-container">
    <h1>BANDEJA DE SOLICITUDES</h1>
    <h5>
      Te mostramos los estudiantes/graduados que est&aacute;n solicitando tu
      pasant&iacute;a <br />
      "<i> Desarrollo Web Backend con Spring en Jala Soft </i>".
    </h5>
    <div class="students-container">
      <table class="studentsRequests-table" v-if="pendingPostulationsAreLoaded">
        <tr class="request-table-row">
          <th class="request-table-head">Nombre</th>
          <th class="request-table-head">A&ntilde;o de graduaci&oacute;n</th>
          <th class="request-table-head">Carrera</th>
          <th class="request-table-head">Curriculum Vitae</th>
          <th class="request-table-head">Carnet de Identidad</th>
          <th class="request-table-head">Correo electr&oacute;nico</th>
          <th class="request-table-head">Graduado</th>
          <th class="request-table-head">Sede</th>
          <th class="request-table-head">Acciones</th>
        </tr>
        <tr
          class="request-table-row"
          v-for="pendingPostulation in pendingPostulations"
          :key="pendingPostulation.id"
        >
          <td class="request-table-cell">
            {{
              pendingPostulation.estudiante_id.nombres +
              " " +
              pendingPostulation.estudiante_id.apellidos
            }}
          </td>
          <td class="request-table-cell">
            {{ pendingPostulation.estudiante_id.aniograduacion }}
          </td>
          <td class="request-table-cell">
            {{ pendingPostulation.estudiante_id.carrera_id }}
          </td>
          <td class="request-table-cell">
            <a :href="pendingPostulation.estudiante_id.linkcurriculumvitae">
              {{ pendingPostulation.estudiante_id.linkcurriculumvitae }}
            </a>
          </td>
          <td class="request-table-cell">
            {{ pendingPostulation.estudiante_id.carnetidentidad }}
          </td>
          <td class="request-table-cell">
            {{ pendingPostulation.estudiante_id.correoelectronico }}
          </td>
          <td class="request-table-cell">
            {{ isTheStudentGraduated(pendingPostulation) }}
          </td>
          <td class="request-table-cell">
            {{ pendingPostulation.estudiante_id.sede_id }}
          </td>
          <td class="request-table-cell">
            <div class="postulation-buttons">
              <div class="student-profile-button">
                <Button
                  text="Ver perfil"
                  :color="3"
                  @option-selected="goToApplicationStudentProfile(pendingPostulation.estudiante_id.id)"
                ></Button>
              </div>
              <button type="button" class="accept-postulation-request"></button>
              <button
                type="button"
                class="reject-postulation-request"
                @click="handleDeletePostulation()"
              ></button>
            </div>
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
import Button from "@/components/common/Button.vue";
import { pendingPostulationsByInternshipIdStore } from "../../store/institution/PendingPostulationsByInternshipIdStore";
export default {
  name: "InstitutionRequestsTrayPage",
  components: {
    Button,
  },
  data() {
    return {
      pendingPostulationsByInternshipIdStore: pendingPostulationsByInternshipIdStore(),
      pendingPostulationsAreLoaded: false,
      pendingPostulations: [],
    };
  },
  methods: {
    async getPendingPostulationsByInternshipId(internshipID) {
      await this.pendingPostulationsByInternshipIdStore.loadPendingPostulationsByInternshipId(internshipID);
      this.pendingPostulations = this.pendingPostulationsByInternshipIdStore.pendingPostulations.result;
      this.pendingPostulationsAreLoaded = true;
      console.log(this.pendingPostulations);
    },
    isTheStudentGraduated(postulation) {
      if (postulation.estudiante_id.graduado) {
        return "✅";
      } else {
        return "❌";
      }
    },
    goToApplicationStudentProfile(student_id) {
      this.$router.push(
        `/institution/InternshipApplicationTray/StudentProfile/${student_id}`
      );
    },
    handleDeletePostulation() {
      const swalWithBootstrapButtons = this.$swal.mixin({
        customClass: {
          confirmButton: "delete-confirm-button",
          cancelButton: "delete-cancel-button",
        },
        // buttonsStyling: false,
        showClass: {
          popup: "animate__animated animate__fadeInDown",
        },
        hideClass: {
          popup: "animate__animated animate__fadeOutUp",
        },
      });
      swalWithBootstrapButtons
        .fire({
          title: "Está seguro?",
          text: "No será capaz de revertir esta acción.",
          icon: "warning",
          showCancelButton: true,
          confirmButtonText: "Si, eliminar!",
          cancelButtonText: "No, cancelar!",
          // reverseButtons: true,
        })
        .then(async (result) => {
          if (result.isConfirmed) {
            swalWithBootstrapButtons.fire(
              "¡Éxito!",
              "Postulación eliminada correctamente.",
              "success"
            );
            // const res = await delete(this.$route.params.id);
            // console.log(res);
            // swalWithBootstrapButtons.fire("¡Success!", res.message, "success");
          } else if (result.dismiss === this.$swal.DismissReason.cancel) {
            swalWithBootstrapButtons.fire(
              "Cancelado",
              "Eliminación de postulante cancelada exitosamente.",
              "error"
            );
          }
        });
    },
  },
  mounted() {
    this.getPendingPostulationsByInternshipId(this.$route.params.internshipId);
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
  width: 95%;
}

.request-table-head,
.request-table-cell {
  padding: 10px;
}

.student-profile-button {
  width: 40%;
}

tr:nth-child(even) {
  background-color: #e8e8e8;
}

tr:first-child {
  border-bottom: 2px solid black;
}

.postulation-buttons {
  display: flex;
  justify-content: space-between;
}

.accept-postulation-request {
  background-image: url("../../components//images/approved.png");
}

.reject-postulation-request {
  background-image: url("../../components//images/rejected.png");
}

.accept-postulation-request,
.reject-postulation-request {
  width: 18%;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  background-color: transparent;
  cursor: pointer;
  margin: 0;
  border: none;
}

.accept-postulation-request:hover,
.reject-postulation-request:hover {
  transform: scale(1.2);
}

.delete-confirm-button {
  background-color: greenyellow !important;
  color: white;
}

.delete-cancel-button {
  background-color: rgb(207, 101, 101);
  color: white;
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

  /* .accept-postulation-request {
    width: 100%;
  }

  .reject-postulation-request {
    width: 18%;
  } */
}
</style>

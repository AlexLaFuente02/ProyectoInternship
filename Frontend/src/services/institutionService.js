import axios from "axios";
import { institutionAPIRoute } from "../assets/apiConfig";

export const getInstitutionById = async (institution_id) => {
  const response = await axios.get(
    `${institutionAPIRoute}/institucion/${institution_id}`
  );
  return response.data;
};

export const getInstitutionIdByUserId = async (user_id) => {
  const response = await axios.get(
    `${institutionAPIRoute}/institucion/user/${user_id}`
  );
  return response.data;
};

export const getPostulationsByInternshipId = async (internship_id) => {
  const response = await axios.get(
    `${institutionAPIRoute}/postulaciones/convocatoria/${internship_id}`
  );
  return response.data;
};

export const getPostulationsByInstitutionId = async (institution_id) => {
  const response = await axios.get(
    `${institutionAPIRoute}/postulaciones/${institution_id}`
  );
  return response.data;
};

export const getAllInternshipsByInstitutionId = async (institution_id) => {
  const response = await axios.get(
    `${institutionAPIRoute}/convocatorias/institucion/${institution_id}`
  );
  return response.data;
};

export const getActiveInternshipsByInstitutionId = async (institution_id) => {
  const response = await axios.get(
    `${institutionAPIRoute}/convocatorias/activas/${institution_id}`
  );
  return response.data;
};

export const getPendingInternshipsByInstitutionId = async (institution_id) => {
  const response = await axios.get(
    `${institutionAPIRoute}/convocatorias/pendientes/${institution_id}`
  );
  return response.data;
};

export const getInactiveInternshipsByInstitutionId = async (institution_id) => {
  const response = await axios.get(
    `${institutionAPIRoute}/convocatorias/inactivas/${institution_id}`
  );
  return response.data;
};

export const getQuantityOfActiveNInactiveInternships = async (
  institution_id
) => {
  const response = await axios.get(
    `${institutionAPIRoute}/convocatorias/sumatorias/${institution_id}`
  );
  return response.data;
};

export const getTotalPostulationsByInstitutionId = async (institution_id) => {
  const response = await axios.get();
  return response.data;
};

export const getApprovedPostulationsByInstitutionId = async (
  institution_id
) => {
  const response = await axios.get(
    `${institutionAPIRoute}/institucion/${institution_id}/postulaciones/activas`
  );
  return response.data;
};

export const getPendingPostulationsByInstitutionId = async (institution_id) => {
  const response = await axios.get(
    `${institutionAPIRoute}/institucion/${institution_id}/postulaciones/pendientes`
  );
  return response.data;
};

export const getRejectedPostulationsByInstitutionId = async (
  institution_id
) => {
  const response = await axios.get(
    `${institutionAPIRoute}/institucion/${institution_id}/postulaciones/rechazadas`
  );
  return response.data;
};

export const getPendingPostulationsByInternshipId = async (internship_id) => {
  const response = await axios.get(
    `${institutionAPIRoute}/postulaciones/${internship_id}/pendientes`
  );
  return response.data;
};

export const createInternship = async (internshipData) => {
  const response = await axios.post(
    `${institutionAPIRoute}/convocatoria/`,
    internshipData
  );
  return response.data;
};

export const getStudentByIdInApplicationTray = async (student_id) => {
  const response = await axios.get(
    `${institutionAPIRoute}/perfil-estudiante/${student_id}`
  );
  return response.data;
};

export const acceptStudentPostulation = async (postulation_id) => {
  const response = await axios.put(
    `${institutionAPIRoute}/postulaciones/${postulation_id}/aprobar`
  );
  return response.data;
};

export const rejectStudentPostulation = async (postulation_id) => {
  const response = await axios.put(
    `${institutionAPIRoute}/postulaciones/${postulation_id}/rechazar`
  );
  return response.data;
};

export const createInstitution = async (formData) => {
  try {
    const response = await axios.post(
      `${institutionAPIRoute}/crear`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Hubo un error al crear la institución: ", error);
    throw error;
  }
};

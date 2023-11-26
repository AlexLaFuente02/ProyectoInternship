import axios from "axios";
import { institutionAPIRoute } from "../assets/apiConfig";

export const getAllInternshipsByInstitutionId = async (institution_id) => {
  const response = await axios.get(
    `${institutionAPIRoute}/convocatorias/institucion/${institution_id}`
  );
  return response.data;
};

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

export const createInternship = async (internshipData) => {
  const response = await axios.post(
    `${institutionAPIRoute}/convocatoria/`,
    internshipData
  );
  return response.data;
};

export const createInstitution = async (formData) => {
  try {
    const response = await axios.post(
      `${institutionAPIRoute}/institucion/`,
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

import axios from "axios";
import { rutaApi } from "../assets/apiConfig";
import { rutaInstitucion } from "../assets/apiConfig";

export const getAllInternships = async () => {
  const response = await axios.get(`${rutaApi}/convocatoria/`);
  return response.data;
};

export const getInstitutionById = async (institution_id) => {
  const response = await axios.get(`${rutaApi}/institucion/${institution_id}`);
  return response.data;
};

export const getAllInstitutions = async () => {
  const response = await axios.get(`${rutaApi}/institucion/`);
  return response.data;
};

export const createInternship = async (internshipData) => {
  const response = await axios.post(`${rutaApi}/convocatoria/`, internshipData);
  return response.data;
};

export const createInstitution = async (formData) => {
  try {
    const response = await axios.post(`${rutaInstitucion}/crear`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data;
  } catch (error) {
    console.error("Hubo un error al crear la institución: ", error);
    throw error;
  }
};

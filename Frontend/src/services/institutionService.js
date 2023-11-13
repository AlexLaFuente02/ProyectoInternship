import axios from "axios";
import { rutaApi } from "../assets/apiConfig";

export const getAllInternships = async () => {
  const response = await axios.get(`${rutaApi}/convocatoria/`);
  return response.data;
};

export const getInstitutionById = async (institution_id) => {
  const response = await axios.get(`${rutaApi}/institucion/${institution_id}`);
  return response.data;
};

export const createInternship = async (internshipData) => {
  const response = await axios.post(`${rutaApi}/convocatoria/`, internshipData);
  return response.data;
};

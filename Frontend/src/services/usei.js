import axios from 'axios';
import { rutaApi } from '../assets/apiConfig';
import { rutaUsei } from '../assets/apiConfig';
export const loadUseiInstitution = async () => {
    /*Cambiar por la ruta de la api que corresponda*/
    //Se esta usando la ruta de la api de prueba
    const response = await axios.get(`${rutaUsei}/instituciones/activas`);
    return response.data;
}

export const loadUseiInstitutionPendent = async () => {
    const response = await axios.get(`${rutaUsei}/instituciones/pendientes`);
    return response.data;
}
export const loadUseiInstitutionRechazado = async () => {
  const response = await axios.get(`${rutaUsei}/instituciones/rechazadas`);
  return response.data;
}

export const activateInstitution = async (institutionId) => {
    try {
      const response = await axios.put(`${rutaUsei}/institucion/activate/${institutionId}`);
      return response.data;
    } catch (error) {
      // Manejar errores aquí si es necesario
      throw error;
    }
  };

export const loadUseiInternship = async () => {
    /*Cambiar por la ruta de la api que corresponda*/
    //Se esta usando la ruta de la api de prueba
    const response = await axios.get(`${rutaUsei}/convocatorias/activas`);
    return response.data;
}

export const loadPendentinternship = async () => {
  const response = await axios.get(`${rutaUsei}/convocatorias/pendientes`);
  return response.data;
}

export const loadRechazadointernship = async () => {
  const response = await axios.get(`${rutaUsei}/convocatorias/inactivas`);
  return response.data;
}

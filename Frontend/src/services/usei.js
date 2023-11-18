import axios from 'axios';
import { rutaApi } from '../assets/apiConfig';
import { rutaUsei } from '../assets/apiConfig';
export const loadUseiInstitution = async () => {
    /*Cambiar por la ruta de la api que corresponda*/
    //Se esta usando la ruta de la api de prueba
    const response = await axios.get(`${rutaApi}/institucion`);
    return response.data;
}

export const loadUseiInternship = async () => {
    /*Cambiar por la ruta de la api que corresponda*/
    //Se esta usando la ruta de la api de prueba
    const response = await axios.get(`${rutaUsei}/convocatoria`);
    return response.data;
}
import axios from 'axios';
import { rutaApi } from '../assets/apiConfig';
export const loadInternshipsByIdStudent = async () => {
    /*Cambiar por la ruta de la api que corresponda*/
    //Se esta usando la ruta de la api de prueba
    const response = await axios.get(`${rutaApi}/convocatoria`);
    return response.data;
}
export const loadRequestsByIdStudent = async () => {
    /*Cambiar por la ruta de la api que corresponda*/
    //Se esta usando la ruta de la api de prueba
    const response = await axios.get(`${rutaApi}/estadoPostulacion`);
    return response.data;
}
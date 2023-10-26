import axios from 'axios';
import { rutaApi } from '../assets/apiConfig';
//Primer paso, que se comunica con el backend
export const loadCampuses = async () => {
    const response = await axios.get(`${rutaApi}/sede`);
    return response.data;
}

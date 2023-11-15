import axios from 'axios';
import { rutaApi } from '../assets/apiConfig';

export const loadInternshipsByIdStudent = async () => {
    try {
        const response = await axios.get(`${rutaApi}/convocatoria`, {
            withCredentials: true // Esto asegurará que se envíen las cookies de sesión
        });
        return response.data;
    } catch (error) {
        // Manejar el error aquí, por ejemplo:
        console.error("Hubo un error al cargar las convocatorias: ", error);
        throw error; // O reenviar el error para manejarlo en otro lugar
    }
}

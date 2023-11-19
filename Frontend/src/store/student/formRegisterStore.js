import { defineStore } from "pinia";
import { postStudent } from "@/services/student";
export const useFormRegisterStore = defineStore({
    id: "formRegister",
    state: () => ({
        student: {
            usuario_id: 0,
            nombres: "",
            apellidos: "",
            carnetidentidad: "",
            correoelectronico: "",
            celularcontacto: "",
            graduado: false,
            carrera: {
                id:0,
            },
            semestre: {
                id:0,
            },
            sede:{
                id:0,
            },
            aniograduacion: 0,
            linkcurriculumvitae: "",
        },
        hasData: false,
        codeVerification: "",
        career: "",
        semester: "",
        campus: "",
    }),
    actions: {
        async postStudent() {
            try {
                const response = await postStudent(this.student);
                // Puedes manejar la respuesta del servidor aquí según tus necesidades
                console.log("Estudiante creado exitosamente:", response);
            } catch (error) {
                // Manejar el error aquí
                console.error("Hubo un error al crear el estudiante: ", error);
                // Puedes lanzar el error nuevamente si es necesario
                throw error;
            }
        },
        
    }

});
import { defineStore } from "pinia";
import { postStudent } from "@/services/student";
import { postCode } from "@/services/student";
import { verifyCode } from "@/services/student";
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
                /*Obtener el token de las cookies*/
                const token = $cookies.get("token");
                const response = await postStudent(this.student, token);
                if (response == null) {
                    return false;
                }
                return true;
                // Puedes manejar la respuesta del servidor aquí según tus necesidades
                console.log("Estudiante creado exitosamente:", response);
            } catch (error) {
                // Manejar el error aquí
                console.error("Hubo un error al crear el estudiante: ", error);
                // Puedes lanzar el error nuevamente si es necesario
                throw error;
            }
        },
        //Funcion para solicitar el codigo de verificacion
        async postCode() {
            
            try {
                const body={
                    email: this.student.correoelectronico,
                }
                const response = await postCode(body);
                if (response == null) {
                    return false;
                }
                // Puedes manejar la respuesta del servidor aquí según tus necesidades
                console.log("Codigo de verificacion enviado exitosamente:", response);
                
                return true;
            } catch (error) {
                // Manejar el error aquí
                console.error("Hubo un error al solicitar el codigo de verificacion: ", error);
                // Puedes lanzar el error nuevamente si es necesario
                throw error;
            }
        },
        //Funcion para verificar el codigo de verificacion
        async verifyCode() {
            try {
                const body={
                    email: this.student.correoelectronico,
                    code: this.codeVerification,
                }
                const response = await verifyCode(body);
                if (response == null) {
                    return false;
                }
                /*Guardar el token en las cookies*/
                const token = response.result;
                $cookies.set("token", token, "1h");
                // Puedes manejar la respuesta del servidor aquí según tus necesidades
                console.log("Codigo de verificacion enviado exitosamente:", response);
                return true;
            } catch (error) {
                // Manejar el error aquí
                console.error("Hubo un error al verificar el codigo de verificacion: ", error);
                // Puedes lanzar el error nuevamente si es necesario
                
                throw error;
            }
        },
        
    }

});
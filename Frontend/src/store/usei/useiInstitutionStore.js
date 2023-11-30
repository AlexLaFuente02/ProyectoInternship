import { defineStore } from "pinia";
import {loadUseiInstitution, loadUseiInstitutionPendent, activateInstitution,loadUseiInstitutionRechazado,rechazarInstitution,pendienteInstitution} from "@/services/usei.js";
export const UseUseiInstitutionStore = defineStore({
    id: "useiInstitution",
    state: () => ({
       InstitutionList:[],
       HashData:false,

    }),
    actions: {
        async LoadInstitutions(){
            const institucion=await loadUseiInstitution();
            this.InstitutionList= institucion;
        },   
        async LoadPendentInstitutions(){
            const institucion=await loadUseiInstitutionPendent();
            this.InstitutionList= institucion;
        },
        async LoadRechazadoInstitutions(){
            const institucion=await loadUseiInstitutionRechazado();
            this.InstitutionList= institucion;
        },
        async ActivateInstitution(institutionId){
            const result = await activateInstitution(institutionId);
            // Aquí puedes manejar la respuesta, por ejemplo, actualizando la lista de instituciones
            // o emitiendo un mensaje de éxito o error.
            return result;
        },
        async RechazarInstitution(institutionId){
            const result = await rechazarInstitution(institutionId);
            // Aquí puedes manejar la respuesta, por ejemplo, actualizando la lista de instituciones
            // o emitiendo un mensaje de éxito o error.
            return result;
        },
        async PendienteInstitution(institutionId){
            const result = await pendienteInstitution(institutionId);
            // Aquí puedes manejar la respuesta, por ejemplo, actualizando la lista de instituciones
            // o emitiendo un mensaje de éxito o error.
            return result;
        },
    },

});
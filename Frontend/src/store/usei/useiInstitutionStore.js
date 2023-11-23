import { defineStore } from "pinia";
import {loadUseiInstitution, loadUseiInstitutionPendent} from "@/services/usei.js";
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
        }
    },

});
import { defineStore } from "pinia";
import {loadUseiInternship, loadPendentinternship} from "@/services/usei.js";
export const UseUseiInternshipStore = defineStore({
    id: "useiInternship",
    state: () => ({
        InternshipList:[],
       HashData:false,

    }),
    actions: {
        async LoadInternship(){
            const internship=await loadUseiInternship();
            this.InternshipList= internship;
        }, 
        async LoadPendenInternship(){
            const internship=await loadPendentinternship();
            this.InternshipList= internship;
        },

    },

});
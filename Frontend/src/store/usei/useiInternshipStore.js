import { defineStore } from "pinia";
import {loadUseiInternship, loadPendentinternship,loadRechazadointernship} from "@/services/usei.js";
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
        async LoadRechazadoInternship(){
            const internship=await loadRechazadointernship();
            this.InternshipList= internship;
        },

    },

});
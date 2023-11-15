import { defineStore } from "pinia";
import {loadUseiInternship} from "@/services/usei.js";
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
        }   
    },

});
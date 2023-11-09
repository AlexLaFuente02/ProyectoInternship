import { defineStore } from "pinia";
import { loadInternshipsByIdStudent  } from "../../services/student";
export const useInternshipsByIDStore = defineStore({
    id: "internshipsByID",
    state: () => ({
        internships: [],
        isDataLoaded: false,
    }),
    actions: {
        async loadInternshipsByIdStudent() {
            this.internships = await loadInternshipsByIdStudent();
            this.isDataLoaded = true;
        },
    },
});
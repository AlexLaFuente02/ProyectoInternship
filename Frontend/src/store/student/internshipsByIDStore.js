import { defineStore } from "pinia";
import { loadInternshipsByIdStudent  } from "../../services/student";
import {popularInternships} from "../../services/student";

export const useInternshipsByIDStore = defineStore({
    id: "internshipsByID",
    state: () => ({
        internships: [],
        isDataLoaded: false,
        popularInternships: [],
        isPopularDataLoaded: false,
    }),
    actions: {
        async loadInternshipsByIdStudent() {
            this.internships = await loadInternshipsByIdStudent();
            console.log(this.internships);
            this.isDataLoaded = true;
        },
        async loadPopularInternships() {
            this.popularInternships = await popularInternships();
            console.log(this.popularInternships);
            this.isPopularDataLoaded = true;
        },
    },
});
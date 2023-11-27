import { defineStore } from "pinia";
//import { loadInternshipsByIdStudent  } from "../../services/student";
import {popularInternships} from "../../services/student";
import { loadAllInternships } from "../../services/student";
import { loadActiveInternships } from "../../services/student";
export const useInternshipsByIDStore = defineStore({
    id: "internshipsByID",
    state: () => ({
        internships: [],
        isDataLoaded: false,
        popularInternships: [],
        isPopularDataLoaded: false,
        activeInternships: [],
        isActiveDataLoaded: false,
    }),
    actions: {
        async loadAllInternships() {
            this.internships = await loadAllInternships();
            this.isDataLoaded = true;
        },
        async loadPopularInternships() {
            this.popularInternships = await popularInternships();
            this.isPopularDataLoaded = true;
        },
        async loadActiveInternships() {
            this.activeInternships = await loadActiveInternships();
            this.isActiveDataLoaded = true;
        },
    },
});
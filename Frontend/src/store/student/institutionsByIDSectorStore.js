import { defineStore } from "pinia";
import { loadInstitutions} from "../../services/student";
import {loadInstitutionsByIdSector} from "../../services/student";
export const useInstitutionsByIDSectorStore = defineStore({
    id: "institutionsByIDSector",
    state: () => ({
        institutions: [],
        isDataLoaded: false,
    }),
    actions: {
        async loadInstitutions() {
            this.institutions = await loadInstitutions();
            this.isDataLoaded = true;
        },
        async loadInstitutionsByIdSector(idSector) {
            this.institutions = await loadInstitutionsByIdSector(idSector);
            this.isDataLoaded = true;
        },

    },
});
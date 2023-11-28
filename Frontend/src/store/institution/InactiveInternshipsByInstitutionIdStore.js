import { defineStore } from "pinia";
import { getInactiveInternshipsByInstitutionId } from "../../services/institutionService";

export const inactiveInternshipsByInstitutionIdStore = defineStore({
  id: "InactiveInternshipsByInstitutionId",
  state: () => ({
    internships: [],
    hasData: false,
  }),
  actions: {
    async loadInactiveInternshipsByInstitutionId(institution_id) {
      this.internships = await getInactiveInternshipsByInstitutionId(institution_id);
      this.hasData = true;
    },
  },
});

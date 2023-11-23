import { defineStore } from "pinia";
import { getAllInstitutions } from "../../services/institutionService";

export const institutionsStore = defineStore({
  id: "institutions",
  state: () => ({
    institutions: [],
    hasData: false,
  }),
  actions: {
    setInstitutions(institutions) {
      this.institutions = institutions;
      this.hasData = true;
    },
    async loadInstitutions() {
      if (!this.hasData) {
        const institutions = await getAllInstitutions();
        this.setInstitutions(institutions);
      }
    },
  },
});

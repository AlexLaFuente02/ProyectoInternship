import { defineStore } from "pinia";
import { getAllInternships } from "@/services/institutionService";

export const internshipsStore = defineStore({
  id: "internships",
  state: () => ({
    internships: [],
    hasData: false,
  }),
  actions: {
    setInternships(internships) {
      this.internships = internships;
      this.hasData = true;
    },
    async loadInternships() {
      if (!this.hasData) {
        const internships = await getAllInternships();
        this.setInternships(internships);
      }
    },
  },
});

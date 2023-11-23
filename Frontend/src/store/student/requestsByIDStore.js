import {loadRequestsByIdStudent} from '../../services/student';
import { defineStore } from "pinia";
export const useRequestsByIDStore = defineStore({
    id: "requestsByID",
    state: () => ({
        requests: [],
        isDataLoaded: false,
    }),
    actions: {
        async loadRequestsByIdStudent(idStudent) {
            this.requests = await loadRequestsByIdStudent(idStudent);
            this.isDataLoaded = true;
        },
    },
});
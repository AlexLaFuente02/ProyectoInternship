import {loadRequestsByIdStudent} from '../../services/student';
import { defineStore } from "pinia";
export const useRequestsByIDStore = defineStore({
    id: "requestsByID",
    state: () => ({
        requests: [],
        isDataLoaded: false,
    }),
    actions: {
        async loadRequestsByIdStudent() {
            this.requests = await loadRequestsByIdStudent();
            this.isDataLoaded = true;
        },
    },
});
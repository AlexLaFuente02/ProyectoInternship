import { defineStore } from "pinia";
import { getUserByIdUsuario } from "@/services/common";
export const useUserByIdStore = defineStore({
    id: "userById",
    state: () => ({
        user: [],
        isDataLoaded: false,
    }),
    actions: {
        async getUserByIdUsuario(idUsuario) {
            this.user = await getUserByIdUsuario(idUsuario);
            this.isDataLoaded = true;
        },
    },
});
import { defineStore } from "pinia";
export const useMobileMenuStore = defineStore({
    id: "mobileMenu",
    state: () => ({
        mobileMenu: false,
    }),
    actions: {
        toggleMobileMenu() {
            this.mobileMenu = !this.mobileMenu;
        },
        closeMobileMenu() {
            this.mobileMenu = false;
        },
    },
});
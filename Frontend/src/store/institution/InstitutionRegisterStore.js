import { defineStore } from "pinia";

export const InstitutionRegisterStore = defineStore({
  id: "InstitutionRegister",
  state: () => ({
    nombreinstitucion: "",
    reseniainstitucion: "",
    logoinstitucion: "",
    nombrecontacto: "",
    correocontacto: "",
    celularcontacto: "",
    usuario: {
      id: parseInt(""),
    },
    sectorpertenencia: {
      id: parseInt(""),
    },
  }),
  actions: {
    setNombreInstitucion(nombreinstitucion) {
      this.nombreinstitucion = nombreinstitucion;
    },
    setReseniaInstitutcion(reseniainstitucion) {
      this.reseniainstitucion = reseniainstitucion;
    },
    setLogoInstitucion(logoinstitucion) {
      this.logoinstitucion = logoinstitucion;
    },
    setNombreContacto(nombrecontacto) {
      this.nombrecontacto = nombrecontacto;
    },
    setCorreoContacto(correocontacto) {
      this.correocontacto = correocontacto;
    },
    setCelularContacto(celularcontacto) {
      this.celularcontacto = celularcontacto;
    },
  },
});

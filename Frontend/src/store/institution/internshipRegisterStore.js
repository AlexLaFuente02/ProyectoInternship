import { defineStore } from "pinia";

export const InternshipRegisterStore = defineStore({
  id: "InternshipRegister",
  state: () => ({
    areapasantia: "",
    descripcionfunciones: "",
    requisitoscompetencias: "",
    horario_inicio: "",
    horario_fin: "",
    fechasolicitud: "",
    fechaseleccionpasante: "",
    estadoconvocatoria_id: "",
    institucion_id: "",
    tiempoacumplir_id: "",
  }),
  actions: {
    setAreaPasantia(areapasantia) {
      this.areapasantia = areapasantia;
    },
    setDescripcionFunciones(descripcionfunciones) {
      this.descripcionfunciones = descripcionfunciones;
    },
    setRequisitosCompetencias(requisitoscompetencias) {
      this.requisitoscompetencias = requisitoscompetencias;
    },
    setHorarioInicio(horario_inicio) {
      this.horario_inicio = horario_inicio;
    },
    setHorarioFin(horario_fin) {
      this.horario_fin = horario_fin;
    },
    setFechaSolicitud(fechasolicitud) {
      this.fechasolicitud = fechasolicitud;
    },
    setFechaSeleccionPasante(fechaseleccionpasante) {
      this.fechaseleccionpasante = fechaseleccionpasante;
    },
    setEstadoConvacatoria(estadoconvocatoria_id) {
      this.estadoconvocatoria_id = estadoconvocatoria_id;
    },
    setInstitucion(institucion_id) {
      this.institucion_id = institucion_id;
    },
    setTiempoACumplir(tiempoacumplir_id) {
      this.tiempoacumplir_id = tiempoacumplir_id;
    },
  },
});

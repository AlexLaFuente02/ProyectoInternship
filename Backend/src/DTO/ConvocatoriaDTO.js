class ConvocatoriaDTO {
    constructor(id, areapasantia, descripcionfunciones, requisitoscompetencias, horario_inicio, horario_fin, fechasolicitud, fechaseleccionpasante, estadoconvocatoria, institucion, tiempoacumplir) {
        this.id = id;
        this.areapasantia = areapasantia;
        this.descripcionfunciones = descripcionfunciones;
        this.requisitoscompetencias = requisitoscompetencias;
        this.horario_inicio = horario_inicio;
        this.horario_fin = horario_fin;
        this.fechasolicitud = fechasolicitud;
        this.fechaseleccionpasante = fechaseleccionpasante;
        this.estadoconvocatoria = estadoconvocatoria;
        this.institucion = institucion;
        this.tiempoacumplir = tiempoacumplir;
    }
}

module.exports = ConvocatoriaDTO;

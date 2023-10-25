class HistoricoConvocatoriasDTO {
    constructor(id_h, id_c, areapasantia, descripcionfunciones, requisitoscompetencias, horario_inicio, horario_fin, fechasolicitud, fechaseleccionpasante, accion, fecha_accion, estadoconvocatoria_id, institucion_id, tiempoacumplir_id) {
        this.id_h = id_h;
        this.id_c = id_c;
        this.areapasantia = areapasantia;
        this.descripcionfunciones = descripcionfunciones;
        this.requisitoscompetencias = requisitoscompetencias;
        this.horario_inicio = horario_inicio;
        this.horario_fin = horario_fin;
        this.fechasolicitud = fechasolicitud;
        this.fechaseleccionpasante = fechaseleccionpasante;
        this.accion = accion;
        this.fecha_accion = fecha_accion;
        this.estadoconvocatoria_id = estadoconvocatoria_id; 
        this.institucion_id = institucion_id; 
        this.tiempoacumplir_id = tiempoacumplir_id; 
    }
}

module.exports = HistoricoConvocatoriasDTO;






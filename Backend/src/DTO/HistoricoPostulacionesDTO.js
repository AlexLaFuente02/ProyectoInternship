class HistoricoPostulacionesDTO {
    constructor(id_h, id_p, fechapostulacion, estadopostulacion, estudiante, convocatoria) {
        this.id_h = id_h;
        this.id_p = id_p;
        this.fechapostulacion = fechapostulacion;
        this.estadopostulacion = estadopostulacion;
        this.estudiante = estudiante;
        this.convocatoria = convocatoria;
    }
}

module.exports = HistoricoPostulacionesDTO;

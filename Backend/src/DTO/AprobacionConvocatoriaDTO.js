class AprobacionConvocatoriaDTO {
    constructor(id, fechaaprobacion, estado, adminusei, convocatoria) {
        this.id = id;
        this.fechaaprobacion = fechaaprobacion;
        this.estado = estado;
        this.adminusei = adminusei;
        this.convocatoria = convocatoria;
    }
}

module.exports = AprobacionConvocatoriaDTO;

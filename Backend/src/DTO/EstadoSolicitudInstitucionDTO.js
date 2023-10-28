class EstadoSolicitudInstitucionDTO {
    constructor(id, fechaaprobacion, estadosolicitud, adminusei, institucion) {
        this.id = id;
        this.fechaaprobacion = fechaaprobacion;
        this.estadosolicitud = estadosolicitud;
        this.adminusei = adminusei;
        this.institucion = institucion;
    }
}

module.exports = EstadoSolicitudInstitucionDTO;

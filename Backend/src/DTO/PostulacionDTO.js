class PostulacionDTO {
    constructor(id, fechapostulacion, estadopostulacion_id, estudiante_id, convocatoria_id) {
      this.id = id;
      this.fechapostulacion = fechapostulacion;
      this.estadopostulacion_id = estadopostulacion_id;
      this.estudiante_id = estudiante_id;
      this.convocatoria_id = convocatoria_id;
    }
  }
  
  module.exports = PostulacionDTO;
  
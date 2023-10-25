class EstudianteDTO {
    constructor(id, usuario_id, nombres, apellidos, carnetidentidad, correoelectronico, celularcontacto, graduado, carrera_id, semestre_id, sede_id, aniograduacion, linkcurriculumvitae) {
        this.id = id;
        this.usuario_id = usuario_id;
        this.nombres = nombres;
        this.apellidos = apellidos;
        this.carnetidentidad = carnetidentidad;
        this.correoelectronico = correoelectronico;
        this.celularcontacto = celularcontacto;
        this.graduado = graduado;
        this.carrera_id = carrera_id;
        this.semestre_id = semestre_id;
        this.sede_id = sede_id;
        this.aniograduacion = aniograduacion;
        this.linkcurriculumvitae = linkcurriculumvitae;
    }
}

module.exports = EstudianteDTO;

const PostulacionDTO = require('../DTO/PostulacionDTO');
const ResponseDTO = require('../DTO/ResponseDTO');
const PostulacionENT = require('../ENT/PostulacionENT');
const EstadoPostulacionENT = require('../ENT/estadoPostulacionENT');
const EstudianteENT = require('../ENT/EstudianteENT');
const ConvocatoriaENT = require('../ENT/ConvocatoriaENT');

const getAllPostulaciones = async () => {
    console.log('Obteniendo todas las postulaciones...');
    try {
        const postulaciones = await PostulacionENT.findAll({
            include: [
                { model: EstadoPostulacionENT, as: 'estadopostulacion' },
                { model: EstudianteENT, as: 'estudiante' },
                { model: ConvocatoriaENT, as: 'convocatoria' },
            ],
        });
        const postulacionesDTO = postulaciones.map((postulacion) => {
            const estadoPostulacionDTO = {
                id: postulacion.estadopostulacion.id,
                nombreestadopostulacion: postulacion.estadopostulacion.nombreestadopostulacion,
            };
            const estudianteDTO = {
                id: postulacion.estudiante.id,
                usuario_id: postulacion.estudiante.usuario_id,
                nombres: postulacion.estudiante.nombres,
                apellidos: postulacion.estudiante.apellidos,
                carnetidentidad: postulacion.estudiante.carnetidentidad,
                correoelectronico: postulacion.estudiante.correoelectronico,
                celularcontacto: postulacion.estudiante.celularcontacto,
                graduado: postulacion.estudiante.graduado,
                carrera_id: postulacion.estudiante.carrera_id,
                semestre_id: postulacion.estudiante.semestre_id,
                sede_id: postulacion.estudiante.sede_id,
                aniograduacion: postulacion.estudiante.aniograduacion,
                linkcurriculumvitae: postulacion.estudiante.linkcurriculumvitae,
            };
            const convocatoriaDTO = {
                id: postulacion.convocatoria.id,
                areapasantia: postulacion.convocatoria.areapasantia,
                descripcionfunciones: postulacion.convocatoria.descripcionfunciones,
                requisitoscompetencias: postulacion.convocatoria.requisitoscompetencias,
                horario_inicio: postulacion.convocatoria.horario_inicio,
                horario_fin: postulacion.convocatoria.horario_fin,
                fechasolicitud: postulacion.convocatoria.fechasolicitud,
                fechaseleccionpasante: postulacion.convocatoria.fechaseleccionpasante,
                estadoconvocatoria: postulacion.convocatoria.estadoconvocatoria,
                institucion: postulacion.convocatoria.institucion,
                tiempoacumplir: postulacion.convocatoria.tiempoacumplir,
            };

            return new PostulacionDTO(
                postulacion.id,
                postulacion.fechapostulacion,
                estadoPostulacionDTO,
                estudianteDTO,
                convocatoriaDTO
            );
        });
        console.log('Postulaciones obtenidas correctamente.');
        return new ResponseDTO('P-0000', postulacionesDTO, 'Postulaciones obtenidas correctamente');
    } catch (error) {
        console.error('Error al obtener todas las postulaciones:', error);
        return new ResponseDTO('P-1001', null, `Error al obtener todas las postulaciones: ${error}`);
    }
};

const getPostulacionById = async (id) => {
    console.log(`Obteniendo la postulación con ID: ${id}...`);
    try {
        const postulacion = await PostulacionENT.findByPk(id, {
            include: [
                { model: EstadoPostulacionENT, as: 'estadopostulacion' },
                { model: EstudianteENT, as: 'estudiante' },
                { model: ConvocatoriaENT, as: 'convocatoria' },
            ],
        });
        if (!postulacion) {
            console.log(`Postulación con ID: ${id} no encontrada.`);
            return new ResponseDTO('P-1002', null, 'Postulación no encontrada');
        }
        const estadoPostulacionDTO = {
            id: postulacion.estadopostulacion.id,
            nombreestadopostulacion: postulacion.estadopostulacion.nombreestadopostulacion,
        };
        const estudianteDTO = {
            id: postulacion.estudiante.id,
            usuario_id: postulacion.estudiante.usuario_id,
            nombres: postulacion.estudiante.nombres,
            apellidos: postulacion.estudiante.apellidos,
            carnetidentidad: postulacion.estudiante.carnetidentidad,
            correoelectronico: postulacion.estudiante.correoelectronico,
            celularcontacto: postulacion.estudiante.celularcontacto,
            graduado: postulacion.estudiante.graduado,
            carrera_id: postulacion.estudiante.carrera_id,
            semestre_id: postulacion.estudiante.semestre_id,
            sede_id: postulacion.estudiante.sede_id,
            aniograduacion: postulacion.estudiante.aniograduacion,
            linkcurriculumvitae: postulacion.estudiante.linkcurriculumvitae,
        };
        const convocatoriaDTO = {
            id: postulacion.convocatoria.id,
            areapasantia: postulacion.convocatoria.areapasantia,
            descripcionfunciones: postulacion.convocatoria.descripcionfunciones,
            requisitoscompetencias: postulacion.convocatoria.requisitoscompetencias,
            horario_inicio: postulacion.convocatoria.horario_inicio,
            horario_fin: postulacion.convocatoria.horario_fin,
            fechasolicitud: postulacion.convocatoria.fechasolicitud,
            fechaseleccionpasante: postulacion.convocatoria.fechaseleccionpasante,
            estadoconvocatoria: postulacion.convocatoria.estadoconvocatoria,
            institucion: postulacion.convocatoria.institucion,
            tiempoacumplir: postulacion.convocatoria.tiempoacumplir,
        };

        return new ResponseDTO('P-0000', new PostulacionDTO(
            postulacion.id,
            postulacion.fechapostulacion,
            estadoPostulacionDTO,
            estudianteDTO,
            convocatoriaDTO
        ), 'Postulación obtenida correctamente');
    } catch (error) {
        console.error(`Error al obtener la postulación con ID: ${id}.`, error);
        return new ResponseDTO('P-1002', null, `Error al obtener la postulación: ${error}`);
    }
};

const createPostulacion = async (postulacionData) => {
    console.log('Creando una nueva postulación...');
    try {
        const nuevaPostulacion = await PostulacionENT.create(postulacionData);
        const estadoPostulacionDTO = {
            id: postulacionData.estadopostulacion.id,
            nombreestadopostulacion: nuevaPostulacion.estadopostulacion.nombreestadopostulacion,
        };
        const estudianteDTO = {
            id: postulacionData.estudiante.id,
            usuario_id: postulacionData.estudiante.usuario_id,
            nombres: postulacionData.estudiante.nombres,
            apellidos: postulacionData.estudiante.apellidos,
            carnetidentidad: postulacionData.estudiante.carnetidentidad,
            correoelectronico: postulacionData.estudiante.correoelectronico,
            celularcontacto: postulacionData.estudiante.celularcontacto,
            graduado: postulacionData.estudiante.graduado,
            carrera_id: postulacionData.estudiante.carrera_id,
            semestre_id: postulacionData.estudiante.semestre_id,
            sede_id: postulacionData.estudiante.sede_id,
            aniograduacion: postulacionData.estudiante.aniograduacion,
            linkcurriculumvitae: postulacionData.estudiante.linkcurriculumvitae,
        };
        const convocatoriaDTO = {
            id: postulacionData.convocatoria.id,
            areapasantia: postulacionData.convocatoria.areapasantia,
            descripcionfunciones: postulacionData.convocatoria.descripcionfunciones,
            requisitoscompetencias: postulacionData.convocatoria.requisitoscompetencias,
            horario_inicio: postulacionData.convocatoria.horario_inicio,
            horario_fin: postulacionData.convocatoria.horario_fin,
            fechasolicitud: postulacionData.convocatoria.fechasolicitud,
            fechaseleccionpasante: postulacionData.convocatoria.fechaseleccionpasante,
            estadoconvocatoria: postulacionData.convocatoria.estadoconvocatoria,
            institucion: postulacionData.convocatoria.institucion,
            tiempoacumplir: postulacionData.convocatoria.tiempoacumplir,
        };

        console.log('Postulación creada correctamente.');
        return new ResponseDTO('P-0000', new PostulacionDTO(
            postulacionData.id,
            postulacionData.fechapostulacion,
            estadoPostulacionDTO,
            estudianteDTO,
            convocatoriaDTO
        ), 'Postulación creada correctamente');
    } catch (error) {
        console.error('Error al crear la postulación:', error);
        return new ResponseDTO('P-1003', null, `Error al crear la postulación: ${error}`);
    }
};

const updatePostulacion = async (id, postulacionData) => {
    console.log(`Actualizando la postulación con ID: ${id}...`);
    try {
        const postulacion = await PostulacionENT.findByPk(id);
        if (!postulacion) {
            console.log(`Postulación con ID: ${id} no encontrada.`);
            return new ResponseDTO('P-1004', null, 'Postulación no encontrada');
        }
        await postulacion.update(postulacionData);
        console.log('Postulación actualizada correctamente.');
        return new ResponseDTO('P-0000', null, 'Postulación actualizada correctamente');
    } catch (error) {
        console.error(`Error al actualizar la postulación con ID: ${id}.`, error);
        return new ResponseDTO('P-1004', null, `Error al actualizar la postulación: ${error}`);
    }
};

const deletePostulacion = async (id) => {
    console.log(`Eliminando la postulación con ID: ${id}...`);
    try {
        const postulacion = await PostulacionENT.findByPk(id);
        if (!postulacion) {
            console.log(`Postulación con ID: ${id} no encontrada.`);
            return new ResponseDTO('P-1005', null, 'Postulación no encontrada');
        }
        await postulacion.destroy();
        console.log('Postulación eliminada correctamente.');
        return new ResponseDTO('P-0000', null, 'Postulación eliminada correctamente');
    } catch (error) {
        console.error(`Error al eliminar la postulación con ID: ${id}.`, error);
        return new ResponseDTO('P-1005', null, `Error al eliminar la postulación: ${error}`);
    }
};

module.exports = {
    getAllPostulaciones,
    getPostulacionById,
    createPostulacion,
    updatePostulacion,
    deletePostulacion,
};

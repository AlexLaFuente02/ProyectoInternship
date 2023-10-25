const EstudianteDTO = require('../DTO/EstudianteDTO');
const CarreraDTO = require('../DTO/CarreraDTO');
const SedeDTO = require('../DTO/SedeDTO');
const SemestreDTO = require('../DTO/SemestreDTO');
const EstudianteENT = require("../ENT/EstudianteENT");
const ResponseDTO = require("../DTO/ResponseDTO");
const Carrera = require('../ENT/carreraENT');
const Sede = require('../ENT/SedeENT');
const Semestre = require('../ENT/semestreENT');

const getAllStudents = async () => {
    console.log('Obteniendo todos los estudiantes...');
    try {
        const estudiantes = await EstudianteENT.findAll({
            include: [
                { model: Carrera, as: 'carrera' },
                { model: Semestre, as: 'semestre' },
                { model: Sede, as: 'sede' }
            ]
        });
        const estudiantesDTO = estudiantes.map(estudiante => {
            const carreraDTO = new CarreraDTO(estudiante.carrera.id, estudiante.carrera.nombrecarrera);
            const semestreDTO = new SemestreDTO(estudiante.semestre.id, estudiante.semestre.codigosemestre);
            const sedeDTO = new SedeDTO(estudiante.sede.id, estudiante.sede.nombresede);

            return new EstudianteDTO(
                estudiante.id,
                estudiante.usuario_id,
                estudiante.nombres,
                estudiante.apellidos,
                estudiante.carnetidentidad,
                estudiante.correoelectronico,
                estudiante.celularcontacto,
                estudiante.graduado,
                carreraDTO,
                semestreDTO,
                sedeDTO,
                estudiante.aniograduacion,
                estudiante.linkcurriculumvitae
            );
        });
        console.log('Estudiantes obtenidos correctamente.');
        return new ResponseDTO('U-0000', estudiantesDTO, 'Estudiantes obtenidos correctamente');
    } catch (error) {
        console.error('Error al obtener todos los estudiantes:', error);
        return new ResponseDTO('U-1001', null, `Error al obtener todos los estudiantes: ${error}`);
    }
};

const getStudentById = async (id) => {
    console.log(`Obteniendo el estudiante con ID: ${id}...`);
    try {
        const estudiante = await EstudianteENT.findByPk(id, {
            include: [
                { model: Carrera, as: 'carrera' },
                { model: Semestre, as: 'semestre' },
                { model: Sede, as: 'sede' }
            ]
        });
        if (!estudiante) {
            console.log(`Estudiante con ID: ${id} no encontrado.`);
            return new ResponseDTO('U-1002', null, 'Estudiante no encontrado');
        }
        const carreraDTO = new CarreraDTO(estudiante.carrera.id, estudiante.carrera.nombrecarrera);
        const semestreDTO = new SemestreDTO(estudiante.semestre.id, estudiante.semestre.codigosemestre);
        const sedeDTO = new SedeDTO(estudiante.sede.id, estudiante.sede.nombresede);

        const estudianteDTO = new EstudianteDTO(
            estudiante.id,
            estudiante.usuario_id,
            estudiante.nombres,
            estudiante.apellidos,
            estudiante.carnetidentidad,
            estudiante.correoelectronico,
            estudiante.celularcontacto,
            estudiante.graduado,
            carreraDTO,
            semestreDTO,
            sedeDTO,
            estudiante.aniograduacion,
            estudiante.linkcurriculumvitae
        );
        console.log('Estudiante obtenido correctamente.');
        return new ResponseDTO('U-0000', estudianteDTO, 'Estudiante obtenido correctamente');
    } catch (error) {
        console.error(`Error al obtener el estudiante con ID: ${id}.`, error);
        return new ResponseDTO('U-1002', null, `Error al obtener el estudiante: ${error}`);
    }
};

const createStudent = async (estudianteData) => {
    console.log('Creando un nuevo estudiante...');
    try {
        const nuevoEstudiante = await EstudianteENT.create(estudianteData);
        const carreraDTO = new CarreraDTO(estudianteData.carrera.id, estudianteData.carrera.nombrecarrera);
        const semestreDTO = new SemestreDTO(estudianteData.semestre.id, estudianteData.semestre.codigosemestre);
        const sedeDTO = new SedeDTO(estudianteData.sede.id, estudianteData.sede.nombresede);

        const estudianteDTO = new EstudianteDTO(
            nuevoEstudiante.id,
            nuevoEstudiante.usuario_id,
            nuevoEstudiante.nombres,
            nuevoEstudiante.apellidos,
            nuevoEstudiante.carnetidentidad,
            nuevoEstudiante.correoelectronico,
            nuevoEstudiante.celularcontacto,
            nuevoEstudiante.graduado,
            carreraDTO,
            semestreDTO,
            sedeDTO,
            nuevoEstudiante.aniograduacion,
            nuevoEstudiante.linkcurriculumvitae
        );
        console.log('Estudiante creado correctamente.');
        return new ResponseDTO('U-0000', estudianteDTO, 'Estudiante creado correctamente');
    } catch (error) {
        console.error('Error al crear el estudiante:', error);
        return new ResponseDTO('U-1003', null, `Error al crear el estudiante: ${error}`);
    }
};

const updateStudent = async (id, estudianteData) => {
    console.log(`Actualizando el estudiante con ID: ${id}...`);
    try {
        const estudiante = await EstudianteENT.findByPk(id);
        if (!estudiante) {
            console.log(`Estudiante con ID: ${id} no encontrado.`);
            return new ResponseDTO('U-1004', null, 'Estudiante no encontrado');
        }
        await estudiante.update(estudianteData);
        console.log('Estudiante actualizado correctamente.');
        return new ResponseDTO('U-0000', null, 'Estudiante actualizado correctamente');
    } catch (error) {
        console.error(`Error al actualizar el estudiante con ID: ${id}.`, error);
        return new ResponseDTO('U-1004', null, `Error al actualizar el estudiante: ${error}`);
    }
};

const deleteStudent = async (id) => {
    console.log(`Eliminando el estudiante con ID: ${id}...`);
    try {
        const estudiante = await EstudianteENT.findByPk(id);
        if (!estudiante) {
            console.log(`Estudiante con ID: ${id} no encontrado.`);
            return new ResponseDTO('U-1005', null, 'Estudiante no encontrado');
        }
        await estudiante.destroy();
        console.log('Estudiante eliminado correctamente.');
        return new ResponseDTO('U-0000', null, 'Estudiante eliminado correctamente');
    } catch (error) {
        console.error(`Error al eliminar el estudiante con ID: ${id}.`, error);
        return new ResponseDTO('U-1005', null, `Error al eliminar el estudiante: ${error}`);
    }
};

module.exports = {
    getAllStudents,
    getStudentById,
    createStudent,
    updateStudent,
    deleteStudent,
};

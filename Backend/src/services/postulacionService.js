const PostulacionDTO = require("../DTO/PostulacionDTO");
const ResponseDTO = require("../DTO/ResponseDTO");
const PostulacionENT = require("../ENT/PostulacionENT");
const EstadoPostulacionENT = require("../ENT/EstadoPostulacionENT");
const EstudianteENT = require("../ENT/EstudianteENT");
const ConvocatoriaENT = require("../ENT/ConvocatoriaENT");
const EstadoPostulacionDTO = require("../DTO/EstadoPostulacionDTO");
const EstudianteDTO = require("../DTO/EstudianteDTO");
const ConvocatoriaDTO = require("../DTO/ConvocatoriaDTO");
//para el trigger
const historicoService = require('./historicoPostulacionesService');

const getAllPostulaciones = async () => {
  console.log("Obteniendo todas las postulaciones...");
  try {
    const postulaciones = await PostulacionENT.findAll({
      include: [
        { model: EstadoPostulacionENT, as: "estadopostulacion" },
        { model: EstudianteENT, as: "estudiante" },
        { model: ConvocatoriaENT, as: "convocatoria" },
      ],
    });
    const postulacionesDTO = postulaciones.map((postulacion) => {
      const estadoPostulacionDTO = {
        id: postulacion.estadopostulacion.id,
        nombreestadopostulacion:
          postulacion.estadopostulacion.nombreestadopostulacion,
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
    console.log("Postulaciones obtenidas correctamente.");
    return new ResponseDTO(
      "P-0000",
      postulacionesDTO,
      "Postulaciones obtenidas correctamente"
    );
  } catch (error) {
    console.error("Error al obtener todas las postulaciones:", error);
    return new ResponseDTO(
      "P-1001",
      null,
      `Error al obtener todas las postulaciones: ${error}`
    );
  }
};

const getPostulacionById = async (id) => {
  console.log(`Obteniendo la postulación con ID: ${id}...`);
  try {
    const postulacion = await PostulacionENT.findByPk(id, {
      include: [
        { model: EstadoPostulacionENT, as: "estadopostulacion" },
        { model: EstudianteENT, as: "estudiante" },
        { model: ConvocatoriaENT, as: "convocatoria" },
      ],
    });
    if (!postulacion) {
      console.log(`Postulación con ID: ${id} no encontrada.`);
      return new ResponseDTO("P-1002", null, "Postulación no encontrada");
    }
    const estadoPostulacionDTO = {
      id: postulacion.estadopostulacion.id,
      nombreestadopostulacion:
        postulacion.estadopostulacion.nombreestadopostulacion,
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

    return new ResponseDTO(
      "P-0000",
      new PostulacionDTO(
        postulacion.id,
        postulacion.fechapostulacion,
        estadoPostulacionDTO,
        estudianteDTO,
        convocatoriaDTO
      ),
      "Postulación obtenida correctamente"
    );
  } catch (error) {
    console.error(`Error al obtener la postulación con ID: ${id}.`, error);
    return new ResponseDTO(
      "P-1002",
      null,
      `Error al obtener la postulación: ${error}`
    );
  }
};

const getPostulacionesPorIdConvocatoria = async (idConvocatoria) => {
  console.log(`Obteniendo postulaciones para la convocatoria con ID: ${idConvocatoria}...`);
  try {
      const postulaciones = await PostulacionENT.findAll({
          where: { convocatoria_id: idConvocatoria },
          include: [
              { model: EstadoPostulacionENT, as: 'estadopostulacion' },
              { model: EstudianteENT, as: 'estudiante' }
          ]
      });

      if (!postulaciones || postulaciones.length === 0) {
          console.log(`No se encontraron postulaciones para la convocatoria con ID: ${idConvocatoria}.`);
          return new ResponseDTO('P-1002', null, 'No se encontraron postulaciones para la convocatoria.');
      }

      const postulacionesDTO = postulaciones.map((postulacion) => {
          const estadoPostulacionDTO = {
              id: postulacion.estadopostulacion.id,
              nombreestadopostulacion: postulacion.estadopostulacion.nombreestadopostulacion
          };
          const estudianteDTO = {
              id: postulacion.estudiante.id,
              usuario_id: postulacion.estudiante.usuario_id,
              // Otras propiedades del estudiante que desees incluir
          };
          return new PostulacionDTO(
              postulacion.id,
              postulacion.fechapostulacion,
              estadoPostulacionDTO,
              estudianteDTO,
              null // No incluimos la convocatoria en este caso
          );
      });

      console.log(`Postulaciones obtenidas correctamente para la convocatoria con ID: ${idConvocatoria}.`);
      return new ResponseDTO('P-0000', postulacionesDTO, 'Postulaciones obtenidas correctamente');
  } catch (error) {
      console.error(`Error al obtener las postulaciones para la convocatoria con ID: ${idConvocatoria}.`, error);
      return new ResponseDTO('P-1002', null, `Error al obtener las postulaciones: ${error}`);
  }
};


const createPostulacion = async (postulationData) => {
    console.log('Creando una nueva postulación...');
    try {
        // Verificamos que los objetos necesarios estén definidos y contengan las propiedades requeridas
        if (!postulationData.estadopostulacion || !postulationData.estadopostulacion.id ||
            !postulationData.estudiante || !postulationData.estudiante.id ||
            !postulationData.convocatoria || !postulationData.convocatoria.id) {
            return new ResponseDTO('P-1002', null, 'Datos de postulación incompletos o inválidos');
        }

        // Creamos la postulación y asociamos las relaciones
        const postulation = await PostulacionENT.create({
            fechapostulacion: postulationData.fechapostulacion,
            estadopostulacion_id: postulationData.estadopostulacion.id,
            estudiante_id: postulationData.estudiante.id,
            convocatoria_id: postulationData.convocatoria.id
        });

        // Creamos los objetos DTO
        const estadoPostulacionDTO = new EstadoPostulacionDTO(
            postulationData.estadopostulacion.id,
            postulationData.estadopostulacion.nombreestadopostulacion
        );

        const estudianteDTO = new EstudianteDTO(
            postulationData.estudiante.id,
            postulationData.estudiante.usuario_id,
            postulationData.estudiante.nombres,
            postulationData.estudiante.apellidos,
            postulationData.estudiante.carnetidentidad,
            postulationData.estudiante.correoelectronico,
            postulationData.estudiante.celularcontacto,
            postulationData.estudiante.graduado,
            postulationData.estudiante.carrera_id,
            postulationData.estudiante.semestre_id,
            postulationData.estudiante.sede_id,
            postulationData.estudiante.aniograduacion,
            postulationData.estudiante.linkcurriculumvitae
        );

        const convocatoriaDTO = new ConvocatoriaDTO(
            postulationData.convocatoria.id,
            postulationData.convocatoria.areapasantia,
            postulationData.convocatoria.descripcionfunciones,
            postulationData.convocatoria.requisitoscompetencias,
            postulationData.convocatoria.horario_inicio,
            postulationData.convocatoria.horario_fin,
            postulationData.convocatoria.fechasolicitud,
            postulationData.convocatoria.fechaseleccionpasante,
            postulationData.convocatoria.estadoconvocatoria_id, // Considera si necesitas el id o un objeto más detallado aquí
            postulationData.convocatoria.institucion_id,       // Lo mismo para institución y tiempo a cumplir
            postulationData.convocatoria.tiempoacumplir_id
        );
        const postulacionDTO=new PostulacionDTO(
            postulation.id,
            postulation.fechapostulacion,
            estadoPostulacionDTO,
            estudianteDTO,
            convocatoriaDTO
        );
        // Insertar en historico después de crear la postulación
        await historicoService.insertHistoricoPostulacion(postulation.dataValues, 'POST');
        console.log('Postulación creada correctamente.');
        return new ResponseDTO('P-0000', postulacionDTO,'Postulación creada correctamente');

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
      return new ResponseDTO("P-1004", null, "Postulación no encontrada");
    }
    await postulacion.update(postulacionData);
    // Insertar en historico después de actualizar una postulación
    await historicoService.insertHistoricoPostulacion(postulacion.dataValues, 'PUT');
    console.log("Postulación actualizada correctamente.");
    return new ResponseDTO(
      "P-0000",
      null,
      "Postulación actualizada correctamente"
    );
  } catch (error) {
    console.error(`Error al actualizar la postulación con ID: ${id}.`, error);
    return new ResponseDTO(
      "P-1004",
      null,
      `Error al actualizar la postulación: ${error}`
    );
  }
};

const deletePostulacion = async (id) => {
  console.log(`Eliminando la postulación con ID: ${id}...`);
  try {
    const postulacion = await PostulacionENT.findByPk(id);
    if (!postulacion) {
      console.log(`Postulación con ID: ${id} no encontrada.`);
      return new ResponseDTO("P-1005", null, "Postulación no encontrada");
    }
    // Insertar en historico después de eliminar una postulación
    await historicoService.insertHistoricoPostulacion(postulacion.dataValues, 'DELETE');
    await postulacion.destroy();
    console.log("Postulación eliminada correctamente.");
    return new ResponseDTO(
      "P-0000",
      null,
      "Postulación eliminada correctamente"
    );
  } catch (error) {
    console.error(`Error al eliminar la postulación con ID: ${id}.`, error);
    return new ResponseDTO(
      "P-1005",
      null,
      `Error al eliminar la postulación: ${error}`
    );
  }
};

const getPostulacionByStudent = async (studentId) => {
  console.log(`Obteniendo las postulaciones para el estudiante con ID: ${studentId}...`);
  try {
      const postulaciones = await PostulacionENT.findAll({
          include: [
              { model: EstadoPostulacionENT, as: "estadopostulacion" },
              { model: EstudianteENT, as: "estudiante", where: { id: studentId } },
              { model: ConvocatoriaENT, as: "convocatoria" },
          ],
      });

      if (postulaciones.length === 0) {
          console.log(`No se encontraron postulaciones para el estudiante con ID: ${studentId}.`);
          return new ResponseDTO("P-1006", null, "No se encontraron postulaciones para el estudiante");
      }

      const postulacionesDTO = postulaciones.map((postulacion) => {
        const estadoPostulacionDTO = {
          id: postulacion.estadopostulacion.id,
          nombreestadopostulacion:
            postulacion.estadopostulacion.nombreestadopostulacion,
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

      console.log(`Postulaciones obtenidas correctamente para el estudiante con ID: ${studentId}.`);
      return new ResponseDTO("P-0000", postulacionesDTO, "Postulaciones obtenidas correctamente");
  } catch (error) {
      console.error(`Error al obtener las postulaciones para el estudiante con ID: ${studentId}:`, error);
      return new ResponseDTO("P-1006", null, `Error al obtener las postulaciones para el estudiante: ${error}`);
  }
};

const getPostulacionByStudentByStatus = async (studentId, estadopostulacionId) => {
  console.log(`Obteniendo las postulaciones por ESTADO POSTULACION -${estadopostulacionId}-  para el estudiante con ID: ${studentId}...`);
  try {
      const postulaciones = await PostulacionENT.findAll({
          where: { estadopostulacion_id: [estadopostulacionId] }, 
          include: [
              { model: EstadoPostulacionENT, as: "estadopostulacion" },
              { model: EstudianteENT, as: "estudiante", where: { id: studentId } },
              { model: ConvocatoriaENT, as: "convocatoria" },
          ],
      });

      if (postulaciones.length === 0) {
          console.log(`No se encontraron postulaciones con estado -${estadopostulacionId}- para el estudiante con ID: ${studentId}.`);
          return new ResponseDTO("P-1006", null, `No se encontraron postulaciones con estado -${estadopostulacionId}- para el estudiante con ID: ${studentId}.`);
      }

      const postulacionesDTO = postulaciones.map((postulacion) => {
        const estadoPostulacionDTO = {
          id: postulacion.estadopostulacion.id,
          nombreestadopostulacion:
            postulacion.estadopostulacion.nombreestadopostulacion,
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

      console.log(`Postulaciones con estado -${estadopostulacionId}- obtenidas correctamente para el estudiante con ID: ${studentId}.`);
      return new ResponseDTO("P-0000", postulacionesDTO, "Postulaciones por estado obtenidas correctamente");
  } catch (error) {
      console.error(`Error al obtener las postulaciones con estado -${estadopostulacionId}- para el estudiante con ID: ${studentId}:`, error);
      return new ResponseDTO("P-1006", null, `Error al obtener las postulaciones por estado para el estudiante: ${error}`);
  }
};


module.exports = {
  getAllPostulaciones,
  getPostulacionById,
  createPostulacion,
  updatePostulacion,
  deletePostulacion,
  getPostulacionByStudent,
  getPostulacionByStudentByStatus,
  getPostulacionesPorIdConvocatoria,
};

const InstitucionDTO = require("../DTO/InstitucionDTO");
const SectorPertenenciaDTO = require("../DTO/sectorPertenenciaDTO");
const Institucion = require("../ENT/InstitucionENT");
const ResponseDTO = require("../DTO/ResponseDTO");
const SectorPertenencia = require("../ENT/sectorPertenenciaENT");
const Usuario = require("../ENT/UsuarioENT");
const UsuarioDTO = require("../DTO/UsuarioDTO");
const sequelize = require("../../database/db");

const { baseURL } = require("../../config/constants");

const getImageUrl = (imageName) => {
  return imageName ? `${baseURL}/images/${imageName}` : null;
};

const getAllInstitutions = async () => {
  console.log("Obteniendo todas las instituciones...");
  try {
    const instituciones = await Institucion.findAll({
      include: [
        { model: SectorPertenencia, as: "sectorpertenencia" },
        { model: Usuario, as: "usuario" },
      ],
    });
    const institucionesDTO = instituciones.map((institucion) => {
      let sectorPertenenciaDTO = null;
      if (institucion.sectorpertenencia) {
        sectorPertenenciaDTO = new SectorPertenenciaDTO(
          institucion.sectorpertenencia.id,
          institucion.sectorpertenencia.nombresectorpertenencia
        );
      }

      let usuarioDTO = null;
      if (institucion.usuario) {
        usuarioDTO = new UsuarioDTO(
          institucion.usuario.id,
          institucion.usuario.idusuario
        );
      }
      const imageUrl = institucion.logoinstitucion
        ? `${baseURL}/images/${institucion.logoinstitucion}`
        : null;
      return new InstitucionDTO(
        institucion.id,
        institucion.nombreinstitucion,
        institucion.reseniainstitucion,
        imageUrl,
        institucion.nombrecontacto,
        institucion.correocontacto,
        institucion.celularcontacto,
        institucion.estado, 
        usuarioDTO,
        sectorPertenenciaDTO
      );
    });
    console.log("Instituciones obtenidas correctamente.");
    return new ResponseDTO(
      "I-0000",
      institucionesDTO,
      "Instituciones obtenidas correctamente"
    );
  } catch (error) {
    console.error("Error al obtener todas las instituciones:", error);
    return new ResponseDTO(
      "I-1001",
      null,
      `Error al obtener todas las instituciones: ${error}`
    );
  }
};

const getInstitutionById = async (id) => {
  console.log(`Obteniendo la institución con ID: ${id}...`);
  try {
    const institucion = await Institucion.findByPk(id, {
      include: [
        { model: SectorPertenencia, as: "sectorpertenencia" },
        { model: Usuario, as: "usuario" },
      ],
    });
    if (!institucion) {
      console.log(`Institución con ID: ${id} no encontrada.`);
      return new ResponseDTO("I-1002", null, "Institución no encontrada");
    }
    const sectorPertenenciaDTO = new SectorPertenenciaDTO(
      institucion.sectorpertenencia.id,
      institucion.sectorpertenencia.nombresectorpertenencia
    );
    const usuarioDTO = new UsuarioDTO(
      institucion.usuario.id,
      institucion.usuario.idusuario
    );
    const imageUrl = getImageUrl(institucion.logoinstitucion);
    const institucionDTO = new InstitucionDTO(
      institucion.id,
      institucion.nombreinstitucion,
      institucion.reseniainstitucion,
      imageUrl,
      institucion.nombrecontacto,
      institucion.correocontacto,
      institucion.celularcontacto,
      institucion.estado, 
      usuarioDTO,
      sectorPertenenciaDTO
    );
    console.log("Institución obtenida correctamente.");
    return new ResponseDTO(
      "I-0000",
      institucionDTO,
      "Institución obtenida correctamente"
    );
  } catch (error) {
    console.error(`Error al obtener la institución con ID: ${id}.`, error);
    return new ResponseDTO(
      "I-1002",
      null,
      `Error al obtener la institución: ${error}`
    );
  }
};

const createInstitution = async (institutionData) => {
  console.log("Creando una nueva institución...");
  try {
    const fileName = institutionData.logoinstitucion
      ? institutionData.logoinstitucion
      : null;
    const nuevaInstitucion = await Institucion.create({
      nombreinstitucion: institutionData.nombreinstitucion,
      sectorpertenencia_id: institutionData.sectorpertenencia_id,
      usuario_id: institutionData.usuario_id,
      reseniainstitucion: institutionData.reseniainstitucion,
      logoinstitucion: fileName,
      nombrecontacto: institutionData.nombrecontacto,
      correocontacto: institutionData.correocontacto,
      celularcontacto: institutionData.celularcontacto,
      estado: institutionData.estado,
    });
    // Genera la URL completa para acceder a la imagen a través de tu API
    // Esta línea debe formar una URL válida
    const imageUrl = fileName ? `${baseURL}/images/${fileName}` : null;

    const sectorPertenenciaDTO = new SectorPertenenciaDTO(
      institutionData.sectorpertenencia_id
    );
    const usuarioDTO = new UsuarioDTO(institutionData.usuario_id);
    const nuevaInstitucionDTO = new InstitucionDTO(
      nuevaInstitucion.id,
      nuevaInstitucion.nombreinstitucion,
      nuevaInstitucion.reseniainstitucion,
      imageUrl,
      nuevaInstitucion.nombrecontacto,
      nuevaInstitucion.correocontacto,
      nuevaInstitucion.celularcontacto,
      nuevaInstitucion.estado,
      usuarioDTO,
      sectorPertenenciaDTO
    );
    console.log("Institución creada correctamente.");
    return new ResponseDTO(
      "I-0000",
      nuevaInstitucionDTO,
      "Institución creada correctamente"
    );
  } catch (error) {
    console.error("Error al crear la institución:", error);
    return new ResponseDTO(
      "I-1003",
      null,
      `Error al crear la institución: ${error}`
    );
  }
};

const updateInstitution = async (id, institutionData) => {
  console.log(`Actualizando la institución con ID: ${id}...`);
  try {
    const institucion = await Institucion.findByPk(id);
    if (!institucion) {
      console.log(`Institución con ID: ${id} no encontrada.`);
      return new ResponseDTO("I-1004", null, "Institución no encontrada");
    }
    await institucion.update({
      nombreinstitucion: institutionData.nombreinstitucion,
      sectorpertenencia_id: institutionData.sectorpertenencia.id,
      usuario_id: institutionData.usuario.id, // Añade esta línea
      reseniainstitucion: institutionData.reseniainstitucion,
      logoinstitucion: institutionData.logoinstitucion,
      nombrecontacto: institutionData.nombrecontacto,
      correocontacto: institutionData.correocontacto,
      celularcontacto: institutionData.celularcontacto,
      estado: institutionData.estado,
    });
    const sectorPertenenciaDTO = new SectorPertenenciaDTO(
      institutionData.sectorpertenencia.id,
      institutionData.sectorpertenencia.nombresectorpertenencia
    );
    const usuarioDTO = new UsuarioDTO(
      institutionData.usuario.id,
      institutionData.usuario.idusuario
    ); // Usamos institutionData para el usuarioDTO
    const imageUrl = getImageUrl(institucion.logoinstitucion);
    const actulizadoInstitucionDTO = new InstitucionDTO(
      institucion.id,
      institucion.nombreinstitucion,
      institucion.reseniainstitucion,
      imageUrl,
      institucion.nombrecontacto,
      institucion.correocontacto,
      institucion.celularcontacto,
      institucion.estado,
      usuarioDTO,
      sectorPertenenciaDTO
    );
    console.log("Institución actualizada correctamente.");
    return new ResponseDTO(
      "I-0000",
      actulizadoInstitucionDTO,
      "Institución actualizada correctamente"
    );
  } catch (error) {
    console.error(`Error al actualizar la institución con ID: ${id}.`, error);
    return new ResponseDTO(
      "I-1004",
      null,
      `Error al actualizar la institución: ${error}`
    );
  }
};

const deleteInstitution = async (id) => {
  console.log(`Eliminando la institución con ID: ${id}...`);
  try {
    const institucion = await Institucion.findByPk(id);
    if (!institucion) {
      console.log(`Institución con ID: ${id} no encontrada.`);
      return new ResponseDTO("I-1005", null, "Institución no encontrada");
    }
    await institucion.destroy();
    console.log("Institución eliminada correctamente.");
    return new ResponseDTO(
      "I-0000",
      null,
      "Institución eliminada correctamente"
    );
  } catch (error) {
    console.error(`Error al eliminar la institución con ID: ${id}.`, error);
    return new ResponseDTO(
      "I-1005",
      null,
      `Error al eliminar la institución: ${error}`
    );
  }
};

const getInstitutionPostulations = async () => {
  console.log("Obteniendo total de postulaciones por institución...");
  try {
    const result = await sequelize.query(
      `SELECT 
            institucion.nombreinstitucion,
              institucion.reseniainstitucion,
              institucion.logoinstitucion,
            COUNT(postulacion.id) AS totalpostulaciones
          FROM 
            institucion
          JOIN 
            convocatoria ON institucion.id = convocatoria.institucion_id
          JOIN 
            postulacion ON convocatoria.id = postulacion.convocatoria_id
          GROUP BY 
            institucion.nombreinstitucion, institucion.reseniainstitucion, institucion.logoinstitucion
          ORDER BY 
            totalpostulaciones DESC;
          `,
      { type: sequelize.QueryTypes.SELECT }
    );

    const resultWithImageUrl = result.map((item) => ({
      nombreinstitucion: item.nombreinstitucion,
      reseniainstitucion: item.reseniainstitucion,
      logoinstitucion: getImageUrl(item.logoinstitucion),
      totalpostulaciones: item.totalpostulaciones,
    }));

    console.log(
      "Total de postulaciones por institución obtenido correctamente."
    );
    return new ResponseDTO(
      "IP-0000",
      resultWithImageUrl,
      "Total de postulaciones por institución obtenido correctamente"
    );
  } catch (error) {
    console.error(
      "Error al obtener el total de postulaciones por institución:",
      error
    );
    return new ResponseDTO(
      "IP-1001",
      null,
      `Error al obtener el total de postulaciones por institución: ${error}`
    );
  }
};

const getInstitutionsBySector = async (sectorId) => {
  console.log(`Obteniendo instituciones del sector con ID: ${sectorId}...`);
  try {
      const instituciones = await Institucion.findAll({
          where: { sectorpertenencia_id: sectorId },
          include: [
              { model: SectorPertenencia, as: "sectorpertenencia" },
              { model: Usuario, as: "usuario" },
          ],
      });

      if (!instituciones || instituciones.length === 0) {
          console.log(`No se encontraron instituciones para el sector con ID: ${sectorId}.`);
          return new ResponseDTO("I-1003", null, "No se encontraron instituciones para el sector especificado");
      }

      const institucionesDTO = instituciones.map((institucion) => {
          const sectorPertenenciaDTO = new SectorPertenenciaDTO(
              institucion.sectorpertenencia.id,
              institucion.sectorpertenencia.nombresectorpertenencia
          );
          const usuarioDTO = new UsuarioDTO(
              institucion.usuario.id,
              institucion.usuario.idusuario
          );
          const imageUrl = getImageUrl(institucion.logoinstitucion);
          return new InstitucionDTO(
              institucion.id,
              institucion.nombreinstitucion,
              institucion.reseniainstitucion,
              imageUrl,
              institucion.nombrecontacto,
              institucion.correocontacto,
              institucion.celularcontacto,
              usuarioDTO,
              sectorPertenenciaDTO
          );
      });

      console.log("Instituciones del sector obtenidas correctamente.");
      return new ResponseDTO(
          "I-0000",
          institucionesDTO,
          "Instituciones del sector obtenidas correctamente"
      );
  } catch (error) {
      console.error(`Error al obtener las instituciones del sector con ID: ${sectorId}:`, error);
      return new ResponseDTO(
          "I-1003",
          null,
          `Error al obtener las instituciones del sector: ${error}`
      );
  }
};


module.exports = {
  getAllInstitutions,
  getInstitutionById,
  createInstitution,
  updateInstitution,
  deleteInstitution,
  getInstitutionPostulations,
  getInstitutionsBySector,
};

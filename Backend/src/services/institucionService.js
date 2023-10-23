const InstitucionDTO = require('../DTO/InstitucionDTO');
const SectorPertenenciaDTO = require('../DTO/SectorPertenenciaDTO');
const Institucion = require("../ENT/InstitucionENT");
const ResponseDTO = require("../DTO/ResponseDTO");
const SectorPertenencia = require('../ENT/SectorPertenenciaENT');

const getAllInstitutions = async () => {
    console.log('Obteniendo todas las instituciones...');
    try {
        const instituciones = await Institucion.findAll({
            include: [{ model: SectorPertenencia, as: 'sectorpertenencia' }]
        });
        const institucionesDTO = instituciones.map(institucion => {
            const sectorPertenenciaDTO = new SectorPertenenciaDTO(institucion.sectorpertenencia.id, institucion.sectorpertenencia.nombresectorpertenencia);
            return new InstitucionDTO(institucion.id, institucion.nombreinstitucion, sectorPertenenciaDTO, institucion.reseniainstitucion, institucion.logoinstitucion, institucion.nombrecontacto, institucion.correocontacto, institucion.celularcontacto);
        });
        console.log('Instituciones obtenidas correctamente.');
        return new ResponseDTO('I-0000', institucionesDTO, 'Instituciones obtenidas correctamente');
    } catch (error) {
        console.error('Error al obtener todas las instituciones:', error);
        return new ResponseDTO('I-1001', null, `Error al obtener todas las instituciones: ${error}`);
    }
};

const getInstitutionById = async (id) => {
    console.log(`Obteniendo la institución con ID: ${id}...`);
    try {
        const institucion = await Institucion.findByPk(id, {
            include: [{ model: SectorPertenencia, as: 'sectorpertenencia' }]
        });
        if (!institucion) {
            console.log(`Institución con ID: ${id} no encontrada.`);
            return new ResponseDTO('I-1002', null, 'Institución no encontrada');
        }
        const sectorPertenenciaDTO = new SectorPertenenciaDTO(institucion.sectorpertenencia.id, institucion.sectorpertenencia.nombresectorpertenencia);
        const institucionDTO = new InstitucionDTO(institucion.id, institucion.nombreinstitucion, sectorPertenenciaDTO, institucion.reseniainstitucion, institucion.logoinstitucion, institucion.nombrecontacto, institucion.correocontacto, institucion.celularcontacto);
        console.log('Institución obtenida correctamente.');
        return new ResponseDTO('I-0000', institucionDTO, 'Institución obtenida correctamente');
    } catch (error) {
        console.error(`Error al obtener la institución con ID: ${id}.`, error);
        return new ResponseDTO('I-1002', null, `Error al obtener la institución: ${error}`);
    }
};

const createInstitution = async (institutionData) => {
    console.log('Creando una nueva institución...');
    try {
        const nuevaInstitucion = await Institucion.create({
            nombreinstitucion: institutionData.nombreinstitucion,
            sectorpertenencia_id: institutionData.sectorpertenencia.id,
            reseniainstitucion: institutionData.reseniainstitucion,
            logoinstitucion: institutionData.logoinstitucion,
            nombrecontacto: institutionData.nombrecontacto,
            correocontacto: institutionData.correocontacto,
            celularcontacto: institutionData.celularcontacto
        });
        const sectorPertenenciaDTO = new SectorPertenenciaDTO(institutionData.sectorpertenencia.id, institutionData.sectorpertenencia.nombresectorpertenencia);
        const nuevaInstitucionDTO = new InstitucionDTO(nuevaInstitucion.id, nuevaInstitucion.nombreinstitucion, sectorPertenenciaDTO, nuevaInstitucion.reseniainstitucion, nuevaInstitucion.logoinstitucion, nuevaInstitucion.nombrecontacto, nuevaInstitucion.correocontacto, nuevaInstitucion.celularcontacto);
        console.log('Institución creada correctamente.');
        return new ResponseDTO('I-0000', nuevaInstitucionDTO, 'Institución creada correctamente');
    } catch (error) {
        console.error('Error al crear la institución:', error);
        return new ResponseDTO('I-1003', null, `Error al crear la institución: ${error}`);
    }
};

const updateInstitution = async (id, institutionData) => {
    console.log(`Actualizando la institución con ID: ${id}...`);
    try {
        const institucion = await Institucion.findByPk(id);
        if (!institucion) {
            console.log(`Institución con ID: ${id} no encontrada.`);
            return new ResponseDTO('I-1004', null, 'Institución no encontrada');
        }
        await institucion.update({
            nombreinstitucion: institutionData.nombreinstitucion,
            sectorpertenencia_id: institutionData.sectorpertenencia.id,
            reseniainstitucion: institutionData.reseniainstitucion,
            logoinstitucion: institutionData.logoinstitucion,
            nombrecontacto: institutionData.nombrecontacto,
            correocontacto: institutionData.correocontacto,
            celularcontacto: institutionData.celularcontacto
        });
        console.log('Institución actualizada correctamente.');
        return new ResponseDTO('I-0000', null, 'Institución actualizada correctamente');
    } catch (error) {
        console.error(`Error al actualizar la institución con ID: ${id}.`, error);
        return new ResponseDTO('I-1004', null, `Error al actualizar la institución: ${error}`);
    }
};

const deleteInstitution = async (id) => {
    console.log(`Eliminando la institución con ID: ${id}...`);
    try {
        const institucion = await Institucion.findByPk(id);
        if (!institucion) {
            console.log(`Institución con ID: ${id} no encontrada.`);
            return new ResponseDTO('I-1005', null, 'Institución no encontrada');
        }
        await institucion.destroy();
        console.log('Institución eliminada correctamente.');
        return new ResponseDTO('I-0000', null, 'Institución eliminada correctamente');
    } catch (error) {
        console.error(`Error al eliminar la institución con ID: ${id}.`, error);
        return new ResponseDTO('I-1005', null, `Error al eliminar la institución: ${error}`);
    }
};

module.exports = {
    getAllInstitutions,
    getInstitutionById,
    createInstitution,
    updateInstitution,
    deleteInstitution,
};

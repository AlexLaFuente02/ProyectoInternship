const ConvocatoriaDTO = require('../DTO/ConvocatoriaDTO');
const EstadoConvocatoriaDTO = require('../DTO/EstadoConvocatoriaDTO');
const EstadoConvocatoriaENT = require('../ENT/EstadoConvocatoriaENT');
const InstitucionDTO = require('../DTO/InstitucionDTO');
const InstitucionENT = require('../ENT/InstitucionENT');
const TiempoAcumplirDTO = require('../DTO/TiempoACumplirDTO');
const TiempoAcumplirENT = require('../ENT/TiempoACumplirENT');
const ConvocatoriaENT = require("../ENT/ConvocatoriaENT");
const ResponseDTO = require("../DTO/ResponseDTO");
//Para el trigger:
const historicoService = require('./historicoConvocatoriasService');

const getAllConvocatorias = async () => {
    console.log('Obteniendo todas las convocatorias...');
    try {
        const convocatorias = await ConvocatoriaENT.findAll({
            include: [
                { model: EstadoConvocatoriaENT, as: 'estadoconvocatoria' },
                { model: InstitucionENT, as: 'institucion' },
                { model: TiempoAcumplirENT, as: 'tiempoacumplir' }
            ]
        });
        const convocatoriasDTO = convocatorias.map(convocatoria => {
            const estadoDTO = new EstadoConvocatoriaDTO(convocatoria.estadoconvocatoria.id, convocatoria.estadoconvocatoria.nombreestadoconvocatoria);
            const institucionDTO = new InstitucionDTO(convocatoria.institucion.id, convocatoria.institucion.nombreinstitucion);
            const tiempoDTO = new TiempoAcumplirDTO(convocatoria.tiempoacumplir.id, convocatoria.tiempoacumplir.descripcion);
            return new ConvocatoriaDTO(
                convocatoria.id,
                convocatoria.areapasantia,
                convocatoria.descripcionfunciones,
                convocatoria.requisitoscompetencias,
                convocatoria.horario_inicio,
                convocatoria.horario_fin,
                convocatoria.fechasolicitud,
                convocatoria.fechaseleccionpasante,
                estadoDTO,
                institucionDTO,
                tiempoDTO
            );
        });
        console.log('Convocatorias obtenidas correctamente.');
        return new ResponseDTO('C-0000', convocatoriasDTO, 'Convocatorias obtenidas correctamente');
    } catch (error) {
        console.error('Error al obtener todas las convocatorias:', error);
        return new ResponseDTO('C-1001', null, `Error al obtener todas las convocatorias: ${error}`);
    }
};

const getConvocatoriaById = async (id) => {
    console.log(`Obteniendo la convocatoria con ID: ${id}...`);
    try {
        const convocatoria = await ConvocatoriaENT.findByPk(id, {
            include: [
                { model: EstadoConvocatoriaENT, as: 'estadoconvocatoria' },
                { model: InstitucionENT, as: 'institucion' },
                { model: TiempoAcumplirENT, as: 'tiempoacumplir' }
            ]
        });
        if (!convocatoria) {
            console.log(`Convocatoria con ID: ${id} no encontrada.`);
            return new ResponseDTO('C-1002', null, 'Convocatoria no encontrada');
        }
        const estadoDTO = new EstadoConvocatoriaDTO(convocatoria.estadoconvocatoria.id, convocatoria.estadoconvocatoria.nombreestadoconvocatoria);
        const institucionDTO = new InstitucionDTO(convocatoria.institucion.id, convocatoria.institucion.nombreinstitucion);
        const tiempoDTO = new TiempoAcumplirDTO(convocatoria.tiempoacumplir.id, convocatoria.tiempoacumplir.descripcion);
        console.log('Convocatoria obtenida correctamente.');
        return new ResponseDTO('C-0000', new ConvocatoriaDTO(
            convocatoria.id,
            convocatoria.areapasantia,
            convocatoria.descripcionfunciones,
            convocatoria.requisitoscompetencias,
            convocatoria.horario_inicio,
            convocatoria.horario_fin,
            convocatoria.fechasolicitud,
            convocatoria.fechaseleccionpasante,
            estadoDTO,
            institucionDTO,
            tiempoDTO
        ), 'Convocatoria obtenida correctamente');
    } catch (error) {
        console.error(`Error al obtener la convocatoria con ID: ${id}.`, error);
        return new ResponseDTO('C-1002', null, `Error al obtener la convocatoria: ${error}`);
    }
};

const createConvocatoria = async (data) => {
    console.log('Creando una nueva convocatoria...');
    try {
        const convocatoria = await ConvocatoriaENT.create({
            areapasantia: data.areapasantia,
            descripcionfunciones: data.descripcionfunciones,
            requisitoscompetencias: data.requisitoscompetencias,
            horario_inicio: data.horario_inicio,
            horario_fin: data.horario_fin,
            fechasolicitud: data.fechasolicitud,
            fechaseleccionpasante: data.fechaseleccionpasante,
            estadoconvocatoria_id: data.estadoconvocatoria.id,
            institucion_id: data.institucion.id,
            tiempoacumplir_id: data.tiempoacumplir.id
        });
        // Insertar en historico después de crear la convocatoria
        await historicoService.insertHistoricoConvocatoria(convocatoria.dataValues, 'POST');
        console.log('Convocatoria creada correctamente.');
        return new ResponseDTO('C-0000', new ConvocatoriaDTO(
            convocatoria.id,
            convocatoria.areapasantia,
            convocatoria.descripcionfunciones,
            convocatoria.requisitoscompetencias,
            convocatoria.horario_inicio,
            convocatoria.horario_fin,
            convocatoria.fechasolicitud,
            convocatoria.fechaseleccionpasante,
            new EstadoConvocatoriaDTO(data.estadoconvocatoria.id, data.estadoconvocatoria.nombreestadoconvocatoria),
            new InstitucionDTO(data.institucion.id, data.institucion.nombreinstitucion),
            new TiempoAcumplirDTO(data.tiempoacumplir.id, data.tiempoacumplir.descripcion)
        ), 'Convocatoria creada correctamente');
    } catch (error) {
        console.error('Error al crear la convocatoria:', error);
        return new ResponseDTO('C-1003', null, `Error al crear la convocatoria: ${error}`);
    }
};

const updateConvocatoria = async (id, data) => {
    console.log(`Actualizando la convocatoria con ID: ${id}...`);
    try {
        const convocatoria = await ConvocatoriaENT.findByPk(id);
        if (!convocatoria) {
            console.log(`Convocatoria con ID: ${id} no encontrada.`);
            return new ResponseDTO('C-1004', null, 'Convocatoria no encontrada');
        }
        await convocatoria.update({
            areapasantia: data.areapasantia,
            descripcionfunciones: data.descripcionfunciones,
            requisitoscompetencias: data.requisitoscompetencias,
            horario_inicio: data.horario_inicio,
            horario_fin: data.horario_fin,
            fechasolicitud: data.fechasolicitud,
            fechaseleccionpasante: data.fechaseleccionpasante,
            estadoconvocatoria_id: data.estadoconvocatoria.id,
            institucion_id: data.institucion.id,
            tiempoacumplir_id: data.tiempoacumplir.id
        });
        // Insertar en historico después de actualizar una convocatoria
        await historicoService.insertHistoricoConvocatoria(convocatoria.dataValues, 'PUT');
        console.log('Convocatoria actualizada correctamente.');
        return new ResponseDTO('C-0000', new ConvocatoriaDTO(
            convocatoria.id,
            convocatoria.areapasantia,
            convocatoria.descripcionfunciones,
            convocatoria.requisitoscompetencias,
            convocatoria.horario_inicio,
            convocatoria.horario_fin,
            convocatoria.fechasolicitud,
            convocatoria.fechaseleccionpasante,
            new EstadoConvocatoriaDTO(data.estadoconvocatoria.id, data.estadoconvocatoria.nombreestadoconvocatoria),
            new InstitucionDTO(data.institucion.id, data.institucion.nombreinstitucion),
            new TiempoAcumplirDTO(data.tiempoacumplir.id, data.tiempoacumplir.descripcion)
        ), 'Convocatoria actualizada correctamente');
    } catch (error) {
        console.error(`Error al actualizar la convocatoria con ID: ${id}.`, error);
        return new ResponseDTO('C-1004', null, `Error al actualizar la convocatoria: ${error}`);
    }
};

const deleteConvocatoria = async (id) => {
    console.log(`Eliminando la convocatoria con ID: ${id}...`);
    try {
        const convocatoria = await ConvocatoriaENT.findByPk(id);
        if (!convocatoria) {
            console.log(`Convocatoria con ID: ${id} no encontrada.`);
            return new ResponseDTO('C-1005', null, 'Convocatoria no encontrada');
        }
        // Insertar en historico antes de eliminar la convocatoria
        await historicoService.insertHistoricoConvocatoria(convocatoria.dataValues, 'DELETE');
        await convocatoria.destroy();
        console.log('Convocatoria eliminada correctamente.');
        return new ResponseDTO('C-0000', null, 'Convocatoria eliminada correctamente');
    } catch (error) {
        console.error(`Error al eliminar la convocatoria con ID: ${id}.`, error);
        return new ResponseDTO('C-1005', null, `Error al eliminar la convocatoria: ${error}`);
    }
};

module.exports = {
    getAllConvocatorias,
    getConvocatoriaById,
    createConvocatoria,
    updateConvocatoria,
    deleteConvocatoria
};

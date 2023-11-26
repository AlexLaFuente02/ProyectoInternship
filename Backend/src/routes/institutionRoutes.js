const express = require('express');
const { isAuthenticated, checkRole } = require('../services/authService');
const convocatoriaService = require('../services/convocatoriaService');
const estadosolicitudinstitucionService = require('../services/estadoSolicitudInstitucionService');
const historicoConvocatoriasService = require('../services/historicoConvocatoriasService');
const institucionService = require('../services/institucionService');
const postulacionService = require('../services/postulacionService');
const router = express.Router();

// Ruta para publicar convocatoria por institucion
router.post('/convocatoria/', async (req, res) => {
    try {
        console.log('POST request received for createConvocatoria for INSTITUCION');
        const response = await convocatoriaService.createConvocatoria(req.body);
        res.json({
            method: 'createConvocatoria',
            code: response.code,
            result: response.result,
            message: response.message,
        });
    } catch (error) {
        console.error('Error creating convocatoria for INSTITUCION:', error);
        res.status(500).json({ error: error.message });
    }
});

// Ruta para obtener todos los estados de solicitud de institucion
router.get('/estadosolicitudinstitucion', async (req, res) => {
    try {
        console.log('GET request received for getAllEstadoSolicitudInstitucion for INSTITUCION');
        const response = await estadosolicitudinstitucionService.getAllEstadoSolicitudInstitucion();
        res.json({
            method: 'getAllEstadoSolicitudInstitucion',
            code: response.code,
            result: response.result,
            message: response.message,
        });
    } catch (error) {
        console.error('Error getting all estado solicitud institucion for INSTITUCION:', error);
        res.status(500).json({ error: error.message });
    }
});

// Ruta para obtener todas los historicos de convocatorias por institucion
router.get('/historicoConvocatorias', async (req, res) => {
    try {
        console.log('GET request received for getAllHistoricoConvocatorias for INSTITUCION');
        const response = await historicoConvocatoriasService.getAllHistoricos();
        res.json({
            method: 'getAllHistoricoConvocatorias',
            code: response.code,
            result: response.result,
            message: response.message,
        });
    } catch (error) {
        console.error('Error getting all historico convocatorias for INSTITUCION:', error);
        res.status(500).json({ error: error.message });
    }
});

// Ruta para añadir una institucion
router.post('/institucion', async (req, res) => {
    try {
        console.log('POST request received for createInstitucion');
        const response = await institucionService.createInstitution(req.body);
        res.json({
            method: 'createInstitucion',
            code: response.code,
            result: response.result,
            message: response.message,
        });
    } catch (error) {
        console.error('Error creating institucion:', error);
        res.status(500).json({ error: error.message });
    }
});

// Ruta para obtener todas las postulaciones
router.get('/postulacion', async (req, res) => {
    try {
        console.log('GET request received for getAllPostulaciones for INSTITUCION');
        const response = await postulacionService.getAllPostulaciones();
        res.json({
            method: 'getAllPostulaciones',
            code: response.code,
            result: response.result,
            message: response.message,
        });
    } catch (error) {
        console.error('Error getting all postulaciones for INSTITUCION:', error);
        res.status(500).json({ error: error.message });
    }
});

// Ruta para obtener una postulacion por id
router.get('/postulacion/:id', async (req, res) => {
    try {
        console.log('GET request received for getPostulacionById for INSTITUCION');
        const response = await postulacionService.getPostulacionById(req.params.id);
        res.json({
            method: 'getPostulacionById',
            code: response.code,
            result: response.result,
            message: response.message,
        });
    } catch (error) {
        console.error('Error getting postulacion by id for INSTITUCION:', error);
        res.status(500).json({ error: error.message });
    }
});

// Define la ruta para obtener postulaciones por ID de convocatoria
router.get('/postulaciones/convocatoria/:idConvocatoria', async (req, res) => {
    try {
        const idConvocatoria = req.params.idConvocatoria;
        console.log(`GET request received for getPostulacionesPorIdConvocatoria, ID de convocatoria: ${idConvocatoria}`);
        
        const response = await postulacionService.getPostulacionesPorIdConvocatoria(idConvocatoria);
        
        res.json({
            method: 'getPostulacionesPorIdConvocatoria',
            code: response.code,
            result: response.result,
            message: response.message,
        });
    } catch (error) {
        console.error('Error getting postulaciones by convocatoria ID:', error);
        res.status(500).json({ error: error.message });
    }
});

// Define la ruta para obtener convocatorias por ID de institución
router.get('/convocatorias/institucion/:idInstitucion', async (req, res) => {
    try {
        const idInstitucion = req.params.idInstitucion;
        console.log(`GET request received for getConvocatoriasPorIdInstitucion, ID de institución: ${idInstitucion}`);
        
        const response = await convocatoriaService.getConvocatoriasPorIdInstitucion(idInstitucion);
        
        res.json({
            method: 'getConvocatoriasPorIdInstitucion',
            code: response.code,
            result: response.result,
            message: response.message,
        });
    } catch (error) {
        console.error('Error getting convocatorias by institution ID:', error);
        res.status(500).json({ error: error.message });
    }
});

// Ruta para obtener InstitutionID por UserID
router.get('/institucion/user/:userId', async (req, res) => {
    try {
        const userId = req.params.userId;
        console.log(`GET request received for getInstitutionIdByUserId, UserID: ${userId}`);
        
        const response = await institucionService.getInstitutionIdByUserId(userId);
        
        res.json({
            method: 'getInstitutionIdByUserId',
            code: response.code,
            result: response.result,
            message: response.message,
        });
    } catch (error) {
        console.error('Error getting InstitutionID by UserID:', error);
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;

const express = require('express');
const { isAuthenticated, checkRole } = require('../services/authService');
const institucionService = require('../services/institucionService');
const convocatoriaService = require('../services/convocatoriaService');
const postulacionService = require('../services/postulacionService');
const router = express.Router();

// Ruta para obtener todas las instituciones
router.get('/institucion', async (req, res) => {
    try {
        console.log('GET request received for getAllInstituciones');
        const response = await institucionService.getAllInstitutions();
        res.json({
            method: 'getAllInstituciones',
            code: response.code,
            result: response.result,
            message: response.message,
        });
    } catch (error) {
        console.error('Error getting all instituciones:', error);
        res.status(500).json({ error: error.message });
    }
});

// Ruta para obtener una institucion por id
router.get('/institucion/:id', async (req, res) => {
    try {
        console.log('GET request received for getInstitucionById');
        const response = await institucionService.getInstitutionById(req.params.id);
        res.json({
            method: 'getInstitucionById',
            code: response.code,
            result: response.result,
            message: response.message,
        });
    } catch (error) {
        console.error('Error getting institucion by id:', error);
        res.status(500).json({ error: error.message });
    }
});

// Ruta para obtener todas las convocatorias
router.get('/convocatoria', async (req, res) => {
    try {
        console.log('GET request received for getAllConvocatorias');
        const response = await convocatoriaService.getAllConvocatorias();
        res.json({
            method: 'getAllConvocatorias',
            code: response.code,
            result: response.result,
            message: response.message,
        });
    } catch (error) {
        console.error('Error getting all convocatorias:', error);
        res.status(500).json({ error: error.message });
    }
});

// Ruta para obtener una convocatoria por id
router.get('/convocatoria/:id', async (req, res) => {
    try {
        console.log('GET request received for getConvocatoriaById');
        const response = await convocatoriaService.getConvocatoriaById(req.params.id);
        res.json({
            method: 'getConvocatoriaById',
            code: response.code,
            result: response.result,
            message: response.message,
        });
    } catch (error) {
        console.error('Error getting convocatoria by id:', error);
        res.status(500).json({ error: error.message });
    }
});

// Ruta para actualizar una convocatoria
router.put('/convocatoria/:id', async (req, res) => {
    try {
        console.log('PUT request received for updateConvocatoria');
        const response = await convocatoriaService.updateConvocatoria(req.params.id, req.body);
        res.json({
            method: 'updateConvocatoria',
            code: response.code,
            result: response.result,
            message: response.message,
        });
    } catch (error) {
        console.error('Error updating convocatoria:', error);
        res.status(500).json({ error: error.message });
    }
});


//ENDPOINTS ESPECIFICOS DE FRONTEND

// Ruta para obtener instituciones aprobadas
router.get('/instituciones/activas', async (req, res) => {
    try {
        console.log('GET request received for getInstitucionesAprobadas');
        const response = await institucionService.getInstitutionApproved();
        res.json({
            method: 'getInstitutionApproved',
            code: response.code,
            result: response.result,
            message: response.message,
        });
    } catch (error) {
        console.error('Error getting instituciones aprobadas:', error);
        res.status(500).json({ error: error.message });
    }
});

// Ruta para obtener instituciones pendientes
router.get('/instituciones/pendientes', async (req, res) => {
    try {
        console.log('GET request received for getInstitucionesPendientes');
        const response = await institucionService.getInstitutionPending();
        res.json({
            method: 'getInstitutionPending',
            code: response.code,
            result: response.result,
            message: response.message,
        });
    } catch (error) {
        console.error('Error getting instituciones pendientes:', error);
        res.status(500).json({ error: error.message });
    }
});

// Ruta para obtener instituciones rechazadas
router.get('/instituciones/rechazadas', async (req, res) => {
    try {
        console.log('GET request received for getInstitucionesRechazadas');
        const response = await institucionService.getInstitutionRejected();
        res.json({
            method: 'getInstitutionRejected',
            code: response.code,
            result: response.result,
            message: response.message,
        });
    } catch (error) {
        console.error('Error getting instituciones rechazadas:', error);
        res.status(500).json({ error: error.message });
    }
});


// Ruta para obtener convocatorias aprobadas
router.get('/convocatorias/activas', async (req, res) => {
    try {
        console.log('GET request received for getConvocatoriasAprobadas');
        const response = await convocatoriaService.getActiveConvocatorias();
        res.json({
            method: 'getConvocatoriaApproved',
            code: response.code,
            result: response.result,
            message: response.message,
        });
    } catch (error) {
        console.error('Error getting convocatorias aprobadas:', error);
        res.status(500).json({ error: error.message });
    }
});

// Ruta para obtener convocatorias pendientes
router.get('/convocatorias/pendientes', async (req, res) => {
    try {
        console.log('GET request received for getConvocatoriasPendientes');
        const response = await convocatoriaService.getPendingConvocatorias();
        res.json({
            method: 'getConvocatoriaPending',
            code: response.code,
            result: response.result,
            message: response.message,
        });
    } catch (error) {
        console.error('Error getting convocatorias pendientes:', error);
        res.status(500).json({ error: error.message });
    }
});

// Ruta para obtener convocatorias rechazadas
router.get('/convocatorias/inactivas', async (req, res) => {
    try {
        console.log('GET request received for getInactiveConvocatorias');
        const response = await convocatoriaService.getInactiveConvocatorias();
        res.json({
            method: 'getInactiveConvocatorias',
            code: response.code,
            result: response.result,
            message: response.message,
        });
    } catch (error) {
        console.error('Error getting convocatorias inactivas:', error);
        res.status(500).json({ error: error.message });
    }
});


router.put('/institucion/activate/:id', async (req, res) => {
    try {
        console.log(`PUT request received for activateInstitution, ID de institución: ${req.params.id}`);
        const response = await institucionService.activateInstitution(req.params.id);
        res.json({
            method: 'activateInstitution',
            code: response.code,
            result: response.result,
            message: response.message,
        });
    } catch (error) {
        console.error('Error activating institution:', error);
        res.status(500).json({ error: error.message });
    }
});
module.exports = router;

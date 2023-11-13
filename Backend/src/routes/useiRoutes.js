const express = require('express');
const { isAuthenticated, checkRole } = require('../services/authService');
const institucionService = require('../services/institucionService');
const convocatoriaService = require('../services/convocatoriaService');
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

module.exports = router;

const express = require('express');
const { isAuthenticated, checkRole } = require('../services/authService');
const convocatoriaService = require('../services/convocatoriaService');
const router = express.Router();

// Ruta para obtener todas las convocatorias para estudiantes
router.get('/convocatoria', isAuthenticated, checkRole('STUDENT'), async (req, res) => {
    try {
        console.log('GET request received for getAllConvocatorias for STUDENT');
        const response = await convocatoriaService.getAllConvocatorias();
        res.json(response);
    } catch (error) {
        console.error('Error getting all convocatorias for STUDENT:', error);
        res.status(500).json({ error: error.message });
    }
});

// Ruta para obtener una convocatoria por ID para estudiantes
router.get('/convocatoria/:id', isAuthenticated, checkRole('STUDENT'), async (req, res) => {
    try {
        console.log(`GET request received for getConvocatoriaById with ID: ${req.params.id} for STUDENT`);
        const response = await convocatoriaService.getConvocatoriaById(req.params.id);
        res.json(response);
    } catch (error) {
        console.error(`Error getting convocatoria by ID: ${req.params.id} for STUDENT:`, error);
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;

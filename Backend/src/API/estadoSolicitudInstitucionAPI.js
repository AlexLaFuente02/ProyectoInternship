const express = require('express');
const router = express.Router();
const estadoSolicitudInstitucionService = require('../services/estadoSolicitudInstitucionService');

router.get('/', async (req, res) => {
    console.log('GET request received for getAllEstadoSolicitudInstitucion');
    const response = await estadoSolicitudInstitucionService.getAllEstadoSolicitudInstitucion();
    res.json({
        method: 'getAllEstadoSolicitudInstitucion',
        code: response.code,
        result: response.result,
        message: response.message,
    });
});

router.get('/:id', async (req, res) => {
    console.log(`GET request received for getEstadoSolicitudInstitucionById with ID: ${req.params.id}`);
    const response = await estadoSolicitudInstitucionService.getEstadoSolicitudInstitucionById(req.params.id);
    res.json({
        method: 'getEstadoSolicitudInstitucionById',
        code: response.code,
        result: response.result,
        message: response.message,
    });
});

router.post('/', async (req, res) => {
    console.log('POST request received for createEstadoSolicitudInstitucion with data:', req.body);
    const response = await estadoSolicitudInstitucionService.createEstadoSolicitudInstitucion(req.body);
    res.json({
        method: 'createEstadoSolicitudInstitucion',
        code: response.code,
        result: response.result,
        message: response.message,
    });
});

router.put('/:id', async (req, res) => {
    console.log(`PUT request received for updateEstadoSolicitudInstitucion with ID: ${req.params.id} and data:`, req.body);
    const response = await estadoSolicitudInstitucionService.updateEstadoSolicitudInstitucion(req.params.id, req.body);
    res.json({
        method: 'updateEstadoSolicitudInstitucion',
        code: response.code,
        result: response.result,
        message: response.message,
    });
});

router.delete('/:id', async (req, res) => {
    console.log(`DELETE request received for deleteEstadoSolicitudInstitucion with ID: ${req.params.id}`);
    const response = await estadoSolicitudInstitucionService.deleteEstadoSolicitudInstitucion(req.params.id);
    res.json({
        method: 'deleteEstadoSolicitudInstitucion',
        code: response.code,
        result: response.result,
        message: response.message,
    });
});

module.exports = router;

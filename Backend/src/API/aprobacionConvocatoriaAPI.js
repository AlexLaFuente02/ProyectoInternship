const express = require('express');
const router = express.Router();
const aprobacionConvocatoriaService = require('../services/aprobacionConvocatoriaService');

router.get('/', async (req, res) => {
    console.log('GET request received for getAllAprobaciones');
    const response = await aprobacionConvocatoriaService.getAllAprobaciones();
    res.json({
        method: 'getAllAprobaciones',
        code: response.code,
        result: response.result,
        message: response.message,
    });
});

router.get('/:id', async (req, res) => {
    console.log(`GET request received for getAprobacionById with ID: ${req.params.id}`);
    const response = await aprobacionConvocatoriaService.getAprobacionById(req.params.id);
    res.json({
        method: 'getAprobacionById',
        code: response.code,
        result: response.result,
        message: response.message,
    });
});

router.post('/', async (req, res) => {
    console.log('POST request received for createAprobacion with data:', req.body);
    const response = await aprobacionConvocatoriaService.createAprobacion(req.body);
    res.json({
        method: 'createAprobacion',
        code: response.code,
        result: response.result,
        message: response.message,
    });
});

router.put('/:id', async (req, res) => {
    console.log(`PUT request received for updateAprobacion with ID: ${req.params.id} and data:`, req.body);
    const response = await aprobacionConvocatoriaService.updateAprobacion(req.params.id, req.body);
    res.json({
        method: 'updateAprobacion',
        code: response.code,
        result: response.result,
        message: response.message,
    });
});

router.delete('/:id', async (req, res) => {
    console.log(`DELETE request received for deleteAprobacion with ID: ${req.params.id}`);
    const response = await aprobacionConvocatoriaService.deleteAprobacion(req.params.id);
    res.json({
        method: 'deleteAprobacion',
        code: response.code,
        result: response.result,
        message: response.message,
    });
});

module.exports = router;

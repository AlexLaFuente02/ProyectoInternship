const express = require('express');
const router = express.Router();
const convocatoriaService = require('../services/convocatoriaService');

router.get('/', async (req, res) => {
    console.log('GET request received for getAllConvocatorias');
    const response = await convocatoriaService.getAllConvocatorias();
    res.json({
        method: 'getAllConvocatorias',
        code: response.code,
        result: response.result,
        message: response.message,
    });
});

router.get('/:id', async (req, res) => {
    console.log(`GET request received for getConvocatoriaById with ID: ${req.params.id}`);
    const response = await convocatoriaService.getConvocatoriaById(req.params.id);
    res.json({
        method: 'getConvocatoriaById',
        code: response.code,
        result: response.result,
        message: response.message,
    });
});

router.post('/', async (req, res) => {
    console.log('POST request received for createConvocatoria with data:', req.body);
    const response = await convocatoriaService.createConvocatoria(req.body);
    res.json({
        method: 'createConvocatoria',
        code: response.code,
        result: response.result,
        message: response.message,
    });
});

router.put('/:id', async (req, res) => {
    console.log(`PUT request received for updateConvocatoria with ID: ${req.params.id} and data:`, req.body);
    const response = await convocatoriaService.updateConvocatoria(req.params.id, req.body);
    res.json({
        method: 'updateConvocatoria',
        code: response.code,
        result: response.result,
        message: response.message,
    });
});

router.delete('/:id', async (req, res) => {
    console.log(`DELETE request received for deleteConvocatoria with ID: ${req.params.id}`);
    const response = await convocatoriaService.deleteConvocatoria(req.params.id);
    res.json({
        method: 'deleteConvocatoria',
        code: response.code,
        result: response.result,
        message: response.message,
    });
});

module.exports = router;

const express = require('express');
const router = express.Router();
const historicoConvocatoriasService = require('../services/historicoConvocatoriasService');

router.get('/', async (req, res) => {
    console.log('GET request received for getAllHistoricosConvocatorias');
    const response = await historicoConvocatoriasService.getAllHistoricos();
    res.json({
        method: 'getAllHistoricosConvocatorias',
        code: response.code,
        result: response.result,
        message: response.message,
    });
});

router.get('/:id_h', async (req, res) => {
    console.log(`GET request received for getHistoricoConvocatoriaById with ID: ${req.params.id_h}`);
    const response = await historicoConvocatoriasService.getHistoricoById(req.params.id_h);
    res.json({
        method: 'getHistoricoConvocatoriaById',
        code: response.code,
        result: response.result,
        message: response.message,
    });
});

module.exports = router;

// API/historicoConvocatoriasAPI.js

const express = require('express');
const router = express.Router();
const historicoService = require('../services/historicoConvocatoriasService');

router.get('/', async (req, res) => {
    console.log('GET request received for getAllHistoricosConvocatorias');
    const response = await historicoService.getAllHistoricos();
    res.json({
        method: 'getAllHistoricosConvocatorias',
        result: response
    });
});

router.get('/:id_h', async (req, res) => {
    console.log(`GET request received for getHistoricoConvocatoriaById with ID: ${req.params.id_h}`);
    const response = await historicoService.getHistoricoById(req.params.id_h);
    res.json({
        method: 'getHistoricoConvocatoriaById',
        result: response
    });
});

module.exports = router;

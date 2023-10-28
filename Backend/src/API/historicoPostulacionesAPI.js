const express = require('express');
const router = express.Router();
const historicoPostulacionesService = require('../services/historicoPostulacionesService');

router.get('/', async (req, res) => {
    console.log('GET request received for getAllHistoricosPostulaciones');
    const response = await historicoPostulacionesService.getAllHistoricosPostulaciones();
    res.json({
        method: 'getAllHistoricosPostulaciones',
        code: response.code,
        result: response.result,
        message: response.message,
    });
});

router.get('/:id_h', async (req, res) => {
    console.log(`GET request received for getHistoricoPostulacionById with ID: ${req.params.id_h}`);
    const response = await historicoPostulacionesService.getHistoricoPostulacionById(req.params.id_h);
    res.json({
        method: 'getHistoricoPostulacionById',
        code: response.code,
        result: response.result,
        message: response.message,
    });
});

module.exports = router;

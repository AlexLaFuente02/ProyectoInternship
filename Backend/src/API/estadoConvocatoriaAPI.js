const express = require('express');
const router = express.Router();
const estadoConvocatoriaService = require('../services/estadoConvocatoriaService');

router.get('/', async (req, res) => {
    const response = await estadoConvocatoriaService.getAllEstadoConvocatorias();
    res.json(response);
});

router.get('/:id', async (req, res) => {
    const response = await estadoConvocatoriaService.getEstadoConvocatoriaById(req.params.id);
    res.json(response);
});

router.post('/', async (req, res) => {
    const response = await estadoConvocatoriaService.createEstadoConvocatoria(req.body);
    res.json(response);
});

router.put('/:id', async (req, res) => {
    const response = await estadoConvocatoriaService.updateEstadoConvocatoria(req.params.id, req.body);
    res.json(response);
});

router.delete('/:id', async (req, res) => {
    const response = await estadoConvocatoriaService.deleteEstadoConvocatoria(req.params.id);
    res.json(response);
});

module.exports = router;

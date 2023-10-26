const express = require('express');
const router = express.Router();
const tiempoAcumplirService = require('../services/tiempoacumplirService');

router.get('/', async (req, res) => {
    const response = await tiempoAcumplirService.getAllTiempoAcumplir();
    res.json(response);
});

router.get('/:id', async (req, res) => {
    const response = await tiempoAcumplirService.getTiempoAcumplirById(req.params.id);
    res.json(response);
});

router.post('/', async (req, res) => {
    const response = await tiempoAcumplirService.createTiempoAcumplir(req.body);
    res.json(response);
});

router.put('/:id', async (req, res) => {
    const response = await tiempoAcumplirService.updateTiempoAcumplir(req.params.id, req.body);
    res.json(response);
});

router.delete('/:id', async (req, res) => {
    const response = await tiempoAcumplirService.deleteTiempoAcumplir(req.params.id);
    res.json(response);
});

module.exports = router;

const express = require('express');
const router = express.Router();
const sedeService = require('../services/sedeService');

router.get('/', async (req, res) => {
    console.log('GET request received for getAll');
    const response = await sedeService.getAll();
    res.json({
        method: 'getAll',
        code: response.code,
        result: response.result,
        message: response.message,
    });
    }
);

router.get('/:id', async (req, res) => {
    console.log(`GET request received for getById with ID: ${req.params.id}`);
    const response = await sedeService.getById(req.params.id);
    res.json({
        method: 'getById',
        code: response.code,
        result: response.result,
        message: response.message,
    });
});

router.post('/', async (req, res) => {
    console.log('POST request received for create with nombresede:', req.body.nombresede);
    const response = await sedeService.create(req.body.nombresede);
    res.json({
        method: 'create',
        code: response.code,
        result: response.result,
        message: response.message,
    });
});

router.put('/:id', async (req, res) => {
    console.log(`PUT request received for update with ID: ${req.params.id}, nombresede: ${req.body.nombresede}`);
    const response = await sedeService.update(req.params.id, req.body.nombresede);
    res.json({
        method: 'update',
        code: response.code,
        result: response.result,
        message: response.message,
    });
});

router.delete('/:id', async (req, res) => {
    console.log(`DELETE request received for remove with ID: ${req.params.id}`);
    const response = await sedeService.remove(req.params.id);
    res.json({
        method: 'remove',
        code: response.code,
        result: response.result,
        message: response.message,
    });
});

module.exports = router;
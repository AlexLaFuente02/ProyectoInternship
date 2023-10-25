const express = require('express');
const router = express.Router();
const usuarioService = require('../services/usuarioService');

router.get('/', async (req, res) => {
    console.log('GET request received for getAllUsers');
    const response = await usuarioService.getAllUsers();
    res.json({
        method: 'getAllUsers',
        code: response.code,
        result: response.result,
        message: response.message,
    });
});

router.get('/:id', async (req, res) => {
    console.log(`GET request received for getUserById with ID: ${req.params.id}`);
    const response = await usuarioService.getUserById(req.params.id);
    res.json({
        method: 'getUserById',
        code: response.code,
        result: response.result,
        message: response.message,
    });
});

router.post('/', async (req, res) => {
    console.log('POST request received for createUser with data:', req.body);
    const response = await usuarioService.createUser(req.body);
    res.json({
        method: 'createUser',
        code: response.code,
        result: response.result,
        message: response.message,
    });
});

router.put('/:id', async (req, res) => {
    console.log(`PUT request received for updateUser with ID: ${req.params.id} and data:`, req.body);
    const response = await usuarioService.updateUser(req.params.id, req.body);
    res.json({
        method: 'updateUser',
        code: response.code,
        result: response.result,
        message: response.message,
    });
});

router.delete('/:id', async (req, res) => {
    console.log(`DELETE request received for deleteUser with ID: ${req.params.id}`);
    const response = await usuarioService.deleteUser(req.params.id);
    res.json({
        method: 'deleteUser',
        code: response.code,
        result: response.result,
        message: response.message,
    });
});

module.exports = router;

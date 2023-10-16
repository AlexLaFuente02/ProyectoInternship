const express = require('express');
const router = express.Router();
const usuarioService = require('../services/UsuarioService');

router.get('/', async (req, res) => {
    console.log('GET request received for getAll');
    const response = await usuarioService.getAll();
    res.json({
        method: 'getAll',
        code: response.code,
        result: response.result,
        message: response.message,
    });
    });

router.get('/:id', async (req, res) => {
    console.log(`GET request received for getById with ID: ${req.params.id}`);
    const response = await usuarioService.getById(req.params.id);
    res.json({
        method: 'getById',
        code: response.code,
        result: response.result,
        message: response.message,
    });
    });

router.post('/', async (req, res) => {
    console.log('POST request received for create with idusuario:', req.body.idusuario);
    const response = await usuarioService.create(req.body.idusuario, req.body.contrasenia, req.body.idtipousuario);
    res.json({
        method: 'create',
        code: response.code,
        result: response.result,
        message: response.message,
    });
    });

router.put('/:id', async (req, res) => {
    console.log(`PUT request received for update with ID: ${req.params.id}, idusuario: ${req.body.idusuario}, contrasenia: ${req.body.contrasenia}, idtipousuario: ${req.body.idtipousuario}`);
    const response = await usuarioService.update(req.params.id, req.body.idusuario, req.body.contrasenia, req.body.idtipousuario);
    res.json({
        method: 'update',
        code: response.code,
        result: response.result,
        message: response.message,
    });
    });

router.delete('/:id', async (req, res) => {
    console.log(`DELETE request received for remove with ID: ${req.params.id}`);
    const response = await usuarioService.remove(req.params.id);
    res.json({
        method: 'remove',
        code: response.code,
        result: response.result,
        message: response.message,
    });
    });

module.exports = router;
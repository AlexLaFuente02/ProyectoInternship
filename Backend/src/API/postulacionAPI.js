const express = require('express');
const router = express.Router();
const postulacionService = require('../services/postulacionService');

router.get('/', async (req, res) => {
    console.log('GET request received for getAllPostulaciones');
    const response = await postulacionService.getAllPostulaciones();
    res.json({
        method: 'getAllPostulaciones',
        code: response.code,
        result: response.result,
        message: response.message,
    });
});

router.get('/:id', async (req, res) => {
    console.log(`GET request received for getPostulacionById with ID: ${req.params.id}`);
    const response = await postulacionService.getPostulacionById(req.params.id);
    res.json({
        method: 'getPostulacionById',
        code: response.code,
        result: response.result,
        message: response.message,
    });
});

router.post('/', async (req, res) => {
    console.log('POST request received for createPostulacion with data:', req.body);
    const response = await postulacionService.createPostulacion(req.body);
    res.json({
        method: 'createPostulacion',
        code: response.code,
        result: response.result,
        message: response.message,
    });
});

router.put('/:id', async (req, res) => {
    console.log(`PUT request received for updatePostulacion with ID: ${req.params.id} and data:`, req.body);
    const response = await postulacionService.updatePostulacion(req.params.id, req.body);
    res.json({
        method: 'updatePostulacion',
        code: response.code,
        result: response.result,
        message: response.message,
    });
});

router.delete('/:id', async (req, res) => {
    console.log(`DELETE request received for deletePostulacion with ID: ${req.params.id}`);
    const response = await postulacionService.deletePostulacion(req.params.id);
    res.json({
        method: 'deletePostulacion',
        code: response.code,
        result: response.result,
        message: response.message,
    });
});

module.exports = router;

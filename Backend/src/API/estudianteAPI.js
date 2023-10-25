const express = require('express');
const router = express.Router();
const estudianteService = require('../services/estudianteService');

router.get('/', async (req, res) => {
    console.log('GET request received for getAllStudents');
    const response = await estudianteService.getAllStudents();
    res.json({
        method: 'getAllStudents',
        code: response.code,
        result: response.result,
        message: response.message,
    });
});

router.get('/:id', async (req, res) => {
    console.log(`GET request received for getStudentById with ID: ${req.params.id}`);
    const response = await estudianteService.getStudentById(req.params.id);
    res.json({
        method: 'getStudentById',
        code: response.code,
        result: response.result,
        message: response.message,
    });
});

router.post('/', async (req, res) => {
    console.log('POST request received for createStudent with data:', req.body);
    const response = await estudianteService.createStudent(req.body);
    res.json({
        method: 'createStudent',
        code: response.code,
        result: response.result,
        message: response.message,
    });
});

router.put('/:id', async (req, res) => {
    console.log(`PUT request received for updateStudent with ID: ${req.params.id} and data:`, req.body);
    const response = await estudianteService.updateStudent(req.params.id, req.body);
    res.json({
        method: 'updateStudent',
        code: response.code,
        result: response.result,
        message: response.message,
    });
});

router.delete('/:id', async (req, res) => {
    console.log(`DELETE request received for deleteStudent with ID: ${req.params.id}`);
    const response = await estudianteService.deleteStudent(req.params.id);
    res.json({
        method: 'deleteStudent',
        code: response.code,
        result: response.result,
        message: response.message,
    });
});

module.exports = router;

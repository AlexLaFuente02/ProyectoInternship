const express = require('express');
const router = express.Router();
const institucionService = require('../services/institucionService');

router.get('/', async (req, res) => {
    console.log('GET request received for getAllInstitutions');
    const response = await institucionService.getAllInstitutions();
    res.json({
        method: 'getAllInstitutions',
        code: response.code,
        result: response.result,
        message: response.message,
    });
});

router.get('/:id', async (req, res) => {
    console.log(`GET request received for getInstitutionById with ID: ${req.params.id}`);
    const response = await institucionService.getInstitutionById(req.params.id);
    res.json({
        method: 'getInstitutionById',
        code: response.code,
        result: response.result,
        message: response.message,
    });
});

router.post('/', async (req, res) => {
    console.log('POST request received for createInstitution with data:', req.body);
    const response = await institucionService.createInstitution(req.body);
    res.json({
        method: 'createInstitution',
        code: response.code,
        result: response.result,
        message: response.message,
    });
});

router.put('/:id', async (req, res) => {
    console.log(`PUT request received for updateInstitution with ID: ${req.params.id} and data:`, req.body);
    const response = await institucionService.updateInstitution(req.params.id, req.body);
    res.json({
        method: 'updateInstitution',
        code: response.code,
        result: response.result,
        message: response.message,
    });
});

router.delete('/:id', async (req, res) => {
    console.log(`DELETE request received for deleteInstitution with ID: ${req.params.id}`);
    const response = await institucionService.deleteInstitution(req.params.id);
    res.json({
        method: 'deleteInstitution',
        code: response.code,
        result: response.result,
        message: response.message,
    });
});

module.exports = router;

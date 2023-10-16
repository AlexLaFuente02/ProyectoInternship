const express = require('express');
const router = express.Router();
const sectorPertenenciaService = require('../services/sectorPertenenciaService');

router.get('/', async (req, res) => {
  console.log('GET request received for getAll');
  const response = await sectorPertenenciaService.getAll();
  res.json({
    method: 'getAll',
    code: response.code,
    result: response.result,
    message: response.message,
  });
});

router.get('/:id', async (req, res) => {
  console.log(`GET request received for getById with ID: ${req.params.id}`);
  const response = await sectorPertenenciaService.getById(req.params.id);
  res.json({
    method: 'getById',
    code: response.code,
    result: response.result,
    message: response.message,
  });
});

router.post('/', async (req, res) => {
  console.log('POST request received for create with nombresectorpertenencia:', req.body.nombresectorpertenencia);
  const response = await sectorPertenenciaService.create(req.body.nombresectorpertenencia);
  res.json({
    method: 'create',
    code: response.code,
    result: response.result,
    message: response.message,
  });
});

router.put('/:id', async (req, res) => {
  console.log(`PUT request received for update with ID: ${req.params.id}, nombresectorpertenencia: ${req.body.nombresectorpertenencia}`);
  const response = await sectorPertenenciaService.update(req.params.id, req.body.nombresectorpertenencia);
  res.json({
    method: 'update',
    code: response.code,
    result: response.result,
    message: response.message,
  });
});

router.delete('/:id', async (req, res) => {
  console.log(`DELETE request received for remove with ID: ${req.params.id}`);
  const response = await sectorPertenenciaService.remove(req.params.id);
  res.json({
    method: 'remove',
    code: response.code,
    result: response.result,
    message: response.message,
  });
});

module.exports = router;

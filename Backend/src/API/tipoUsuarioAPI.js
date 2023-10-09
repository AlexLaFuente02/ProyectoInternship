const express = require('express');
const router = express.Router();
const tipoUsuarioService = require('../services/tipoUsuarioService');

// Obtener todos los tipos de usuario
router.get('/', async (req, res) => {
  try {
    const tiposUsuarios = await tipoUsuarioService.getAll();
    res.json(tiposUsuarios);
  } catch (error) {
    console.error('Error al obtener todos los tipos de usuario:', error);
    res.status(500).send('Error al obtener todos los tipos de usuario');
  }
});

// Obtener un tipo de usuario por su ID
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const tipoUsuario = await tipoUsuarioService.getById(id);
    res.json(tipoUsuario);
  } catch (error) {
    console.error('Error al obtener el tipo de usuario por ID:', error);
    res.status(500).send('Error al obtener el tipo de usuario por ID');
  }
});

// Crear un nuevo tipo de usuario
router.post('/', async (req, res) => {
  try {
    const { tipo } = req.body;
    const nuevoTipoUsuario = await tipoUsuarioService.create(tipo);
    res.json(nuevoTipoUsuario);
  } catch (error) {
    console.error('Error al crear un tipo de usuario:', error);
    res.status(500).send('Error al crear un tipo de usuario');
  }
});

// Actualizar un tipo de usuario por su ID
router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { tipo } = req.body;
    const tipoUsuarioActualizado = await tipoUsuarioService.update(id, tipo);
    res.json(tipoUsuarioActualizado);
  } catch (error) {
    console.error('Error al actualizar el tipo de usuario:', error);
    res.status(500).send('Error al actualizar el tipo de usuario');
  }
});

// Eliminar un tipo de usuario por su ID
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const mensaje = await tipoUsuarioService.remove(id);
    res.json({ message: mensaje });
  } catch (error) {
    console.error('Error al eliminar el tipo de usuario:', error);
    res.status(500).send('Error al eliminar el tipo de usuario');
  }
});

module.exports = router;

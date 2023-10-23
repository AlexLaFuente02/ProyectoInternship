// CarreraAPI.js

const express = require("express");
const router = express.Router();
const carreraService = require("../services/carreraService");

// Obtener todas las carreras
router.get("/", async (req, res) => {
  try {
    const carreras = await carreraService.getAll();
    res.json(carreras);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Obtener una carrera por ID
router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const carrera = await carreraService.getById(id);
    res.json(carrera);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Crear una nueva carrera
router.post("/", async (req, res) => {
  const { nombrecarrera } = req.body;
  try {
    const nuevaCarrera = await carreraService.create(nombrecarrera);
    res.status(201).json(nuevaCarrera);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Actualizar una carrera por ID
router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { nombrecarrera } = req.body;
  try {
    const carreraActualizada = await carreraService.update(id, nombrecarrera);
    res.json(carreraActualizada);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Eliminar una carrera por ID
router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    await carreraService.remove(id);
    res.status(204).end();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;

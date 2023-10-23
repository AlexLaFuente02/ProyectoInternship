// CarreraService.js

const CarreraENT = require("../ENT/carreraENT");
const CarreraDTO = require("../DTO/carreraDTO");

const getAll = async () => {
  try {
    const carreras = await CarreraENT.findAll();
    const carrerasDTO = carreras.map((carrera) => new CarreraDTO(carrera.id, carrera.nombrecarrera));
    return carrerasDTO;
  } catch (error) {
    throw new Error("Error al obtener todas las carreras");
  }
};

const getById = async (id) => {
  try {
    const carrera = await CarreraENT.findByPk(id);
    if (!carrera) {
      throw new Error(`Carrera con ID: ${id} no encontrada`);
    }
    const carreraDTO = new CarreraDTO(carrera.id, carrera.nombrecarrera);
    return carreraDTO;
  } catch (error) {
    throw new Error(`Error al obtener la carrera con ID: ${id}`);
  }
};

const create = async (nombrecarrera) => {
  try {
    const nuevaCarrera = await CarreraENT.create({ nombrecarrera });
    const carreraDTO = new CarreraDTO(nuevaCarrera.id, nuevaCarrera.nombrecarrera);
    return carreraDTO;
  } catch (error) {
    throw new Error("Error al crear la carrera");
  }
};

const update = async (id, nombrecarrera) => {
  try {
    const carrera = await CarreraENT.findByPk(id);
    if (!carrera) {
      throw new Error(`Carrera con ID: ${id} no encontrada`);
    }
    carrera.nombrecarrera = nombrecarrera;
    await carrera.save();
    const carreraDTO = new CarreraDTO(carrera.id, carrera.nombrecarrera);
    return carreraDTO;
  } catch (error) {
    throw new Error(`Error al actualizar la carrera con ID: ${id}`);
  }
};

const remove = async (id) => {
  try {
    const carrera = await CarreraENT.findByPk(id);
    if (!carrera) {
      throw new Error(`Carrera con ID: ${id} no encontrada`);
    }
    await carrera.destroy();
  } catch (error) {
    throw new Error(`Error al eliminar la carrera con ID: ${id}`);
  }
};

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove,
};

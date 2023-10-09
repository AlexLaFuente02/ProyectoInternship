const TipoUsuarioENT = require('../ENT/tipoUsuarioENT');

const getAll = async () => {
  try {
    const tiposUsuarios = await TipoUsuarioENT.findAll();
    return tiposUsuarios;
  } catch (error) {
    throw error;
  }
};

const getById = async (id) => {
  try {
    const tipoUsuario = await TipoUsuarioENT.findByPk(id);
    if (!tipoUsuario) {
      throw new Error('Tipo de usuario no encontrado');
    }
    return tipoUsuario;
  } catch (error) {
    throw error;
  }
};

const create = async (tipo) => {
  try {
    const nuevoTipoUsuario = await TipoUsuarioENT.create({ tipo });
    return nuevoTipoUsuario;
  } catch (error) {
    throw error;
  }
};

const update = async (id, tipo) => {
  try {
    const tipoUsuario = await TipoUsuarioENT.findByPk(id);
    if (!tipoUsuario) {
      throw new Error('Tipo de usuario no encontrado');
    }

    tipoUsuario.tipo = tipo;
    await tipoUsuario.save();

    return tipoUsuario;
  } catch (error) {
    throw error;
  }
};

const remove = async (id) => {
  try {
    const tipoUsuario = await TipoUsuarioENT.findByPk(id);
    if (!tipoUsuario) {
      throw new Error('Tipo de usuario no encontrado');
    }

    await tipoUsuario.destroy();

    return 'Tipo de usuario eliminado con éxito';
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove,
};

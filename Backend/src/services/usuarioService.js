const UsuarioDTO = require('../DTO/UsuarioDTO');
const TipoUsuarioDTO = require('../DTO/TipoUsuarioDTO');
const Usuario = require("../ENT/UsuarioENT");
const ResponseDTO = require("../DTO/ResponseDTO");
const TipoUsuario = require('../ENT/TipoUsuarioENT');
// TRIGGER
const HistoricoUsuarioService = require("../services/historicoUsuarioService");

const bcrypt = require('bcrypt');

const getAllUsers = async () => {
    console.log('Obteniendo todos los usuarios...');
    try {
        const usuarios = await Usuario.findAll({
            include: [{ model: TipoUsuario, as: 'tipousuario' }]
        });
        const usuariosDTO = usuarios.map(usuario => {
            const tipoUsuarioDTO = new TipoUsuarioDTO(usuario.tipousuario.id, usuario.tipousuario.tipo);
            return new UsuarioDTO(usuario.id, usuario.idusuario, tipoUsuarioDTO);
        });
        console.log('Usuarios obtenidos correctamente.');
        return new ResponseDTO('U-0000', usuariosDTO, 'Usuarios obtenidos correctamente');
    } catch (error) {
        console.error('Error al obtener todos los usuarios:', error);
        return new ResponseDTO('U-1001', null, `Error al obtener todos los usuarios: ${error}`);
    }
};

const getUserById = async (id) => {
    console.log(`Obteniendo el usuario con ID: ${id}...`);
    try {
        const usuario = await Usuario.findByPk(id, {
            include: [{ model: TipoUsuario, as: 'tipousuario' }]
        });
        if (!usuario) {
            console.log(`Usuario con ID: ${id} no encontrado.`);
            return new ResponseDTO('U-1002', null, 'Usuario no encontrado');
        }
        const tipoUsuarioDTO = new TipoUsuarioDTO(usuario.tipousuario.id, usuario.tipousuario.tipo);
        const usuarioDTO = new UsuarioDTO(usuario.id, usuario.idusuario, tipoUsuarioDTO);
        console.log('Usuario obtenido correctamente.');
        return new ResponseDTO('U-0000', usuarioDTO, 'Usuario obtenido correctamente');
    } catch (error) {
        console.error(`Error al obtener el usuario con ID: ${id}.`, error);
        return new ResponseDTO('U-1002', null, `Error al obtener el usuario: ${error}`);
    }
};

const createUser = async (userData) => {
    console.log('Creando un nuevo usuario...');
    try {
        // Hashea la contraseña antes de almacenarla en la base de datos
        const hashedPassword = await bcrypt.hash(userData.contrasenia, 10);

        const nuevoUsuario = await Usuario.create({
            idusuario: userData.idusuario,
            contrasenia: hashedPassword, // Almacenamos la contraseña hasheada
            tipousuario_id: userData.tipousuario.id,
        });
        const tipoUsuarioDTO = new TipoUsuarioDTO(userData.tipousuario.id, userData.tipousuario.tipo);
        const nuevoUsuarioDTO = new UsuarioDTO(nuevoUsuario.id, nuevoUsuario.idusuario, tipoUsuarioDTO);
        await HistoricoUsuarioService.insertHistoricoUsuario(nuevoUsuarioDTO);
        console.log('Usuario creado correctamente.');
        return new ResponseDTO('U-0000', nuevoUsuarioDTO, 'Usuario creado correctamente');
    } catch (error) {
        console.error('Error al crear el usuario:', error);
        return new ResponseDTO('U-1003', null, `Error al crear el usuario: ${error}`);
    }
};

const updateUser = async (id, userData) => {
    console.log(`Actualizando el usuario con ID: ${id}...`);
    try {
        const usuario = await Usuario.findByPk(id);
        if (!usuario) {
            console.log(`Usuario con ID: ${id} no encontrado.`);
            return new ResponseDTO('U-1004', null, 'Usuario no encontrado');
        }

        // Hashea la contraseña antes de actualizarla en la base de datos
        const hashedPassword = await bcrypt.hash(userData.contrasenia, 10);

        await usuario.update({
            idusuario: userData.idusuario,
            contrasenia: hashedPassword, // Actualizamos con la contraseña hasheada
            tipousuario_id: userData.tipousuario.id,
        });
        console.log('Usuario actualizado correctamente.');
        return new ResponseDTO('U-0000', null, 'Usuario actualizado correctamente');
    } catch (error) {
        console.error(`Error al actualizar el usuario con ID: ${id}.`, error);
        return new ResponseDTO('U-1004', null, `Error al actualizar el usuario: ${error}`);
    }
};

const deleteUser = async (id) => {
    console.log(`Eliminando el usuario con ID: ${id}...`);
    try {
        const usuario = await Usuario.findByPk(id);
        if (!usuario) {
            console.log(`Usuario con ID: ${id} no encontrado.`);
            return new ResponseDTO('U-1005', null, 'Usuario no encontrado');
        }
        await usuario.destroy();
        console.log('Usuario eliminado correctamente.');
        return new ResponseDTO('U-0000', null, 'Usuario eliminado correctamente');
    } catch (error) {
        console.error(`Error al eliminar el usuario con ID: ${id}.`, error);
        return new ResponseDTO('U-1005', null, `Error al eliminar el usuario: ${error}`);
    }
};

module.exports = {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
};

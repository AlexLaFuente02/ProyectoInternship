const UsuarioDTO = require('../DTO/UsuarioDTO');
const TipoUsuarioDTO = require('../DTO/TipoUsuarioDTO'); // Asegúrate de importar el DTO TipoUsuario
const Usuario = require("../ENT/UsuarioENT");
const ResponseDTO = require("../DTO/ResponseDTO");
const TipoUsuario = require('../ENT/TipoUsuarioENT');

const getAll = async () => {
    const log = [];
    log.push('Obteniendo todos los usuarios...');
    try {
        const usuarios = await Usuario.findAll({
            include: [{ model: TipoUsuario, as: 'tipousuario' }]
        });
        log.push('Usuarios obtenidos correctamente.');

        // Mapea el resultado a los DTO correspondientes
        const usuariosDTO = usuarios.map(usuario => {
            const tipoUsuarioDTO = new TipoUsuarioDTO(usuario.tipousuario.id, usuario.tipousuario.tipo);
            return new UsuarioDTO(usuario.id, usuario.idusuario, tipoUsuarioDTO);
        });

        return new ResponseDTO('U-0000', usuariosDTO, 'Usuarios obtenidos correctamente', log);
    } catch (error) {
        log.push(`Error al obtener todos los usuarios: ${error.message}`);
        console.error('Error al obtener todos los usuarios:', error);
        return new ResponseDTO('U-1001', null, 'Error al obtener todos los usuarios', log);
    }
};

const getById = async (id) => {
    console.log(`Obteniendo usuario con ID: ${id}...`);
    try {
        const usuario = await Usuario.findByPk(id, {
            include: [{ model: TipoUsuario, as: 'tipousuario' }]
        });
        console.log('Usuario obtenido correctamente.');

        // Mapea el resultado a los DTO correspondientes
        const tipoUsuarioDTO = new TipoUsuarioDTO(usuario.tipousuario.id, usuario.tipousuario.tipo);
        const usuarioDTO = new UsuarioDTO(usuario.id, usuario.idusuario, tipoUsuarioDTO);

        return new ResponseDTO('U-0000', usuarioDTO, 'Usuario obtenido correctamente');
    } catch (error) {
        console.error(`Error al obtener el usuario con ID: ${id}.`, error);
        return new ResponseDTO('U-1002', null, 'Error al obtener el usuario');
    }
};

const create = async (idusuario, contrasenia, tipousuario) => {
    console.log(`Creando un nuevo usuario: ${idusuario}...`);
    console.log("Contraseña: " + contrasenia);
    console.log("Tipo de usuario: " + tipousuario.id);

    try {
        // Extrae el ID del objeto tipousuario
        const tipousuarioId = tipousuario.id;
        // Crea el nuevo usuario
        const nuevoUsuario = await Usuario.create({
            idusuario,
            contrasenia,
            tipousuario_id: tipousuarioId,
        });

        // Mapea el resultado a los DTO correspondientes
        const tipoUsuarioDTO = new TipoUsuarioDTO(tipousuarioId, tipousuario.tipo);
        const nuevoUsuarioDTO = new UsuarioDTO(nuevoUsuario.id, nuevoUsuario.idusuario, tipoUsuarioDTO);

        console.log("Usuario creado correctamente.");
        return new ResponseDTO("U-0000", nuevoUsuarioDTO, "Usuario creado correctamente");
    } catch (error) {
        console.error(`Error al crear el usuario: ${idusuario}.`, error);
        return new ResponseDTO("U-1003", null, "Error al crear el usuario");
    }
};

const update = async (id, idusuario, contrasenia, tipousuario) => {
    console.log(`Actualizando usuario con ID: ${id}...`);
    try {
        // Extrae el ID del objeto tipousuario
        const tipousuarioId = tipousuario.id;
        // Actualiza el usuario
        const usuarioActualizado = await Usuario.update({
            idusuario,
            contrasenia,
            tipousuario_id: tipousuarioId,
        }, 
        {
            where: { id },
        });

        // Mapea el resultado a los DTO correspondientes
        const usuarioActualizadoDTO = new UsuarioDTO(id, idusuario, new TipoUsuarioDTO(tipousuarioId, tipousuario.tipo));

        console.log("Usuario actualizado correctamente.");
        return new ResponseDTO("U-0000", usuarioActualizadoDTO, "Usuario actualizado correctamente");
    } catch (error) {
        console.error(`Error al actualizar el usuario con ID: ${id}.`, error);
        return new ResponseDTO("U-1004", null, "Error al actualizar el usuario");
    }
};

const remove = async (id) => {
    console.log(`Eliminando usuario con ID: ${id}...`);
    try {
        // Elimina el usuario
        await Usuario.destroy({
            where: { id },
        });

        console.log("Usuario eliminado correctamente.");
        return new ResponseDTO("U-0000", null, "Usuario eliminado correctamente");
    } catch (error) {
        console.error(`Error al eliminar el usuario con ID: ${id}.`, error);
        return new ResponseDTO("U-1005", null, "Error al eliminar el usuario");
    }
};

module.exports = {
    getAll,
    getById,
    create,
    update,
    remove,
};

const Usuario = require("../ENT/UsuarioENT");
const UsuarioDTO = require("../DTO/UsuarioDTO");
const ResponseDTO = require("../DTO/ResponseDTO");

const getAll = async () => {
    console.log("Obteniendo todos los usuarios...");
    try {
        const usuarios = await Usuario.findAll();
        // Mapear los resultados a objetos UsuarioDTO
        const usuariosDTO = usuarios.map(
        (usuario) =>
            new UsuarioDTO(usuario.id, usuario.idusuario, usuario.idtipousuario)
        );
        console.log("Usuarios obtenidos correctamente.");
        return new ResponseDTO(
        "U-0000",
        usuariosDTO,
        "Usuarios obtenidos correctamente"
        );
    } catch (error) {
        console.error("Error al obtener todos los usuarios:", error);
        return new ResponseDTO("U-1001", null, "Error al obtener todos los usuarios");
    }
    };

const getById = async (id) => {
    console.log(`Obteniendo el usuario con ID: ${id}...`);
    try {
        const usuario = await Usuario.findByPk(id);
        if (!usuario) {
        console.log(`Usuario con ID: ${id} no encontrado.`);
        return new ResponseDTO("U-1002", null, "Usuario no encontrado");
        }
        console.log("Usuario obtenido correctamente.");
        return new ResponseDTO(
        "U-0000",
        usuario,
        "Usuario obtenido correctamente"
        );
    } catch (error) {
        console.error(`Error al obtener el usuario con ID: ${id}.`, error);
        return new ResponseDTO("U-1002", null, "Error al obtener el usuario");
    }
    };

const create = async (idusuario, contrasenia, idtipousuario) => {
    console.log(`Creando un nuevo usuario: ${idusuario}...`);
    try {
        const nuevoUsuario = await Usuario.create({ idusuario, contrasenia, idtipousuario });
        console.log("Usuario creado correctamente.");
        return new ResponseDTO(
        "U-0000",
        nuevoUsuario,
        "Usuario creado correctamente"
        );
    } catch (error) {
        console.error(`Error al crear el usuario: ${idusuario}.`, error);
        return new ResponseDTO("U-1003", null, "Error al crear el usuario");
    }
};

//En el update puede no mandar todos los parametros, id y un body
const update = async (id, idusuario, contrasenia, idtipousuario) => {
    console.log(`Actualizando el usuario con ID: ${id}...`);
    try {
        const usuario = await Usuario.findByPk(id);
        if (!usuario) {
        console.log(`Usuario con ID: ${id} no encontrado.`);
        return new ResponseDTO("U-1004", null, "Usuario no encontrado");
        }

        usuario.idusuario = idusuario;
        usuario.contrasenia = contrasenia;
        usuario.idtipousuario = idtipousuario;
        await usuario.save();

        console.log("Usuario actualizado correctamente.");
        return new ResponseDTO(
        "U-0000",
        usuario,
        "Usuario actualizado correctamente"
        );
    } catch (error) {
        console.error(`Error al actualizar el usuario con ID: ${id}.`, error);
        return new ResponseDTO("U-1004", null, "Error al actualizar el usuario");
    }
};

const remove = async (id) => {
    console.log(`Eliminando el usuario con ID: ${id}...`);
    try {
        const usuario = await Usuario.findByPk(id);
        if (!usuario) {
        console.log(`Usuario con ID: ${id} no encontrado.`);
        return new ResponseDTO("U-1005", null, "Usuario no encontrado");
        }

        await usuario.destroy();

        console.log("Usuario eliminado correctamente.");
        return new ResponseDTO(
        "U-0000",
        usuario,
        "Usuario eliminado correctamente"
        );
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

const Usuario = require("../ENT/UsuarioENT");
const ResponseDTO = require("../DTO/ResponseDTO");
//Usar DTO Usuario
const TipoUsuario = require('../ENT/TipoUsuarioENT');

const getAll = async () => {
    const log = [];
    log.push('Obteniendo todos los usuarios...');
    try {
        const usuarios = await Usuario.findAll({
            include: [{ model: TipoUsuario, as: 'tipoUsuario' }]
        });
        log.push('Usuarios obtenidos correctamente.');
        return new ResponseDTO('U-0000', usuarios, 'Usuarios obtenidos correctamente', log);
    } catch (error) {
        log.push(`Error al obtener todos los usuarios: ${error.message}`);
        console.error('Error al obtener todos los usuarios:', error);
        return new ResponseDTO('U-1001', null, 'Error al obtener todos los usuarios', log);
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
        return new ResponseDTO("U-0000", usuario, "Usuario obtenido correctamente");
    } catch (error) {
        console.error(`Error al obtener el usuario con ID: ${id}.`, error);
        return new ResponseDTO("U-1002", null, "Error al obtener el usuario");
    }
};

const create = async (idusuario, contrasenia, tipoUsuario) => {
    console.log(`Creando un nuevo usuario: ${idusuario}...`);
    try {
      const tipousuario_id = tipoUsuario.id; // Extrae el ID del objeto tipoUsuario
      const nuevoUsuario = await Usuario.create({ idusuario, contrasenia, tipousuario_id });
      
      // Obtenemos el objeto completo del tipo de usuario asociado
      const tipoUsuario = await TipoUsuario.findByPk(tipousuario_id);
      
      // Agregamos el objeto completo de tipoUsuario al usuario
      nuevoUsuario.tipoUsuario = tipoUsuario;
  
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

const update = async (id, idusuario, contrasenia, tipousuario_id) => {
    console.log(`Actualizando el usuario con ID: ${id}...`);
    try {
        // Validación de datos de entrada
        if (!idusuario && !contrasenia && !tipousuario_id) {
            return new ResponseDTO("U-1004", null, "No se proporcionaron datos para actualizar");
        }

        const usuario = await Usuario.findByPk(id);
        if (!usuario) {
            console.log(`Usuario con ID: ${id} no encontrado.`);
            return new ResponseDTO("U-1004", null, "Usuario no encontrado");
        }

        // Actualización de datos si se proporcionaron
        if (idusuario) usuario.idusuario = idusuario;
        if (contrasenia) usuario.contrasenia = contrasenia;
        if (tipousuario_id) usuario.tipousuario_id = tipousuario_id;

        await usuario.save();

        console.log("Usuario actualizado correctamente.");
        return new ResponseDTO("U-0000", usuario, "Usuario actualizado correctamente");
    } catch (error) {
        console.error(`Error al actualizar el usuario con ID: ${id}.`, error);
        return new ResponseDTO("U-1004", null, "Error al actualizar el usuario");
    }
};

module.exports = {
    getAll,
    getById,
    create,
    update,
};

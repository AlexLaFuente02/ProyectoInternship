const ResponseDTO = require("../DTO/ResponseDTO");
const HistoricoUsuarioENT = require("../ENT/HistoricoUsuarioENT");
const HistoricoUsuarioDTO = require("../DTO/HistoricoUsuarioDTO");
const UsuarioENT = require("../ENT/UsuarioENT");
const UsuarioDTO = require("../DTO/UsuarioDTO");
const TipoUsuarioENT = require("../ENT/TipoUsuarioENT");
const TipoUsuarioDTO = require("../DTO/TipoUsuarioDTO");

const insertHistoricoUsuario = async (userData) => {
  console.log("Insertando en historico_usuario...");
  try {
    await HistoricoUsuarioENT.create({
      id_u: userData.id,
      idusuario: userData.idusuario,
      contrasenia: userData.contrasenia,
      tipousuario_id: userData.tipousuario.id,
    });
    console.log("Usuario registrado en historico_usuario correctamente.");
  } catch (error) {
    console.error("Error al registrar Usuario en historico_usuario: ", error);
    throw error;
  }
};

const getAllUserHistory = async () => {
  console.log("Obteniendo todo el Historial de Usuarios...");
  try {
    const userHistories = await HistoricoUsuarioENT.findAll({
      include: [
        { model: UsuarioENT, as: "usuario" },
        { model: TipoUsuarioENT, as: "tipousuario" },
      ],
    });
    return {
      code: "HU-0000",
      result: userHistories.map(
        (userHistory) =>
          new HistoricoUsuarioDTO(
            userHistory.id_h,
            userHistory.id_u,
            userHistory.idusuario,
            userHistory.contrasenia,
            new TipoUsuarioDTO(
              userHistory.tipousuario.id,
              userHistory.tipousuario.tipo
            )
          )
      ),
      message: "Registros históricos de usuarios obtenidos correctamente.",
    };
  } catch (error) {
    console.error(
      `Error al obtener todos los registros Históricos de Usuarios: ${error}.`
    );
    return new ResponseDTO(
      "HU-1000",
      null,
      `Error al obtener todos los registros Históricos de Usuarios: ${error}.`
    );
  }
};

const getUserHistoryById = async (id_h) => {
  console.log(`Obteniendo Historial de Usuario con ID: '${id_h}'...`);
  try {
    const userHistory = await HistoricoUsuarioENT.findByPk(id_h, {
      include: [
        { model: UsuarioENT, as: "usuario" },
        { model: TipoUsuarioENT, as: "tipousuario" },
      ],
    });
    if (!userHistory) {
      console.log(`El Historial de Usuario con ID: '${id_h}' no existe.`);
      return new ResponseDTO(
        "HU-2000",
        null,
        `El Historial de Usuario con ID: '${id_h}' no existe.`
      );
    }
    return {
      code: "HU-0000",
      result: new HistoricoUsuarioDTO(
        userHistory.id_h,
        new UsuarioDTO(
          userHistory.usuario.id,
          userHistory.usuario.idusuario,
          userHistory.usuario.tipousuario_id
        ),
        userHistory.idusuario,
        userHistory.contrasenia,
        new TipoUsuarioDTO(
          userHistory.tipousuario.id,
          userHistory.tipousuario.tipo
        )
      ),
      message: `Historial de Usuario con ID: '${id_h}' obtenido correctamente.`,
    };
  } catch (error) {
    console.error(
      `Error al obtener el Historial de Usuario con ID: '${id_h}': ${error}`
    );
    return new ResponseDTO(
      "HU-2000",
      null,
      `Error al obtener el Historial de Usuario con ID: '${id_h}': ${error}`
    );
  }
};

module.exports = {
  insertHistoricoUsuario,
  getAllUserHistory,
  getUserHistoryById,
};

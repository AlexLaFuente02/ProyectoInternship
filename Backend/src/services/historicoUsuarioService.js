const ResponseDTO = require("../DTO/ResponseDTO");
const HistoricoUsuarioENT = require("../ENT/HistoricoUsuarioENT");
const HistoricoUsuarioDTO = require("../DTO/HistoricoUsuarioDTO");

const getAllUserHistory = async () => {
  console.log("Obteniendo todo el Historial de Usuarios...");
  try {
    const userHistories = await HistoricoUsuarioENT.findAll();
    const historicoUsuarioDTO = userHistories.map(
      (userHistory) =>
        new HistoricoUsuarioDTO(
          userHistory.id_h,
          userHistory.id_u,
          userHistory.idusuario,
          userHistory.contrasenia,
          userHistory.tipousuario_id
        )
    );
    console.log("Historial de Usuarios obtenido correctamente.");
    return new ResponseDTO(
      "HU-0000",
      historicoUsuarioDTO,
      "Historial de Usuarios obtenido correctamente."
    );
  } catch (error) {
    console.error(`Error al obtener todo el Historial de Usuarios: ${error}.`);
    return new ResponseDTO(
      "HU-1000",
      null,
      `Error al obtener todo el Historial de Usuarios: ${error}.`
    );
  }
};

const getUserHistoryById = async (id) => {
  console.log(`Obteniendo Historial de Usuario con ID: '${id}'...`);
  try {
    const userHistory = await HistoricoUsuarioENT.findByPk(id);
    if (!userHistory) {
      console.log(`El Historial de Usuario con ID: '${id}' no existe.`);
      return new ResponseDTO(
        "HU-2000",
        null,
        `El Historial de Usuario con ID: '${id}' no existe.`
      );
    }
    console.log(`Historial de Usuario con ID: '${id}' obtenido correctamente.`);
    return new ResponseDTO(
      "HU-0000",
      new HistoricoUsuarioDTO(
        userHistory.id_h,
        userHistory.id_u,
        userHistory.idusuario,
        userHistory.contrasenia,
        userHistory.tipousuario_id
      ),
      `Historial de Usuario con ID: '${id}' obtenido correctamente.`
    );
  } catch (error) {
    console.error(
      `Error al obtener el Historial de Usuario con ID: '${id}': ${error}`
    );
    return new ResponseDTO(
      "HU-2000",
      null,
      `Error al obtener el Historial de Usuario con ID: '${id}': ${error}`
    );
  }
};

module.exports = { getAllUserHistory, getUserHistoryById };

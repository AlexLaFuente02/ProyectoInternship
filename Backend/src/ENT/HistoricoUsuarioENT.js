const { DataTypes } = require("sequelize");
const sequelize = require("../../database/db");
const UsuarioENT = require("./UsuarioENT");
const TipoUsuarioENT = require("./TipoUsuarioENT");

const HistoricoUsuarioENT = sequelize.define(
  "HistoricoUsuario",
  {
    id_h: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    idusuario: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    contrasenia: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "historico_usuario",
    timestamps: false,
  }
);

HistoricoUsuarioENT.belongsTo(UsuarioENT, {
  foreignKey: "id_u",
  as: "usuario",
  targetKey: "id",
});

HistoricoUsuarioENT.belongsTo(TipoUsuarioENT, {
  foreignKey: "tipousuario_id",
  as: "tipousuario",
  targetKey: "id",
});

module.exports = HistoricoUsuarioENT;

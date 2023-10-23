const { DataTypes } = require("sequelize");
const sequelize = require("../../database/db");
const TipoUsuarioENT = require("./TipoUsuarioENT");

const UsuarioENT = sequelize.define(
  "Usuario",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    idusuario: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    contrasenia: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    tipousuario_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true,
    },
  },
  {
    tableName: "usuario",
    timestamps: false,
  }
);

UsuarioENT.belongsTo(TipoUsuarioENT, {
  foreignKey: "tipousuario_id",
  as: "tipoUsuario",
  targetKey: "id",
});

module.exports = UsuarioENT;

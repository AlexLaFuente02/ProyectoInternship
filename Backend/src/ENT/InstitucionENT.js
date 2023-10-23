const { DataTypes } = require("sequelize");
const sequelize = require("../../database/db");
const UsuarioENT = require("./UsuarioENT");
const SectorPertenenciaENT = require("./SectorPertenenciaENT"); // Asumiendo que tienes un modelo para sectorpertenencia

const InstitucionENT = sequelize.define(
  "Institucion",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nombreinstitucion: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    reseniainstitucion: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    logoinstitucion: {
      type: DataTypes.BLOB,
      allowNull: true,
    },
    nombrecontacto: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    correocontacto: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    celularcontacto: {
      type: DataTypes.STRING(15),
      allowNull: false,
    },
  },
  {
    tableName: "institucion",
    timestamps: false,
  }
);

InstitucionENT.belongsTo(UsuarioENT, {
  foreignKey: "usuario_id",
  as: "usuario",
  targetKey: "id",
});

InstitucionENT.belongsTo(SectorPertenenciaENT, {
  foreignKey: "sectorpertenencia_id",
  as: "sectorpertenencia",
  targetKey: "id",
});

module.exports = InstitucionENT;

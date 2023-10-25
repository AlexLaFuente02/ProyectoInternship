const { DataTypes } = require("sequelize");
const sequelize = require("../../database/db");
const EstadoPostulacionENT = require("./EstadoPostulacionENT");
const EstudianteENT = require("./EstudianteENT");
const ConvocatoriaENT = require("./convocatoriaENT");

const PostulacionENT = sequelize.define(
  "Postulacion",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    fechapostulacion: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    estadopostulacion_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    estudiante_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    convocatoria_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    tableName: "postulacion",
    timestamps: false,
  }
);

PostulacionENT.belongsTo(EstadoPostulacionENT, {
  foreignKey: "estadopostulacion_id",
  as: "estadopostulacion",
  targetKey: "id",
});

PostulacionENT.belongsTo(EstudianteENT, {
  foreignKey: "estudiante_id",
  as: "estudiante",
  targetKey: "id",
});

PostulacionENT.belongsTo(ConvocatoriaENT, {
  foreignKey: "convocatoria_id",
  as: "convocatoria",
  targetKey: "id",
});

module.exports = PostulacionENT;

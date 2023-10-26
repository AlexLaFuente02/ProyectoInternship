/**
 * @fileoverview Modelo para la entidad Usuario en la base de datos.
 * @module database/models/UsuarioENT
 * @requires sequelize
 * @requires ../../database/db
 * @requires ./TipoUsuarioENT
 */

const { DataTypes } = require("sequelize");
const sequelize = require("../../database/db");
const TipoUsuarioENT = require("./TipoUsuarioENT");

/**
 * @openapi
 * components:
 *   schemas:
 *     Usuario:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           description: ID único del usuario.
 *           example: 1
 *         idusuario:
 *           type: string
 *           description: Identificador único del usuario.
 *           example: user1
 *         contrasenia:
 *           type: string
 *           description: Contraseña del usuario.
 *           example: pass1
 *         tipousuario:
 *           $ref: '#/components/schemas/TipoUsuario'
 *     TipoUsuario:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           description: ID único del tipo de usuario.
 *           example: 1
 * 
 */

/**
 * Define el modelo de la tabla 'usuario' en la base de datos.
 * @class UsuarioENT
 * @property {number} id - ID único del usuario.
 * @property {string} idusuario - Identificador único del usuario.
 * @property {string} contrasenia - Contraseña del usuario.
 * @property {object} tipousuario - Relación con el modelo TipoUsuarioENT.
 * @see TipoUsuarioENT
 */
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
  },
  {
    tableName: "usuario",
    timestamps: false,
  }
);

/**
 * Establece una relación de pertenencia entre UsuarioENT y TipoUsuarioENT.
 * @memberof UsuarioENT
 * @see TipoUsuarioENT
 */
UsuarioENT.belongsTo(TipoUsuarioENT, {
  foreignKey: "tipousuario_id",
  as: "tipousuario",
  targetKey: "id",
});

module.exports = UsuarioENT;

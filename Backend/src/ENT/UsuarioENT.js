const {DataTypes, Sequelize} = require("sequelize");
const sequelize = require("../../database/db");

const UsuarioENT = sequelize.define(
    "Usuario",
    {
        id : {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        },
        idusuario : {
        type: DataTypes.STRING,
        allowNull: false
        },
        contrasenia: {
        type: DataTypes.STRING,
        allowNull: false
        },
        //Id de tabla foranea TipoUsuario
        tipousuario_id: {
        type: DataTypes.INTEGER,
        allowNull: false
        },
    },
    {
        tableName: "usuario",
        timestamps: false
    }
    );

module.exports = UsuarioENT;
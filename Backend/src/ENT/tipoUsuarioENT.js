const { DataTypes, Sequelize } = require('sequelize');
const sequelize = require('../../database/db'); // Asegúrate de que la ruta sea correcta

const TipoUsuario = sequelize.define('TipoUsuario', {
  tipo: {
    type: DataTypes.STRING,
    allowNull: false
  },
  fechacreacion: {
    type: DataTypes.DATE,
    defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
  }
}, {
  tableName: 'tipousuario', // Nombre real de la tabla en la base de datos
  timestamps: false // Desactivar las columnas createdAt y updatedAt
});

module.exports = TipoUsuario;

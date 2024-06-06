'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class PEDIDO_MARMITAS extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  PEDIDO_MARMITAS.init({
    pedidos_id: {
        type: DataTypes.INTEGER,
        primaryKey: true // Definir como chave primária
    },
    marmita_id: {
        type: DataTypes.INTEGER,
        primaryKey: true // Definir como chave primária
    },
    
  }, {
    sequelize,
    modelName: 'PEDIDO_MARMITAS',
    timestamps: false
  });
  return PEDIDO_MARMITAS;
};


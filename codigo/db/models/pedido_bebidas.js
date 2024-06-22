'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class PEDIDO_BEBIDAS extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  PEDIDO_BEBIDAS.init({
    pedidos_id: {
        type: DataTypes.INTEGER,
        primaryKey: true // Definir como chave primária
    },
    Bebidas_id: {
        type: DataTypes.INTEGER,
        primaryKey: true // Definir como chave primária
    },
    
  }, {
    sequelize,
    modelName: 'PEDIDO_BEBIDAS',
    timestamps: false
  });
  return PEDIDO_BEBIDAS;
};


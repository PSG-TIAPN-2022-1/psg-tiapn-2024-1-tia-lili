'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class BEBIDAS extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  BEBIDAS.init({
    nome: DataTypes.STRING(45),
    valor: DataTypes.DECIMAL,
    img: DataTypes.STRING(100),
    disponivel:DataTypes.TINYINT

  }, {
    sequelize,
    modelName: 'BEBIDAS',
    timestamps: false
  });
  return BEBIDAS;
};


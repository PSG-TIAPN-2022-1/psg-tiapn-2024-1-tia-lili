'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class TIPO_CARNES extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  TIPO_CARNES.init({
    nome: DataTypes.STRING(30),
    valor_p: DataTypes.DOUBLE,
    valor_g: DataTypes.DOUBLE,
    image: DataTypes.STRING(80)
  }, {
    sequelize,
    modelName: 'TIPO_CARNES',
  });
  return TIPO_CARNES;
};
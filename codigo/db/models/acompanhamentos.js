'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ACOMPANHAMENTOS extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ACOMPANHAMENTOS.init({
    nome: DataTypes.STRING(30),
    descricao: DataTypes.STRING(50),
  }, {
    sequelize,
    modelName: 'ACOMPANHAMENTOS',
  });
  return ACOMPANHAMENTOS;
};


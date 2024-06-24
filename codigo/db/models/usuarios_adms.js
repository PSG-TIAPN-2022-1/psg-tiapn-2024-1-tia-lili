'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class USUARIOS_ADMS extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  USUARIOS_ADMS.init({
    nome: DataTypes.STRING(45),
    email: DataTypes.STRING(255),
    senha: DataTypes.STRING(255),
    cargo: DataTypes.STRING(20),
  }, {
    sequelize,
    modelName: 'USUARIOS_ADMS',
    timestamps: false
  });
  return USUARIOS_ADMS;
};


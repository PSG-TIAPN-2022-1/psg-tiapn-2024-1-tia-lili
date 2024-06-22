'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class USUARIOS extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  USUARIOS.init({
    nome: DataTypes.STRING(45),
    telefone: DataTypes.STRING(20),
    email: DataTypes.STRING(255),
    senha: DataTypes.STRING(255),
    cep: DataTypes.INTEGER,
    bairro: DataTypes.STRING(45),
    rua: DataTypes.STRING(45),
    numero: DataTypes.INTEGER,
    complemento: DataTypes.STRING(45),
    
  }, {
    sequelize,
    modelName: 'USUARIOS',
    timestamps: false
  });
  return USUARIOS;
};


'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class RESTAURANTES extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  RESTAURANTES.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true // Definir como chave primária
      },
    nome: DataTypes.STRING(45),
    status: DataTypes.INTEGER

    

  }, {
    sequelize,
    modelName: 'RESTAURANTES',
    timestamps: false
  });
  return RESTAURANTES;
};


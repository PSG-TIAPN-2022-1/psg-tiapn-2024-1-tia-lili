'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class MARMITAS extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  MARMITAS.init({
    tipo_carnes_id1: DataTypes.INTEGER,
    tamanho:DataTypes.INTEGER,
    obs: DataTypes.STRING(45),
  }, {
    sequelize,
    modelName: 'MARMITAS',
    timestamps: false
  });
  return MARMITAS;
};


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
    
  }, {
    sequelize,
    modelName: 'MARMITAS',
    timestamps: false
  });
  return MARMITAS;
};


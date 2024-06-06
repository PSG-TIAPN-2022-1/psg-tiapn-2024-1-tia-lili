'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class MARMITA_ACOMPANHAMENTOS extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  MARMITA_ACOMPANHAMENTOS.init({
    marmita_id1:{
        type: DataTypes.INTEGER,
        primaryKey: true // Definir como chave primária
      },
    acompanhamentos_id: {
        type: DataTypes.INTEGER,
        primaryKey: true // Definir como chave primária
      },
    
  }, {
    sequelize,
    modelName: 'MARMITA_ACOMPANHAMENTOS',
    timestamps: false
  });
  return MARMITA_ACOMPANHAMENTOS;
};


'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class PEDIDOS extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  PEDIDOS.init({
    Usuarios_id:DataTypes.INTEGER,
    total:DataTypes.DECIMAL,
    status:DataTypes.STRING(15),
    pagamento:DataTypes.STRING(15),
    entrega:DataTypes.STRING(15),
    taxa_entrega:DataTypes.DECIMAL,
    cep: DataTypes.INTEGER,
    bairro: DataTypes.STRING(45),
    rua: DataTypes.STRING(45),
    numero: DataTypes.INTEGER,
    complemento: DataTypes.STRING(45),
    troco: DataTypes.DECIMAL,
    
  }, {
    sequelize,
    modelName: 'PEDIDOS',
    timestamps: false
  });
  return PEDIDOS;
};


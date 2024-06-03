const  Sequelize = require("sequelize");

const db = require('./db');
 
const Tipo_de_Carne = db.define('TIPO_CARNE', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nome: {
        type: Sequelize.STRING(30),
        allowNull: false
    },
    valor_p: {
        type: Sequelize.DOUBLE,
        allowNull: false
    },
    valor_g: {
        type: Sequelize.DOUBLE,
        allowNull: false
    },
    img: {
        type: Sequelize.STRING(80),
        allowNull: true
    },
}, {
    timestamps: false // Desabilita o rastreamento automático de data e hora
});


//Tipo_de_Carne.sync({alter:true});



module.exports = Tipo_de_Carne;

// CREATE TABLE TIPO_CARNE(
//     ID INT NOT NULL auto_increment,
//     NOME VARCHAR(30) not null,
//     VALOR DOUBLE not null,
//     primary key (ID)
//     );
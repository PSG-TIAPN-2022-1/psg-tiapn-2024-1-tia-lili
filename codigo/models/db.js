const  Sequelize = require("sequelize");

const sequelize = new Sequelize("tia_lili","root", "123456",{
    host: 'localhost', 
    dialect: 'mysql'
});

sequelize.authenticate().then(function(){
    console.log("Conectado DB.;")
}).catch(function(){
    console.log("Erro ao conectar DB.;")
});

module.exports = sequelize;
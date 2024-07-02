import  Sequelize  from "sequelize";

const db = new Sequelize('ecomerce','root','Atenea.99',{
    host:'localhost',
    port: 3306,
    dialect: 'mysql',
    define:{
        timestamps:true
    },
    pool:{
        max:5,//maximo de conexiones por usuario
        min:0,//minimo de conexiones por usuario
        acquire:3000,//tiempo antes de presentar errores
        idle:1000//elimina coneciones despues de 
    },
    operatorAliases: false
});

export default db;
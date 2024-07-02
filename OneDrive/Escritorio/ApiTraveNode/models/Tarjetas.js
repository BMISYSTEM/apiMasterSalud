import { DataTypes } from "sequelize";
import bd from '../config/bd.js'

const Tarjetas = bd.define('tarjetas',{
    mensualimagen:{
        type:DataTypes.STRING,
        allowNull:false
    },
    mensualprecio:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    trimestralimagen:{
        type:DataTypes.STRING,
        allowNull:false
    },
    trimestralpreecio:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    anualimagen:{
        type:DataTypes.STRING,
        allowNull:false
    },
    anualprecio:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
});
export default Tarjetas;
import { DataTypes } from "sequelize";
import bd from '../config/bd.js'

const Marcas = bd.define('marcas',{
    nombre:{
        type:DataTypes.STRING,
        allowNull:false
    },
});
export default Marcas;
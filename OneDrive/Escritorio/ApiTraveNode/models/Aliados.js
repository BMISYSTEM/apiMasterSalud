import { DataTypes } from "sequelize";
import bd from '../config/bd.js'

const Aliados = bd.define('aliados',{
    nombre:{
        type:DataTypes.STRING,
        allowNull:false
    },
    logo:{
        type:DataTypes.STRING,
        allowNull:false
    },
    categoria:{
        type:DataTypes.STRING,
        allowNull:false
    },
    descuento:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    covertura:{
        type:DataTypes.STRING,
        allowNull:false
    },
    desde:{
        type:DataTypes.DATE,
        allowNull:false
    },
    hasta:{
        type:DataTypes.DATE,
        allowNull:false
    },
    terminos:{
        type:DataTypes.TEXT,
        allowNull:false
    },
});
export default Aliados;
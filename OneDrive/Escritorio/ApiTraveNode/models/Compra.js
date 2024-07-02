import { DataTypes } from "sequelize";
import bd from '../config/bd.js'

const Compra = bd.define('compra',{
    idcompra:{
        type:DataTypes.STRING,
        allowNull:false
    },
    status:{
        type:DataTypes.STRING,
        allowNull:false
    },
    refrence:{
        type:DataTypes.STRING,
        allowNull:false
    },
    preciot:{
        type:DataTypes.STRING,
        allowNull:false
    },
    cliente:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
});
export default Compra;
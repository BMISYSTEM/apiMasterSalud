import { DataTypes } from "sequelize";
import bd from '../config/bd.js'

const TipoProducto = bd.define('tipo_producto',{
    nombre:{
        type:DataTypes.STRING,
        allowNull:false
    },
});
export default TipoProducto;
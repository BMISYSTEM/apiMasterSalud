import { DataTypes } from "sequelize";
import bd from '../config/bd.js'

const Compra_Producto = bd.define('compra_producto',{
    idcompra:{
        type:DataTypes.STRING,
        allowNull:false
    },
    idproducto:{
        type:DataTypes.STRING,
        allowNull:false
    },
});
export default Compra_Producto;
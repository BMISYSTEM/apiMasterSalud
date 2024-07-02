import { DataTypes } from "sequelize";
import bd from '../config/bd.js'

const Productos = bd.define('productos',{
    nombre:{
        type:DataTypes.STRING,
        allowNull:false
    },
    descripcion:{
        type:DataTypes.STRING,
        allowNull:false
    },
    precio:{
        type:DataTypes.STRING,
        allowNull:false
    },
    porcentaje:{
        type:DataTypes.STRING,
        allowNull:false
    },
    descuento:{
        type:DataTypes.STRING,
        allowNull:false
    },
    unidades:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    activo:{
        type:DataTypes.STRING,
        allowNull:false
    },
    imagen1:{
        type:DataTypes.STRING,
        allowNull:false
    },
    imagen2:{
        type:DataTypes.STRING,
        allowNull:false
    },
    imagen3:{
        type:DataTypes.STRING,
        allowNull:false
    },
    imagen4:{
        type:DataTypes.STRING,
        allowNull:false
    },
    marcas:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    tipo_producto:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    envio:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    destacado:{
        type:DataTypes.INTEGER,
        allowNull:false
    },

});

export default Productos;
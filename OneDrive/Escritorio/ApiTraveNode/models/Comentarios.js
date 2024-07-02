import { DataTypes } from "sequelize";
import bd from '../config/bd.js'

const Comentarios = bd.define('comentarios',{
    idcliente:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    comentario:{
        type:DataTypes.STRING,
        allowNull:false
    },
    producto:{
        type:DataTypes.INTEGER,
        allowNull:false
    },

});
export default Comentarios;
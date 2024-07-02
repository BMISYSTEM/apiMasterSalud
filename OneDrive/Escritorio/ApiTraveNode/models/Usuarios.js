import {DataTypes } from "sequelize";
import bcrypt from 'bcrypt';
import bd from "../config/bd.js";

const Usuarios = bd.define('usuarios',{
    nombre:{
        type:DataTypes.STRING,
        allowNull:false
    },
    apellido:{
        type:DataTypes.STRING,
        allowNull:false
    },
    password:{
        type:DataTypes.STRING,
        allowNull:false
    },
    token:{
        type:DataTypes.STRING,
        
    },
    confirmado:{
        type:DataTypes.BOOLEAN,
        allowNull:false
        
    },
    cedula:{
        type:DataTypes.INTEGER,

    },
    email:{
        type:DataTypes.STRING,
        allowNull:false
    },
    rol:{
        type:DataTypes.INTEGER,
    }
},{
    hooks:{
        beforeCreate:async function(usuario){
            const salt = await bcrypt.genSalt(10);
            usuario.password = await bcrypt.hash(usuario.password,salt); 
        }
    }
});
Usuarios.prototype.verificarPassword = function(password){
    return bcrypt.compareSync(password,this.password);
};

export default Usuarios;
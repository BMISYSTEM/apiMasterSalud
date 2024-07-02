import { DataTypes } from "sequelize";
import bd from '../config/bd.js'

const Header = bd.define('headers',{
    imagen:{
        type:DataTypes.STRING,
        allowNull:false
    },
});
export default Header;
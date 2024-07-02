import  express  from "express";
import { create,login,auth,nombre} from "../controllers/AuthControllers.js";
import { createproducto,index,updateimagen1,updateimagen2,updateimagen3,updateimagen4,updateproducto } from "../controllers/ProductoController.js";
import {createMarca,updateMarcas,indexMarca} from "../controllers/MarcasControllers.js"
import { createAliados,updateAliados,indexAliados,logo1 } from "../controllers/AliadosController.js"; 
import { precioanual,header ,indexheaders,imagenmes,tarjetas,imagentrimestre,imagenanual,preciomes,preciotrimestral} from "../controllers/HomeControllers.js";
import { createTipoprod,updateTipoProd,indexTipoProd } from "../controllers/TipoProductoController.js";
import autenticate from "../middleware/Auth.js"; 
import upload from "../middleware/SubirArchivo.js";
import { createcompra,createcompras,indexcompra } from "../controllers/CompraController.js";
import { createcomentario, indexcomentario } from "../controllers/ComentarioController.js";

const router = express.Router();

/** carga de archivos */
// router.post('/productos',upload.fields([{name:'img1'},{name:'img2'},{name:'img3'},{name:'img4'}]),autenticate,createproducto)
/** rutas autenticadas */
// router.post('/productos/update',autenticate,updateproducto)


export default router;
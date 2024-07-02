import  express  from "express";
import  cors  from "cors";
import db from "./config/bd.js";
import bodyParser from 'body-parser';
import router from "./routes/index.js";
// configurar el servidor
const app = express();
// habilitarciones necesarias para recibir informacion de la api front
app.use(bodyParser.json());
// habilitar para recibir imagenes enviadas desde el front
app.use(bodyParser.urlencoded({extended:true}));
// habilityar cors para poder que otro sistema consuma las apis
app.use(cors());

// conexion a la base de datos \
try {
    /** Verifica la conexion a la base de datos */
    db.authenticate();
    db.sync()
} catch (error) {
    console.log(error)
}
// rutas principales 
app.use('/',router);

// carpeta publica 
app.use(express.static('uploads'));
// puerto a utilizar
app.listen(5000);
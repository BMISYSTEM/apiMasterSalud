import multer from "multer";
import path from 'path';
import { generarid } from "../helpers/tokens.js";

const storage = multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,'./uploads/')
    },
    filename:function(req,file,cb){
        cb(null,generarid()+path.extname(file.originalname))
    }
})

const upload = multer({storage});

export default upload;
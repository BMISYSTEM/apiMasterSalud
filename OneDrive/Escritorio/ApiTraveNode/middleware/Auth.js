import  Jwt from "jsonwebtoken";

const autenticate = (req,res,next) => {

    // autorizacion por header 
    const authHeader = req.get('Authorization');
    if(!authHeader){
        const error = new Error('No autenticado')
        error.statusCode = 401;
        throw error;
    }

    // optener token 
    const token = authHeader.split(' ')[1]
    let revisartoken;
    try {
        revisartoken = Jwt.verify(token,'ecomercex99');
    } catch (error) {
        error.statusCode = 500;
        throw error;
    }

    if(!revisartoken){
        const error = new Error('no autenticado');
        error.statusCode = 500;
        throw error;
    }
    next()
}

export default autenticate
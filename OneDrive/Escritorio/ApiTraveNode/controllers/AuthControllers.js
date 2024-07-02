import {check,validationResult } from 'express-validator'
import bcrypt from 'bcrypt';
import  jwt  from 'jsonwebtoken';
import Usuarios from "../models/usuarios.js";
import { generarid } from "../helpers/tokens.js";
// creacion de usuarios 
const create = async(req,res) =>{
    // validacion 
    // nombre
    await check('nombre').notEmpty().withMessage('el campo nombre no debe estar vacio').run(req);
    // apellido
    await check('apellido').notEmpty().withMessage('el campo apellido no debe estar vacio').run(req);
    // cedula
    await check('cedula').notEmpty().withMessage('el campo cedula no debe estar vacio').run(req);
    await check('cedula').isInt().withMessage('el campo cedula debe ser numerico').run(req);
    // email
    await check('email').notEmpty().withMessage('el campo email no debe estar vacio').run(req);
    await check('email').isEmail().withMessage('Ingrese un email validio').run(req);
    // telefono
    await check('telefono').notEmpty().withMessage('el campo telefono no debe estar vacio').run(req);
    await check('telefono').isInt().withMessage('el campo telefono debe ser numerico').run(req);
    // password
    await check('password').notEmpty().withMessage('el campo password no debe estar vacio').run(req);
    await check('password').isLength({min:6}).withMessage('el passwor debe tener minimo 6 carcteres').run(req);
    // guarda los errores en la variable resultadfo
    let resultado = validationResult(req);
    // busca un usuario que ya este registrado
    if(resultado.isEmpty()){
        // destrution al req

        const {nombre,apellido,cedula,telefono,email,password} = req.body;

        // consulta la base de datos 
        const existeemail = await Usuarios.findOne({where:{email}});
        // valida si exite un email en la base de datos 
        if(existeemail){
            res.json({registrado:'el usuario ya esta registrado'})
            return
        }
        // res.json({nombre,apellido,cedula,telefono,email,password});
        // return
        // se crea utilizando el modelo
        const usuario = await Usuarios.create({
            nombre,
            apellido,
            email,
            password,
            token:generarid(),//genera un id unico para la confirmacion del usuario
            telefono,
            cedula,
            rol:'0',
            confirmado:'0'
        });
        res.json({sucess:'el usuario se creo de forma correcta'})
    }else{
        res.json(resultado)
    }
}
// funcion de logueo 
const login = async(req,res,next) =>{
    // email
     await check('email').notEmpty().withMessage('el campo email debe estar lleno').run(req);
     await check('email').isEmail().withMessage('Email no valido').run(req);
    //  passwors
    await check('password').notEmpty().withMessage('Ingrese su password').run(req);
    // se almacenan los errores
    const resultado = validationResult(req);
//  si errores esta vacio procedemos a autenticarlo
    if(resultado.isEmpty()){
        const {email,password} = req.body;
        const usuario = await Usuarios.findOne({where:{email}})
        if(!usuario){
            await res.status(401).json({usuario:'El susuario no existe'});
            next()
        }else{
            if(!(bcrypt.compareSync(password,usuario.password))){
                await res.status(401).json({passworIncorrecto:'el passwor no es correcto'});
                next()
            }else{
                const token = jwt.sign({
                    email:usuario.email,
                    nombre:usuario.nombre,
                    id:usuario.id
                },'ecomercex99',{
                    expiresIn:'1d'
                })  
                res.json({sucess:token,rol:usuario.rol,nombre:usuario.nombre})
            }
        }
    }
}

const auth = async(req,res) => {

    res.json({mensaje:'autenticado'})
}

const nombre = async(req,res,next) =>{
    const {token} = req.body
    const decode =  jwt.verify(token,'ecomercex99');
    const {id} = decode
    const usuario = await Usuarios.findOne({where:{id:id}})
    res.json(usuario.nombre)
}


export {
    create,
    login,
    auth
    ,nombre
}
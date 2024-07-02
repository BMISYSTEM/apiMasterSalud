import Productos from "../models/Productos.js"
import fs from 'fs'
const createproducto = async (req,res,next) =>
{
    const { nombre,
            descripcion,
            precio,
            porcentaje,
            unidades,
            descuento,
            activo,
            marca,
            tipo_producto,
            envio,
            destacado
          } = req.body
    let img1 = req.files.img1[0].filename;
    let img2 = req.files.img2[0].filename;
    let img3 = req.files.img3[0].filename;
    let img4 = req.files.img4[0].filename;

    const producto = await Productos.create({
        nombre,
        descripcion,
        precio,
        porcentaje,
        descuento,
        unidades,
        activo,
        imagen1:img1,
        imagen2:img2,
        imagen3:img3,
        imagen4:img4,
        marcas:marca,
        tipo_producto,
        envio,
        destacado
    });
    res.json({succes:'El producto se creo de forma correcta'}); 
}
// update
const updateproducto = async (req,res,next) =>
{
    const { nombre,
            descripcion,
            precio,
            porcentaje,
            unidades,
            descuento,
            activo,
            marca,
            tipo_producto,
            envio,
            destacado
            ,id
          } = req.body
    const producto = await Productos.update({
        nombre:nombre,
        descripcion:descripcion,
        precio:precio,
        porcentaje:porcentaje,
        descuento:descuento,
        unidades:unidades,
        activo:activo,
        marcas:marca,
        tipo_producto:tipo_producto,
        envio:envio,
        destacado:destacado
    },{where:{id}});
    res.json(req.body); 
}
// consulta los productos 
const index = async (req,res) =>{
    const productos = await Productos.findAll();
    res.json(productos);
}
// actualiza imagen 1
const updateimagen1 = async (req,res,next) =>{
    let img1 = req.files.img1[0].filename;
    const {id} = req.body;
    const img = await Productos.findOne({where:{id}})
    const up = await Productos.update({ imagen1: img1 }, {
        where: {
            id: id
        }
    });
    
    fs.unlinkSync(`./uploads/${img.imagen1}`)
    res.json(img.imagen1)
}
const updateimagen2 = async (req,res,next) =>{
    let img2 = req.files.img2[0].filename;
    const {id} = req.body;
    const img = await Productos.findOne({where:{id}})
    const up = await Productos.update({ imagen2: img2 }, {
        where: {
          id: id
        }
      });
    fs.unlinkSync(`./uploads/${img.imagen2}`)
    res.json('actualizado')
}
const updateimagen3 = async (req,res,next) =>{
    let img3 = req.files.img3[0].filename;
    const {id} = req.body;
    const img = await Productos.findOne({where:{id}})
    const up = await Productos.update({ imagen3: img3 }, {
        where: {
          id: id
        }
      });
    fs.unlinkSync(`./uploads/${img.imagen3}`)
    res.json('actualizado')
}
const updateimagen4 = async (req,res,next) =>{
    let img4 = req.files.img4[0].filename;
    const {id} = req.body;
    const img = await Productos.findOne({where:{id}})
    const up = await Productos.update({ imagen4: img4 }, {
        where: {
          id: id
        }
      });
    fs.unlinkSync(`./uploads/${img.imagen4}`)
    res.json('actualizado')
}
export {
    index,
    createproducto,
    updateimagen1,
    updateimagen2,
    updateimagen3,
    updateimagen4,
    updateproducto
}
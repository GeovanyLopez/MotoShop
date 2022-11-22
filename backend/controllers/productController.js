const producto = require('../models/productos')
const fetch = (url) => import('node-fetch').then(({default:fetch}) => fetch(url))//Importar fetch 

// Ver lista de productos
exports.getProduct = async (req,res,next) => {
    const productos = await producto.find()
    res.status(200).json({
        success:true,
        count: productos.length,
        productos
    })
}


// Crear nuevo producto /api/productos
exports.newProduct = async(req,res,next) => {
    const product = await producto.create(req.body)

    res.status(201).json({
        success:true,
        product
    })
}
// Ver productos por el Id
exports.getProductById = async (req,res,next) =>{
    const productoId = await producto.findById(req.params.id)
    if(!productoId){
        return res.status(401).json({
            success:false,
            message:"No se ha encontrado el producto"
        })
    }
    res.status(200).json({
        success:true,
        message:"Informacion de tu producto",
        productoId
    })

}

// Actualizar un producto
exports.updateProduct = async (req,res,next) => {
    let product = await producto.findById(req.params.id)

    if(!product){
        return res.status(401).json({
            success:false,
            message:"No se ha encontrado el producto"
        })
    }
    product = await producto.findByIdAndUpdate(req.params.id, req.body,{
        new:true,
        runValidators:true
    })
    res.status(200).json({
        success: true,
        message:"Producto actualizado correctamente",
        product
    })
}

// Eliminar un producto
exports.deleteProduct = async (req,res,next) => {
    const product = await producto.findById(req.params.id)

    if(!product){
        return res.status(401).json({
            success:false,
            message:"No se ha encontrado el producto"
        })
    }
    await product.remove()
    res.status(200).json({
        success: true,
        message:"Producto eliminado correctamente",
        product
    })
}

// FETCH
// ver todos los productos con fetch
function verProductos(){
    fetch('http://localhost:4000/api/productos')
    .then(res => res.json())
    .then(res => console.log(res))
    .catch(err => console.log(err))
}
//verProductos()

// Ver productos por id con fetch
function verProductosId(id){
    fetch('http://localhost:4000/api/producto'+id)
    .then(res => res.json())
    .then(res => console.log(res))
    .catch(err => console.log(err))
}
verProductosId('637d281adf3786d90649af2a')



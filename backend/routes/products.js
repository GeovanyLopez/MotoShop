const express = require("express");
const { route } = require("../app");

const router = express.Router();

const {getProduct, newProduct, getProductById, updateProduct, deleteProduct} = require('../controllers/productController');

// Establecemos las rutas 
router.route('/productos').get(getProduct)// Ruta para ver todos los productos
router.route('/producto/nuevo').post(newProduct)// Ruta para crear productos
router.route('/producto/:id').get(getProductById)//Ruta para ver productos por Id
router.route('/producto/:id').put(updateProduct)// Ruta para ver la actualizacion
router.route('/producto/:id').delete(deleteProduct)// Ruta para eliminar un producto

module.exports = router

 
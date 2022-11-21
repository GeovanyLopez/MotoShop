const express = require("express");
const { route } = require("../app");

const router = express.Router();

const {getProduct} = require('../controllers/productController');

router.route('/productos').get(getProduct);

module.exports = router

 
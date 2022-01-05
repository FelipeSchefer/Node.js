const productsController = require('../controllers/products')

const express = require('express');
const router = express.Router();

// /admin/add-product => GET
router.get('/add-product', productsController.getAddProducts);

// /admin/add-product => POST
router.post('/add-product', productsController.postAddProducts);

module.exports = router

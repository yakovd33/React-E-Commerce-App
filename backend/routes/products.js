var express = require('express');
var router = express.Router();
var productsController = require('../controllers/productsController');

// Create a new product
router.post('/', productsController.create_product);

// Get all products
router.get('/', productsController.get_products);

// Update a product
router.put('/', productsController.update_product);

// Delete a product
router.delete('/:id', productsController.delete_product);

module.exports = router;
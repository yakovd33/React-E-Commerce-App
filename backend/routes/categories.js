var express = require('express');
var router = express.Router();
var categoriesController = require('../controllers/categoriesController');

// Get all categories
router.get('/get_all', categoriesController.get_all_categories);

// Post all categories
router.post('/', categoriesController.new_cat);

// Get single category info
router.get('/:id', categoriesController.get_cat);

// Get category product list
router.get('/cat_products/:id', categoriesController.get_cat_products);

// Delete a product by id
router.delete('/:id', categoriesController.delete_category)

module.exports = router;
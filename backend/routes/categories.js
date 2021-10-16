var express = require('express');
var router = express.Router();
var categoriesController = require('../controllers/categoriesController');

// Get all categories
router.get('/get_all', categoriesController.get_all_categories);

// Get single category info
router.get('/:id', categoriesController.get_cat);

// Get category product list
router.get('/cat_products/:id', categoriesController.get_cat_products);

module.exports = router;
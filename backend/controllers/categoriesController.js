const Category = require('../models/Category');
const Product = require('../models/Product');

module.exports.get_all_categories = (req, res) => {
    Category.find({}, (err, result) => {
        res.status(200).json(result);
    })
}

module.exports.get_cat = (req, res) => {
    Category.findOne({ cat_id: req.params.id }, (err, result) => {
        res.status(200).json(result);
    })
}

module.exports.get_cat_products = (req, res) => {
    cat_id = req.params.id;

    Product.find({ categories: cat_id }, (err, result) => {
        res.status(200).json(result);
    });
}
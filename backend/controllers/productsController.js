var Product = require('../models/Product');
var Category = require('../models/Category');

// CREATE
module.exports.create_product = async function (req, res) {
    try {
        req.body.categories = req.body.categories.split(',');

        var newProduct = await Product.create(req.body);
        
        res.status(200).json({ newProductId: newProduct.id });
    } catch (err) {
        res.status(500).send(err._message);
    }
}

// READ
module.exports.get_all_products = async function (req, res) {
    res.set('content-type', 'application/json');

    category = req.query.category;

    let products;

    try {
        if (!category) {
            products = await Product.find();
        } else {
            products = await Product.find({ categories: category });
        }
    } catch (err) {
        res.status(500).send(err._message);
    }

    res.status(200).json(products);
};

// UPDATE
module.exports.update_product = async function (req, res) {
    try {
        var productId = req.body.id;

        if (productId) {
            Product.updateOne({ id: productId }, req.body).then(() => res.status(200).send(''));
        }
    } catch (err) {
        res.status(500).send(err._message);
    }
}

// DELETE
module.exports.delete_product = async function (req, res) {
    try {
        var productId = req.body.id;

        if (productId) {
            await Product.deleteOne({ id: productId }).then(() => res.status(200).send(''));
        }
    } catch (err) {
        res.status(500).send(err._message);
    }
}
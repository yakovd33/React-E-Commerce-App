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
module.exports.get_products = async function (req, res) {
    res.set('content-type', 'application/json');

    category = req.query.category;
    product_id = req.query.product;

    let products;

    try {
        if (!category && !product_id) {
            products = await Product.find();
        } else if (!product_id) {
            products = await Product.find({ categories: category });
        } else {
            products = await Product.find({ id: product_id });
        }

        // Make products object writeable by converting in to JSON object
        products = JSON.parse(JSON.stringify(products));

        for (i = 0; i < products.length; i++) {
            tmp_product_cat = [];
            categories = products[i].categories;

            for (j = 0; j < categories.length; j++) {
                cat = await Category.findOne({ id: categories[j] });
                console.log(cat);
                tmp_product_cat.push(cat);
            }

            products[i].categories = tmp_product_cat;
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
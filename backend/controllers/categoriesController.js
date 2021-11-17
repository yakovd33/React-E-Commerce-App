const Category = require('../models/Category');
const Product = require('../models/Product');

module.exports.get_all_categories = (req, res) => {
    Category.find({}, (err, result) => {
        res.status(200).json(result);
    })
}

module.exports.new_cat = async (req, res) => {
    let title = req.body.title;

    try {
        if (title) {
            let new_cat = new Category({ title: title });
            await new_cat.save();
            res.status(200).json({ newCatId: new_cat.cat_id });
        } else {
            res.status(200).json({ error: 'Missing title.' })
        }
    } catch (error) {
        console.log(error);
    }
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

module.exports.delete_category = async (req, res) => {
    cat_id = req.params.id;

    if (cat_id) {
        await Category.deleteOne({ cat_id: cat_id }).then(() => res.status(200).send(''));

        res.status(200).json({ hehehe: 'ee' })
    } else {
        res.status(200).json({ error: 'There seems to be missing category id.' });
    }
}
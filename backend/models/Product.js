const mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);

// Implementing MANY-TO-MANY database relationship with Categories
const ProductSchema = new mongoose.Schema({
    id: { type: Number, default: 0 },
    title: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    minAmount: { type: Number, required: true },
    newPrice: Number,
    categories: [{ type: Number }],
    images: [{
        type: String
    }],
    tags: [{
        type: String
    }],
}, {timestamps: true});

ProductSchema.plugin(AutoIncrement, {inc_field: 'id'});

module.exports = mongoose.model('Product', ProductSchema);
var mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);

const categorySchema = mongoose.Schema({
    title: { type: String, required: true },
});

categorySchema.plugin(AutoIncrement, {inc_field: 'cat_id'});

module.exports = mongoose.model('Category', categorySchema);
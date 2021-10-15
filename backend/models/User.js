var mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);

const userSchema = mongoose.Schema({
    fullname: { type: String, required: true },
    pass_hashed: { type: String, required: true },
    email: { type: String, required: true },
    email_verified: { type: Boolean, default: false },
    isAdmin: { type: Boolean, default: false }
});

userSchema.plugin(AutoIncrement, {inc_field: 'user_id'});

module.exports = mongoose.model('User', userSchema);
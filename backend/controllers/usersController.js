const User = require('../models/User');
const formatHelpers = require('../helpers/formatHelpers');
const CryptoJS = require('crypto-js');
const jwt = require('jsonwebtoken');

module.exports.register = async function (req, res) {
    var error_msg = null;
    var new_user = req.body;
    
    if (new_user && new_user.email && new_user.password && new_user.fullname) {
        fullname = new_user.fullname;
        email = new_user.email;
        password = CryptoJS.AES.encrypt(new_user.password, process.env.PASSWORD_SECRET).toString();
        
        if (formatHelpers.email_validate(email)) {
            // Check if email exists

            email_exists = await User.find({ email: email }).count();

            if (!email_exists) {
                try {
                    const insertedUser = new User({
                        fullname: new_user.fullname,
                        email: new_user.email,
                        pass_hashed: password
                    });
                    await insertedUser.save();
    
                    res.status(200).json(insertedUser);
                } catch (exception) {
                    console.log(exception);
                }
            } else {
                error_msg = 'Email is already registered.'
            }
        } else {
            error_msg = 'Email format is incorrect';
        }
    } else {
        error_msg = 'There seems to be some missing/empty fields.'
    }

    if (error_msg) {
        res.status(200).json({
            error: error_msg
        })
    }
}

module.exports.login = async function (req, res) {
    var error_msg = null;

    if (req.body.email && req.body.password) {
        email = req.body.email;
        password = req.body.password;

        // Check if user exists
        user = await User.findOne({ email: email });

        if (user) {
            if (CryptoJS.AES.decrypt(user.pass_hashed, process.env.PASSWORD_SECRET).toString(CryptoJS.enc.Utf8) == password) {
                // Login successful

                // Create token
                const accessToken = jwt.sign({
                    id: user.id,
                    isAdmin: user.isAdmin ? user.isAdmin : false // In case the DB doesnt have the isAdmin, the default is false
                }, process.env.JWT_SECRET, { expiresIn: "30d" });

                const { pass_hashed, ...others } = user._doc;
                res.status(200).json({ ...others, accessToken });
            } else {
                error_msg = 'Password is incorrect.';
            }
        } else {
            // User wan't found
            error_msg = 'The email you entered was not found.'
        }
    } else {
        error_msg = 'There seems to be some missing/empty fields.';
    }

    if (error_msg) {
        res.status(200).json({
            error: error_msg
        })
    }
}
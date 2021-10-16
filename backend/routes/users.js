const express = require('express');
const router = express.Router();
const userController = require('../controllers/usersController');

const { verifyToken, verifyTokenAndAuthorization } = require('../helpers/verifyToken');

// Create a new user
router.post('/register', userController.register);

// Login
router.post('/login', userController.login);

// Logged only
router.get('/loggedonly', verifyTokenAndAuthorization, (req, res) => {
    res.send('Valid')
})

// Get logged user info
router.get('/logged_info/:id', verifyTokenAndAuthorization, userController.logged_info)

module.exports = router;

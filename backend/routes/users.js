const express = require('express');
const router = express.Router();
const userController = require('../controllers/usersController');

const { verifyToken, verifyTokenAndAuthorization } = require('../helpers/verifyToken');

// Create a new user
router.post('/register', userController.register);

// Login
router.post('/login', userController.login);

// Logged only
router.get('/loggedonly/:id', verifyTokenAndAuthorization, (req, res) => {
    res.send('Valid')
})

module.exports = router;

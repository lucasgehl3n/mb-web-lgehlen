const express = require('express');
const RegistrationController = require('../controllers/RegistrationController');
const path = require('path');

const router = express.Router();

router.get('/registration', (req, res) => {
    res.sendFile(path.join(__dirname, '../../frontend/dist/index.html'));
});

router.post('/registration', (req, res, next) => {
    try {
        RegistrationController.register(req, res);
    } catch (error) {
        next(error); //Middleware errors
    }
});

module.exports = router;

const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

// Rota para renderizar o formulário de login (GET)
router.get('/login', (req, res) => {
    res.render('login');
});

// Rota para processar o login (POST)
router.post('/login', authController.login);

module.exports = router;

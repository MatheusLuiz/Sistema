const express = require('express');
const router = express.Router();
const logController = require('../controllers/logController');

// Rota para obter todos os logs
router.get('/', logController.getAllLogs);

// Rota para obter logs por tabela afetada
router.get('/:tabela_afetada', logController.getLogsByTable);

module.exports = router;
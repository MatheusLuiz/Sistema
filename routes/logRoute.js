const express = require('express');
const router = express.Router();
const logController = require('../controllers/logController');


router.get('/', logController.getAllLogs);


router.get('/:tabela_afetada', logController.getLogsByTable);

module.exports = router;
const express = require('express');
const router = express.Router();
const funcionarioController = require('../controllers/funcionarioController');

router.post('/', funcionarioController.createFuncionario);
router.get('/:matricula', funcionarioController.getFuncionarioById);
router.get('/', funcionarioController.getAllFuncionarios);
router.put('/:matricula', funcionarioController.updateFuncionario);
router.delete('/:matricula', funcionarioController.deleteFuncionario);

module.exports = router;
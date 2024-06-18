const Funcionario = require('../models/funcionarioModel');
const Log = require('../models/logModel');

const createFuncionario = async (req, res) => {
    try {
        const newFuncionario = await Funcionario.create(req.body);
        await Log.create({
            tabela_afetada: 'funcionarios',
            acao_realizada: 'CREATE',
            id_registro_afetado: newFuncionario.insertId,
            id_funcionario_editor: req.body.id_funcionario_editor,
            dados_novos: JSON.stringify(req.body)
        });
        res.status(201).json(newFuncionario);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getFuncionarioById = async (req, res) => {
    try {
        const funcionario = await Funcionario.findById(req.params.matricula);
        res.status(200).json(funcionario);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getAllFuncionarios = async (req, res) => {
    try {
        const funcionarios = await Funcionario.findAll();
        res.status(200).json(funcionarios);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const updateFuncionario = async (req, res) => {
    try {
        const oldFuncionario = await Funcionario.findById(req.params.matricula);
        await Funcionario.update(req.params.matricula, req.body);
        await Log.create({
            tabela_afetada: 'funcionarios',
            acao_realizada: 'UPDATE',
            id_registro_afetado: req.params.matricula,
            id_funcionario_editor: req.body.id_funcionario_editor,
            dados_antigos: JSON.stringify(oldFuncionario),
            dados_novos: JSON.stringify(req.body)
        });
        res.status(200).json({ message: 'Funcionario updated successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const deleteFuncionario = async (req, res) => {
    try {
        const oldFuncionario = await Funcionario.findById(req.params.matricula);
        await Funcionario.delete(req.params.matricula);
        await Log.create({
            tabela_afetada: 'funcionarios',
            acao_realizada: 'DELETE',
            id_registro_afetado: req.params.matricula,
            id_funcionario_editor: req.body.id_funcionario_editor,
            dados_antigos: JSON.stringify(oldFuncionario)
        });
        res.status(200).json({ message: 'Funcionario deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    createFuncionario,
    getFuncionarioById,
    getAllFuncionarios,
    updateFuncionario,
    deleteFuncionario
};
const db = require('../config/banco');

const Funcionario = {
    create: async (funcionario) => {
        const [rows] = await db.execute(
            `INSERT INTO funcionarios (nome, sobrenome, CPF, RG, data_nascimento, estado_civil, cnh, status, data_cadastro, id_cargo, id_setor, id_filial)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
            [funcionario.nome, funcionario.sobrenome, funcionario.CPF, funcionario.RG, funcionario.data_nascimento, funcionario.estado_civil, funcionario.cnh, funcionario.status, funcionario.data_cadastro, funcionario.id_cargo, funcionario.id_setor, funcionario.id_filial]
        );
        return rows;
    },
    findById: async (matricula) => {
        const [rows] = await db.execute(`SELECT * FROM funcionarios WHERE matricula = ?`, [matricula]);
        return rows[0];
    },
    findAll: async () => {
        const [rows] = await db.execute(`SELECT * FROM funcionarios`);
        return rows;
    },
    update: async (matricula, funcionario) => {
        const [rows] = await db.execute(
            `UPDATE funcionarios SET nome = ?, sobrenome = ?, CPF = ?, RG = ?, data_nascimento = ?, estado_civil = ?, cnh = ?, status = ?, data_cadastro = ?, id_cargo = ?, id_setor = ?, id_filial = ? WHERE matricula = ?`,
            [funcionario.nome, funcionario.sobrenome, funcionario.CPF, funcionario.RG, funcionario.data_nascimento, funcionario.estado_civil, funcionario.cnh, funcionario.status, funcionario.data_cadastro, funcionario.id_cargo, funcionario.id_setor, funcionario.id_filial, matricula]
        );
        return rows;
    },
    delete: async (matricula) => {
        const [rows] = await db.execute(`DELETE FROM funcionarios WHERE matricula = ?`, [matricula]);
        return rows;
    }
};

module.exports = Funcionario;
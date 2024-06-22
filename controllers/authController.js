const { findByUsernameAndPassword } = require('../models/userModel');

exports.login = async (req, res) => {
    try {
        const { username, password } = req.body;

        const user = await findByUsernameAndPassword(username, password);

        if (user.username == username && user.password == password) {
            console.log("passou aqui")
            res.redirect('/dashboard.html');
        } else {
            res.status(401).json({ message: 'Credenciais inválidas ou usuário não existe' });
        }
    } catch (error) {
        console.error('Erro ao autenticar usuário:', error);
        res.status(500).json({ message: 'Erro interno no servidor' });
    }
};
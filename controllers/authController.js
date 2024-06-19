const User = require('../models/authModel');

exports.login = async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await User.findByUsername(username);
        if (user && user.password === password) {
            
            res.redirect('/dashboard'); 
        } else {
            res.status(401).json({ message: 'Credenciais invalidas ou Não existem' });
        }
    } catch (error) {
        console.error('Erro ao autenticar usuário:', error);
        res.status(500).json({ message: 'Erro Interno no Servidor' });
    }
};
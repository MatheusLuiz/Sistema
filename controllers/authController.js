const User = require('../models/authModel');

exports.login = async (req, res) => {
    const { username, password } = req.body;
    try {
        const user = await User.findByUsername(username);

        if (user && user.password === password) {
            res.redirect('/views/dashboard'); // 
        } else {
            res.redirect('/login?error=invalid_credentials');
        }
    } catch (error) {
        console.error('Erro ao autenticar usuário:', error);
        res.status(500).send('Erro interno ao processar a autenticação');
    }
};
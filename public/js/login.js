exports.login = async (req, res) => {
    try {
        const { username, password } = req.body;
        console.log(`Tentativa de login com usuário: ${username}`);

        const user = await findByUsernameAndPassword(username, password);
        console.log(`Usuário encontrado: ${user ? user.username : 'Nenhum'}`);

        if (user && user.username === username && user.senha === password) {
            console.log("Passou aqui");
            res.redirect('/dashboard');
        } else {
            console.log("Credenciais inválidas ou usuário não existe");
            res.status(401).json({ message: 'Credenciais inválidas ou usuário não existe' });
        }
    } catch (error) {
        console.error('Erro ao autenticar usuário:', error);
        res.status(500).json({ message: 'Erro interno no servidor' });
    }
};


const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = 3000;

// Configuração para parsing de JSON e URL-encoded
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Configuração para servir arquivos estáticos (CSS, JS, imagens)
app.use(express.static(path.join(__dirname, 'public')));

// Importando as rotas
const authRoutes = require('./routes/authRoute');
const funcionariosRoutes = require('./routes/funcionarioRoute');
const logRoutes = require('./routes/logRoute');
const dashboardRoutes = require('./routes/dashboardRoute');

// Configuração das rotas
app.use('/auth', authRoutes);
app.use('/funcionario', funcionariosRoutes);
app.use('/log', logRoutes);
app.use('/', dashboardRoutes);

// Rota para servir o login.html
app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'login.html'));
});

// Rota para servir o logout.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'logout.html'));
});

// Rota para efetuar o logout
app.post('/logout', (req, res) => {
    // Aqui você pode realizar a lógica de logout, como limpar a sessão, etc.
    // Após realizar o logout, redireciona para a página de login
    res.redirect('/views/login'); // Redireciona para a página de login após logout
});

// Rota para lidar com a raiz "/"
app.get('/', (req, res) => {
    // Redirecionar para a página de login
    res.redirect('/login');
});

// Iniciar o servidor Express
app.listen(port, () => {
    console.log(`Servidor executando na porta ${port}`);
});
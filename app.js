const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const authRoutes = require('./routes/loginRoute'); // Rota de login
const dashboardRoutes = require('./routes/dashboardRoute'); // Rota do dashboard
const authController = require('./controllers/authController'); // Controlador de autenticação

const app = express();

// Middleware
app.use(bodyParser.json());

// Configura express.static para servir arquivos estáticos da pasta public
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'views')));

// Rota para servir o login.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'login.html'));
});

// Rota para processar o login via POST
app.post('/login', authController.login);

// Rotas do dashboard
app.use('/dashboard', dashboardRoutes);

// Rota padrão para tratar erros de rota não encontrada
app.use((req, res, next) => {
    res.status(404).send('Página não encontrada');
});

// Iniciar o servidor
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
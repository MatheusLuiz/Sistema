const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const authRoutes = require('./routes/loginRoute'); 
const dashboardRoutes = require('./routes/dashboardRoute'); 
const funcionarioRoutes = require('./routes/funcionarioRoute'); 

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'views')));

// Middleware para definir a pasta views e o mecanismo de template
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Usando as rotas
app.use('/', authRoutes);
app.use('/dashboard', dashboardRoutes);
app.use('/funcionario', funcionarioRoutes);

// Página inicial
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'login.html'));
});

// Página de logout 
app.get('/logout', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'logout.html'));
});

// Rota de dashboard
app.get('/dashboard', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'dashboard.html'));
});

// Middleware para tratar 404
app.use((req, res, next) => {
    res.status(404).send('Página não encontrada');
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const authRoutes = require('./routes/loginRoute'); 
const dashboardRoutes = require('./routes/dashboardRoute'); 
const authController = require('./controllers/authController'); 
const funcionarioRoutes = require('./routes/funcionarioRoute'); 


const app = express();

app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'views')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'login.html'));
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'logout.html'));
});

app.get('/dashboard', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'dashboard.html'));
});

app.post('/login', authController.login);

app.use('/dashboard', dashboardRoutes);

app.use((req, res, next) => {
    res.status(404).send('Página não encontrada');
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
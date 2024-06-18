const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '12345678',
  database: 'sistema'
});

connection.connect(err => {
  if (err) {
    console.error('Erro ao conectar ao banco: ' + err);
    return;
  }
  console.log('Conexão feita com sucesso ao banco');
});

module.exports = connection;
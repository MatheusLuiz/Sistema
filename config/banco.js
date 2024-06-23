const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'sistema',
    waitForConnections: true,
    connectionLimit: 10, // número máximo de conexões simultâneas
    queueLimit: 0 // número máximo de conexões na fila (0 significa ilimitado)
});

// Conexão a partir do pool
pool.getConnection((err, connection) => {
    if (err) {
        console.error('Erro ao conectar ao banco de dados:', err);
        return;
    }
    console.log('Conexão com o banco de dados MySQL estabelecida');

    // Libera a conexão após uso
    connection.release();
});

module.exports = pool.promise(); 
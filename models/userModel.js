const db = require('../config/banco');

async function findByUsernameAndPassword(username, password) {
    const query = 'SELECT username, senha FROM users WHERE username = ? AND senha = ?';
    const [rows] = await pool.execute(query, [username, password]);
    return rows[0];
}

module.exports = { findByUsernameAndPassword };
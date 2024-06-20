const db = require('../config/banco');

async function findByUsername(username) {
    try {
        const [rows] = await db.query('SELECT username, password FROM logins WHERE username = ? ', [username]);
        return rows[0]; 
    } catch (error) {
        throw error;
    }
}

module.exports = {
    findByUsername
};
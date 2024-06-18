const db = require('../config/banco');

class User {
    static async findByUsername(username) {
        const [rows] = await db.query('SELECT * FROM logins WHERE username = ?', [username]);
        return rows[0];
    }
}

module.exports = User;
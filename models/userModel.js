const db = require('../config/banco');

const User = {
    findByUsernameAndPassword: function(username, password) {
        return new Promise((resolve, reject) => {
            db.query('SELECT * FROM users WHERE username = ? AND password = ?', [username, password], (err, results) => {
                if (err) {
                    return reject(err);
                }
                resolve(results[0]); 
            });
        });
    }
};

module.exports = User;

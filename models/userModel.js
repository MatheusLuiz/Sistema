const db = require('../config/banco');

const User = {
    findByUsernameAndPassword: function(username, password) {
        return new Promise((resolve, reject) => {
            db.query('SELECT username, sennha FROM logins WHERE username = ? AND senha  = ?', [username, password], (err, results) => {
                if (err) {
                    return reject(err);
                }
                resolve(results[0]); 
            });
        });
    }
};

module.exports = User;

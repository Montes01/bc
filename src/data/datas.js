const mysql = require('mysql2');
const registered = require('../models/registered');


const database = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'GruappDta',

})
database.connect();



class userData {
    static addClient( user, email, password, phone) {
        const query = "INSERT INTO Clients ( user, email, password, phone ) VALUES (  ?, ?, ?, ?)";
        return new Promise((resolve, reject) => {
            database.query(query, [user,  email, password,  phone], (err, result) => {
                if (err) {
                    console.error("Error registered " + err.message);
                    reject(err);
                } else {
                    console.log("Client registered successfully");
                    resolve(true);
                }
            });
        });
    }
}






module.exports = {
    userData
}

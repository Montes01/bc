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

    static obtenerInformacionUsuario(id, callback) {
        const query = 'SELECT * FROM Clients WHERE id = ?';
        database.query(query, [id], (err, result) => {
          if (err) {
            console.error('Error al obtener la información del usuario: ' + err.message);
            callback(err, null);
          } else if (result.length === 0) {
            callback(null, null);
          } else {
            const usuario = result[0]; 
            callback(null, usuario);
       }
        });
      }
}






module.exports = {
    userData
}

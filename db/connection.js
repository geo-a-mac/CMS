const mysql = require('mysql2');


// connect to database
const db =  mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'cms'
    }
)

module.exports = db;
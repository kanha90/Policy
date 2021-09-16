require("dotenv").config();
const mysql = require("mysql2");

const mysqlConnection = mysql.createConnection({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        database: process.env.DB_NAME,
        password: process.env.DB_PASSWORD,
        // multipleStatements : true
})

mysqlConnection.connect((err) =>{
    if (!err) {
        console.log("Connect");
    } else {
        console.log('Connection Failed');
    }
})

module.exports = mysqlConnection
// const mysql = require('mysql2');  
// const con = mysql.createConnection({  
// host: "localhost",  
// user: "root",  
// password: "Kanha@1991",  
// database: "kanha"  
// });  
// con.connect(function(err) {  
// if (err) throw err;  
// con.query("SELECT * FROM data_set where Policy_id = '12345'", function (err, result) {  
// if (err) throw err;  
// console.log(result);  
// });  
// }); 


const mysql = require("mysql2");
const express = require('express');
const bodyParser = require('body-parser');
const mysqlConnection = require('./config/connection');
const PeopleRoutes = require("./routes/people.route")
const app = express();
app.use(bodyParser.urlencoded({extended : true}))
app.use(bodyParser.json());


app.use('/people' ,PeopleRoutes)



app.listen(3000 , console.log('Port is running on 3000'))
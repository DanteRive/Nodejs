const mysql = require("mysql2");
  const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
 database: "sys",
  password: "protectfly" }).promise();
connection.query("SELECT * FROM users")
          .then(([rows, fields]) =>{
            console.log(rows);
          })
          .catch(err =>{
            console.log(err);
          });




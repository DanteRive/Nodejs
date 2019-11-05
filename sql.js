const mysql = require("mysql2");
  const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
 database: "sys",
  password: "protectfly" }).promise();
const sql = "INSERT INTO users (idusers, userscol) VALUES (?, ?)";
const user = [ 4,"Stan"];
connection.query(sql, user)
          .then(result =>{
            console.log(result[0]);
          })
          .catch(err =>{
            console.log(err);
          });





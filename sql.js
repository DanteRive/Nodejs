const mysql = require("mysql2");
  const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
 database: "userbasa",
  password: "protectfly" });
const sql = "DELETE FROM users WHERE name=?";
const data = ["Sam"]; // удаляем пользователей с именем Sam
connection.query(sql, data, function(err, results) {
    if(err) console.log(err);
    console.log(results);
});
 
connection.end();




    
    
    






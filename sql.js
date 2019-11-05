const mysql = require("mysql2");
  const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
 database: "userbasa",
  password: "protectfly" });
const sql = `SELECT * FROM users`;
 
connection.query(sql, function(err, results) {
    if(err) console.log(err);
    console.log(results);
});
 
connection.end();

    
    
    






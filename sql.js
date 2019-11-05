const mysql = require("mysql2");
 
const pool = mysql.createPool({
    connectionLimit: 5,
    host: "localhost",
    user: "root",
    password: "protectfly", 
    database: "userbasa"
});
const sql = "INSERT INTO users (name, age) VALUES(?, ?) ";
const data = ["Bill", 25];
pool.query(sql, data, function(err, results) {
  if(err) console.log(err);
  console.log(results);
});

    





    
    
    






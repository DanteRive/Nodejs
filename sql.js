const mysql = require("mysql2");
  const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
 database: "sys",
  password: "protectfly" });
const user = [ 3, "Tom"];
const sql = "INSERT INTO users(idusers, userscol) VALUES(?, ?)";
 connection.query(sql, user, function(err, results) {
    if(err) console.log(err);
    else console.log("Данные добавлены"); }); 
connection.end();


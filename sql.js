const mysql = require("mysql2");
 
const pool = mysql.createPool({
    connectionLimit: 5,
    host: "localhost",
    user: "root",
    password: "protectfly", 
    database: "userbasa"
});
pool.query("SELECT * FROM users", function(err, results) {
        if(err) console.log(err);
        console.log(results);
    });
    

    





    
    
    






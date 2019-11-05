const mysql = require("mysql2");
 
const pool = mysql.createPool({
    connectionLimit: 5,
    host: "localhost",
    user: "root",
    password: "protectfly", 
    database: "userbasa"
}).promise();
pool.execute("SELECT * FROM users")
          .then(result =>{
            console.log(result[0]);
          })
          .catch(function(err) {
            console.log(err.message);
          });

    
    

    





    
    
    






const connection = require('../database/db');

const sql = "CREATE TABLE firstcrud (id INT AUTO_INCREMENT PRIMARY KEY,name VARCHAR(255), age INT, work  VARCHAR(255))";
  connection.query(sql, (err, result) => {
    if (err) throw err;
    console.log("Table created");
  });


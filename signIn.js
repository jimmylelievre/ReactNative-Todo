const mysql = require("mysql");

//Create connexion

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "todolist",
});

// Connect to database

db.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
});

let sql = `SELECT u.id, u.name , t.content 
     FROM user AS u, tache AS t 
    WHERE t.id_user = u.id 
      AND u.isvalid = 1 
    ORDER BY t.content `;

db.query(sql, function (err, result) {
  if (err) throw err;
  for (let i = 0; i < result.length; i++) {
    console.log(result[i].id, result[i].name, result[i].content);
  }
});

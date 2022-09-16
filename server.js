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
  db.query("SELECT * FROM `user` WHERE isvalid = 1", function (err, result) {
    if (err) throw err;
    console.log("Result: " + result.map((e) => e.password));
  });
});

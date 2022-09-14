const mysql = require("mysql");
const { Sequelize } = require("sequelize");

//Create connexion

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "todolist",
});

// Connect to database

db.connect(function (err) {
  if (err) console.log(err.code);
  console.log("Connecté à la base de données MySQL!");
});

/* const sequelize = new Sequelize("todolist", "root", "Drroot0401", {
  dialect: "mysql",
  host: "localhost",
});
try {
  sequelize.authenticate();
  console.log("Connecté à la base de données MySQL!");
  sequelize.query("SELECT * FROM `tache`").then(([results, metadata]) => {
    console.log(results);
  });
} catch (error) {
  console.error("Impossible de se connecter, erreur suivante :", error);
} */

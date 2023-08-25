const mysql = require("mysql2/promise");

const dbpool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "todolist_db",
});

module.exports = dbpool;

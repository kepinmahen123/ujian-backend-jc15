const mysql = require("mysql");
const util = require("util")

const db = mysql.createConnection({
  host: "localhost",
  user: "kevin",
  password: "asd123",
  database: "backend_2021",
  post: 3306,
})

const query = util.promisify(db.query).bind(db)

module.exports = {db, query}
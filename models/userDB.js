const mysql = require("mysql2");
// Simulated database
const users = [
  { "id": 1, "fname": "Jim", "lname": "Smith", "username": "jsmith" },
  { "id": 2, "fname": "Jack", "lname": "Kennedy", "username": "jkennedy" },
  { "id": 3, "fname": "Linda", "lname": "Nelson", "username": "lnelson" },
  { "id": 4, "fname": "Kayli", "lname": "Williams", "username": "kwilliams" },
  { "id": 5, "fname": "Seth", "lname": "Walters", "username": "swalters" },
  { "id": 6, "fname": "Brandon", "lname": "Jones", "username": "bjones" },
  { "id": 7, "fname": "Ally", "lname": "Smith", "username": "asmith" },
  { "id": 8, "fname": "Jordan", "lname": "Wilson", "username": "jwilson" }
];

const connection = mysql.createConnection({
  host: "localhost",
  user: "assignDBuser",
  password: "assignDBpass",
  database: "assignDB"
});

function getUsers(callback) {
  connection.query("SELECT * FROM users", 
    function (err, results) {
    callback(results);
  });
}

function addUser(user, callback) {
    connection.query(
    "INSERT INTO users (fname, lname, username, passwd) VALUES (?, ?, ?, ?)",
    [user.fname, user.lname, user.username, user.passwd],
    function (err, results) {
      if (err){
        console.error(err);
        return;
      }
      callback(results);
    }
  );
}

module.exports = { getUsers, addUser };
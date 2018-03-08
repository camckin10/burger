//requiring mysql
var mysql = require('mysql');

//making sure Node and MYSQL are connected
var connection = mysql.createConnection({
    port: 3000,
    host: "localhost",
    user: "root",
    password: "",
    database: "burgers_db"
});

// Make connection.
connection.connect(function(err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});



//exporting connections 
module.exports = connection;
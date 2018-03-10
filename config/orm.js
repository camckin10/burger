//importing mySQL connection
var connection = require('../config/connection.js');

//methods you will need to use in code
// selectAll() SELECT
// insertOne() INSERT
// updateOne() UPDATE

function printQuestionMarks(num) {
    var arr = [];

    for (var i = 0; i < num; i++) {
        arr.push("?");
    }

    return arr.toString();
}

// Helper function to convert object key/value pairs to SQL syntax
function objToSql(ob) {
    var arr = [];

    // loop through the keys and push the key/value as a string int arr
    for (var key in ob) {
        var value = ob[key];
        // check to skip hidden properties
        if (Object.hasOwnProperty.call(ob, key)) {
            arr.push(key + "=" + ob[key]);
        }
    }

    // translate array of strings to a single comma-separated string
    return arr.toString();
}


//object for sql statements
var orm = {
    //.selectAll()
    all: function(tableInput, cb) {
        var queryString = 'SELECT * FROM ' + tableInput;

        console.log("right outside connection.query");
        connection.query(queryString, function(err, result) {
            console.log("inside connection query");
            if (err) throw err;
            cb(result);
        });
    },
    //.insertOne()
    create: function(table, col, vals, cb) {
        var queryString = 'INSERT INTO ' + table;
        queryString = queryString + ' (';
        queryString = queryString + col.toString();
        queryString = queryString + ') ';
        queryString = queryString + 'VALUES (';
        queryString = queryString + printQuestionMarks(vals.length);
        queryString = queryString + ') ';

        connection.query(queryString, vals, function(err, result) {
            if (err) throw err;
            cb(result);
        });
    },
    //updateOne()
    update: function(table, objColVals, condition, cb) {
        var queryString = 'UPDATE ' + table;
        queryString = queryString + ' SET ';
        queryString = queryString + objToSql(objColVals);
        queryString = queryString + ' WHERE ';
        queryString = queryString + condition;

        console.log(queryString);

        connection.query(queryString, function(err, result) {
            if (err) throw err;
            cb(result);
        });
    }
};




//exporting ORM object
module.exports = orm;
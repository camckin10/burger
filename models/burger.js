//exporting orm.js file
var orm = require('../config/orm.js');

// var burgers = {
//     all:
//     //SELECT * FROM
//         create:
//         //INSERT INTO
//         update:
//         //UPDATE 
// }

var burger = {
    all: function(cb) {
        orm.all('burgers', function(res) {
            console.log("res is", res);
            cb(res);
        });
    },
    create: function(col, vals, cb) {
        orm.create('burgers', col, vals, function(res) {
            cb(res);
        });
    },
    update: function(objColVals, condition, cb) {
        orm.update('burgers', objColVals, condition, function(res) {
            cb(res);
        });
    }
};







//correct module exporting??
module.exports = burger;
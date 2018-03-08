//import following files: express & burger.js
var express = require('express');
var burgers = require("../models/burger.js");
//creating router for app 
var router = express.Router();

//must create routes & set up logic --CRUD
//.get
//.put
//.post
//.delete 

//.get is going to redirect to burger homepage??
router.get("/", function(req, res) {
    res.redirect('/burgers');
});

//second .get is going to print to handlebars all of burgers data entered
router.get("/", function(req, res) {
    burgers.all(function(data) {
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

//will this auto increment id of burger??
//OR is this just creating new data??
router.post("/burgers/create", function(req, res) {
            burgers.create([
                    "burger_name", [req.body.name],
                    function(result) {
                        // Send back the ID of the new quote
                        res.json({ id: result.insertId });

                        //maybe res.redirect('/burgers);
                    });
            });

        router.put("/burgers/update/:id", function(req, res) {
            var condition = "id = " + req.params.id;

            console.log("condition", condition);

            burgers.update({
                devoured: req.body.devoured,
            }, condition, function(data) {

                //always redirect to homepage??
                res.redirect('/burgers);
                }
            });
        });




        //exporting router @ end of file
        module.exports = router;
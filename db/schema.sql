CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers (
    id INTEGER NOT NULL AUTO_INCREMENT,
    burger_name VARCHAR (50) NULL,
    devoured BOOLEAN(40), 
    PRIMARY KEY (id)
  
);


//received information about boolean information
//https://stackoverflow.com/questions/37667064/boolean-type-on-mysql
<?php 


require_once ('db_connect.php');

$query = "DROP TABLE IF EXISTS national_parks";

$dbc->exec($query);

$query = 'CREATE TABLE national_parks (
    id INT AUTO_INCREMENT,
    name VARCHAR(240) NOT NULL,
    location VARCHAR(50) NOT NULL,
    date_establised DATE,
    area_in_acres DOUBLE, 
    PRIMARY KEY (id)
)';
<?php // Get new instance of PDO object
require_once ('national_parks.php');
$dbc = new PDO('mysql:host='.DB_HOST . ';dbname='.DB_NAME, DB_USER, DB_PASS);

// Tell PDO to throw exceptions on error
$dbc->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

 $dbc->getAttribute(PDO::ATTR_CONNECTION_STATUS) . "\n" . PHP_EOL;

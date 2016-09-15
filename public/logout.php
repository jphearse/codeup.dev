<?php 
require_once '/vagrant/sites/codeup.dev/Auth.php';
session_start();
	Auth::logout();

 ?>
 <!DOCTYPE html>
 <html>
 <head>
 	<title>Logout</title>
 	<style>
 		.blue_button {
		    border: solid 1px #328cca;
		    height: 40px;
		    font-size: 20px;
		    /*border-radius*/
		    -moz-border-radius: 5px;
		    -webkit-border-radius: 5px;
		    border-radius: 5px;
		    color: #fff;
		    background-image: -moz-linear-gradient(top, #3798db, #2c7cd2);
		    background-image: -o-linear-gradient(top, #3798db, #2c7cd2);
		    background-image: -ms-linear-gradient(top, #3798db, #2c7cd2);
		    background-image: -webkit-linear-gradient(top, #3798db, #2c7cd2);
		    background-image: -webkit-gradient(linear, left top, left bottom, color-stop(0, #3798db), color-stop(1, #2c7cd2));
		    background-image: linear-gradient(top, #3798db, #2c7cd2);
		    width: 350px;
		    background-color: #2b96f1;
		    /*box-shadow*/
		    -moz-box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
		    -webkit-box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
		    box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
		    cursor: pointer
		}
		.blue_button:hover {
		    background-image: -moz-linear-gradient(top, #3fadf9, #3493f9);
		    background-image: -o-linear-gradient(top, #3fadf9, #3493f9);
		    background-image: -webkit-linear-gradient(top, #3fadf9, #3493f9);
		    background-image: -webkit-gradient(linear, left top, left bottom, color-stop(0, #3fadf9), color-stop(1, #3493f9));
		    background-image: linear-gradient(top, #3fadf9, #3493f9)
 	</style>
 </head>
 <body>
 <h1>You are logged out</h1>
 <a href="/login.php" class="blue_button">Login</a>
 </body>
 </html>
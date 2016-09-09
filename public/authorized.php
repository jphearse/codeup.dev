<?php 
session_start();
var_dump($_SESSION);

	if ($_SESSION['logged-in-name'] != 'guest') {
		header("Location: /login.php");
		die;
	}
 ?>
<!DOCTYPE html>
<html>
<head>
	<title>Authorized</title>
	<link rel="stylesheet" type="text/css" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
	<style>
		body{
			padding: 10px;
		}
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
	<h1>Authorized <?= $_SESSION['logged-in-name']; ?></h1>
	<a href="/logout.php" class="blue_button">Log out</a>
</body>
</html>
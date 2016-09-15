<?php 
session_start();
require_once '/vagrant/sites/codeup.dev/Input.php';
require_once '/vagrant/sites/codeup.dev/Auth.php';

function pageController(){
		$log = [];
		$log['name'] = Input::get('name');
		$log['password'] = Input::get('password');
		$log['failed'] = '';
		if (!empty($log['name'])||!empty($log['password'])) {
			Auth::attempt($log['name'],$log['password']);
			if ($log['name'] != 'guest' || password_verify($log['password'], Auth::$password) == false) {
				$log['failed'] = "Wrong Password/Username";
			}
		}

		Auth::user();
	return $log;
}
extract(pageController());


?>

<!DOCTYPE html>
<html>
<head>
	<title>Login</title>
	<link rel="stylesheet" type="text/css" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
	<style>
		body{
			padding: 10px;
		}
		form{
			width: 350px;
			height: 200px;
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
		}
	</style>
</head>
<body>
<h1>Login</h1>
	<form method="POST">
	        <label>Username</label>
	        <input class="form-control" type="text" name="name" placeholder="Username"><br>
	        <label>Password</label>
	        <input class="form-control" type="password" name="password" placeholder="Password"><br>
	        <input class="blue_button" type="submit">
	</form>
			<h4><?= $failed; ?></h4> 
</body>
</html>
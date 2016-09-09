<?php 
session_start();
var_dump($_SESSION);

function pageController(){
		$log = [];
		$log['name'] = isset($_POST['name']) ? $_POST['name'] : '';
		$log['password'] = isset($_POST['password']) ? $_POST['password'] : '';
		$log['failed'] = '';
		if (!empty($_SESSION)) {
			if ($_SESSION['logged-in-name'] == 'guest') {
				header("Location: /authorized.php");
				die;
			}
		}
 		if (!empty($_POST) || !empty($_GET)) { // check if form was sunmitted

		
		if ($log['name'] == 'guest' && $log['password'] == 'password') {
			header("Location: /authorized.php");
			$_SESSION['logged-in-name']= $log['name'];			
			// remember to die!
			die;
		} else {
			if ($log['name'] == 'guest') {
				$log['failed'] = 'Wrong password';
			} else{
				$log['failed'] = 'Wrong username and/or password';
			}
		}
	}
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
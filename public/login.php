<?php 
function pageController(){
		$log = [];
		$log['name'] = isset($_POST['name']) ? $_POST['name'] : '';
		$log['password'] = isset($_POST['password']) ? $_POST['password'] : '';
		$log['failed'] = '';
		if (!empty($_POST) || !empty($_GET)) {

		
		if ($log['name'] == 'guest' && $log['password'] == 'password') {
			header("Location: /authorized.php");
			// remember to die!
			die;
		} else {
			$log['failed'] = 'Wrong username or password';
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
	</style>
</head>
<body>
<h1>Login</h1>
	<form method="POST">
	        <label>Username</label>
	        <input class="form-control" type="text" name="name"><br>
	        <label>Password</label>
	        <input class="form-control" type="password" name="password"><br>
	        <input class="btn btn-primary" type="submit">
	</form>
			<h4><?= $failed; ?></h4> 
</body>
</html>
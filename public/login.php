<?php 
	$name = isset($_POST['name']) ? $_POST['name'] : '';
	$password = isset($_POST['password']) ? $_POST['password'] : '';
	$failed = '';
	if (!empty($_POST) || !empty($_GET)) {

	
	if ($name == 'guest' && $password == 'password') {
		header("Location: /authorized.php");
		// remember to die!
		die;
	} else {
		$failed = 'Wrong username or password';
	}
}
?>

<!DOCTYPE html>
<html>
<head>
	<title>Login</title>
	<link rel="stylesheet" type="text/css" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
</head>
<body>
<h1>Login</h1>
	<form method="POST">
	        <label>Username</label>
	        <input type="text" name="name"><br>
	        <label>Password</label>
	        <input type="password" name="password"><br>
	        <input type="submit">
	</form>
			<h4><?= $failed; ?></h4> 
</body>
</html>
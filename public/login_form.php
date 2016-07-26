<?php
  var_dump($_GET);
  var_dump($_POST);
?>
<!DOCTYPE html>
<html lang="en">
<head>
	<title>Login Info</title>
</head>
<meta charset="utf-8">
<body>
	<form method="POST" action="/login_form.php">
		<p>
			<label for="username">Username or Email</label>
			<input id="username" type="text" name="username" placeholder="Type your username">
		</p>
		<p>
			<label for="password">Password</label>
			<input type="password" id="password" name="password" placeholder="Type your password">
		</p>
		<input type="checkbox" name="remember_me" id="remember_me" value="yes">
		<label for="remember_me">Remember me?</label>
		<p>
			<button type="submit">Submit</button>
		</p>
	</form>

</body>
</html>
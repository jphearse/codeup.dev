<?php
  var_dump($_GET);
  var_dump($_POST);
?>
<!DOCTYPE html>
<html lang="en">
<head>
	<title></title>
</head>
<meta charset="utf-8">
<body>

	<form method="POST" action="/registration_form.php">
		<p>
			<label for="first">First Name</label>
			<input type="text" id="first" name="first" placeholder="Type first name">
		</p>		
	
		<p>
			<label for="last">Last Name</label>
			<input type="text" id="last" name="last" placeholder="Type your last name">
		</p>

		<p>
			<label for="email">Email Address</label>
			<input type="text" id="email" name="email" placeholder="Type Email">
		</p>

		<p>
			<label for="password">Password</label>
			<input type="password" id="password" name="password" placeholder="Enter Password">
		</p>		
		<p>
			<label for="confirm">Re-type Password</label>
			<input type="confirm" id="confirm" name="confirm" placeholder="Re-type Password">
		</p>
		<p>
			<input type="checkbox" name="news" id="news" value="yes" checked>
			<label for="checkbox">Sign up for newsletter?</label>
		</p>
		<button type="submit">Submit Info</button>
	</form>



</body>
</html>
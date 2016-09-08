<?php 
function pageController(){

$count = [];
$count['counter'] = (isset($_GET['counter'])) ? $_GET['counter'] :  0;

return $count;
}
extract(pageController());

 ?>

<!DOCTYPE html>
<html>
<head>
	<title>Pong</title>
	<link rel="stylesheet" type="text/css" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
	<style>
	body {
		padding: 10px;
	}
	a {
		border-radius: 5px;
	    background-color: red;
	    border: 0;
	    color: white;
	    padding: 10px 20px; 
	}
	a:hover {
		color: #4a4a4a;
	    text-decoration: none;  
	}

	</style>
</head>
<body>
<h1>Pong</h1><br>
<h3>Counter: <?= $counter; ?> </h3>

<a href="ping.php?counter=<?= $counter +1; ?>&hit">Hit</a>
<a href="ping.php?&miss">Miss</a>
</body>
</html>
<?php 
function pageController(){

	$count = [];
	$count['counter'] = (isset($_GET['counter'])) ? $_GET['counter'] :  0;
	$count['hit'] = (isset($_GET['hit'])) ? $_GET['hit'] :  "";
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
	}
	#container{
		float: left;
		position: relative;
		width: 250px;
	}

	</style>
</head>
<body>
<div id="container">
	<h1>Pong</h1>
	<h3>Counter: <?= $counter; ?> <?= $hit; ?></h3>

	<a class="btn btn-info" href="ping.php?counter=<?= $counter +1; ?>&hit=hit">Hit</a>
	<a class="btn btn-info" href="ping.php?&hit=miss">Miss</a>
</div>
<img src="/img/pong.jpg">
</body>
</html>
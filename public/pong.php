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
</head>
<body>
<h1>Pong</h1><br>
<h3>Counter: <?= $counter; ?> </h3>

<a href="ping.php?counter=<?= $counter +1; ?>&hit">Hit</a>
<a href="ping.php?&miss">Miss</a>
</body>
</html>
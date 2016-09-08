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
<title>Ping</title>
<link rel="stylesheet" type="text/css" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
</head>
<body>
<h1>Ping</h1><br>
<h3>Counter: <?= $counter; ?> </h3>

<a href="pong.php?counter=<?= $counter +1; ?>&hit">Hit</a>
<a href="pong.php?miss">Miss</a>
</body>
</html>
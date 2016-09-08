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
	<title>Counter</title>
	<link rel="stylesheet" type="text/css" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
</head>
<body>
<h1>Counter: <?= $counter; ?> </h1>
<a href="counter.php?counter=<?= $counter +1; ?>">Up</a>
<a href="counter.php?counter=<?= $counter -1; ?>">Down</a>
</body>
</html>
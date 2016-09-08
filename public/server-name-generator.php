<?php 


function randomElement($array){
	$random = mt_rand(0,count($array)-1);
	return $array[$random];
}
function generator($element, $element2)
{
	return randomElement($element) . "-" . randomElement($element2);
}
function pageController(){
	$adjectives = ['Wandering', 'Hideous', 'Fancy', 'Jealous', 'Aspiring', 'Complex', 'Awesome', 'Chubby', 'Ablaze', 'Devilish', 'Difficult', 'Sorry','Anxious','Huge','Cute'];
	$nouns = ['tree','fork','tent','hands','thunder','baby','donkey','fairy','dog','airplane', 'soup', 'poet', 'dealer', 'pizza', 'driver'];

	// Initialize an empty data array.
    $data = array();

    // Add data to be used in the html view.
    $data['serverName'] = generator($adjectives, $nouns);

    // Return the completed data array.
    return $data;
}
extract(pageController());
?>
<!DOCTYPE html>
<html>
<head>
	<title>Server Name Generator</title>
	<link rel="stylesheet" type="text/css" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
	<style>
		h1{
			font-size: 50px;
			font-family: copperplate;
			text-align: center;
		}
	</style>
</head>
<body>
	<h1>Server Name: <?= $serverName; ?></h1>
</body>
</html>
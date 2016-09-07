<?php 

$adjectives = ['Wandering', 'Hideous', 'Fancy', 'Skillful', 'Aspiring', 'Complex', 'Awesome', 'Chubby', 'Ablaze', 'Devilish'];
$nouns = ['tree','fork','tent','hands','thunder','baby','donkey','fairy','dog','airplane'];

function randomElement($array){
	$random = mt_rand(0,9);
	return $array[$random];
}
function generator($element, $element2)
{
	return randomElement($element) . " " . randomElement($element2);
}
?>
<!DOCTYPE html>
<html>
<head>
	<title>Server Name Generator</title>
	<style>
		h1{
			font-size: 50px;
			font-family: copperplate;
			text-align: center;
		}
	</style>
</head>
<body>
	<h1>Server Name: <?php echo generator($adjectives, $nouns); ?></h1>
</body>
</html>
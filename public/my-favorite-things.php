<?php 
$favoriteThings = ['Not doing homework', 'Concerts', 'Movies', 'Weekends', 'Netflix'];

?>

<!DOCTYPE html>
<html>
<head>
	<title>Favorite Things</title>
	<link rel="stylesheet" type="text/css" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
	<style>
	table{
		font-size: 20px;
	}
	tr:nth-child(even) {
		background-color: #f2f2f2;
	}
	</style>
</head>
<body>
 <table>
  <tr>
    <th>Favorite Things</th>
  </tr>
    <?php foreach ($favoriteThings as $things) { ?>
  <tr>
    	<td><?php echo $things ?></td>
  </tr>
    <?php } ?>

</table>
</body>
</html>

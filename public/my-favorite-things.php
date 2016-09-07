<?php 
$favoriteThings = ['Not doing homework', 'Concerts', 'Movies', 'Weekends', 'Netflix'];

?>

<!DOCTYPE html>
<html>
<head>
	<title>Favorite Things</title>
	<style>
	
	tr:nth-child(even) {
		background-color: #f2f2f2}
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

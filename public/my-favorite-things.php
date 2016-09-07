<?php 
$favoriteThings = ['Not doing homework', 'Concerts', 'Movies', 'Weekends', 'Netflix'];

?>

<!DOCTYPE html>
<html>
<head>
	<title>Favorite Things</title>
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

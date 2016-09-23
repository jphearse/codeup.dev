<?php 

define('DB_HOST','127.0.0.1');
define('DB_NAME', 'parks_db');
define('DB_USER', 'parks_user');
define('DB_PASS', 'codeup');

require '/vagrant/sites/codeup.dev/db_connect.php';

function pageController($dbc)
{
	$offset = (isset($_GET)) ? $_GET['offset'] : 0 ;
	$stmt = $dbc->query('SELECT * FROM national_parks');
	return [
		'parks' => $dbc->query('SELECT * FROM national_parks LIMIT 4 OFFSET ' . $offset)->fetchAll(PDO::FETCH_ASSOC),
		'parkCount' => $stmt->rowCount()
	];
};
extract(pageController($dbc));
?>

<!DOCTYPE html>
<html>
<head>
	<title></title>
</head>
<body>
<table>
				<th><h4>Row</h4></th>
				<th><h4>Name</h4></th>
				<th><h4>Location</h4></th>
				<th><h4>Date Established</h4></th>
				<th><h4>Area In Acres</h4></th>

				<?php foreach ($parks as $index => $park) { ?>
					<tr>
						<td> <?= $park['id'] ?> </td>
						<td> <?= $park['NAME'] ?> </td>
						<td> <?= $park['location'] ?> </td>
						<td> <?= $park['date_established'] ?> </td>
						<td> <?= $park['area_in_acres'] ?> </td>
					</tr>
				<?php } ?>
			</table>
			<?php $j = 1 ;for($i = 0; $i <= $parkCount; $i+=4) { ?>
				<a href="national_parks.php?offset=<?=$i?>"><?=($j++)?></a>
			<?php } ?>
</body>
</html>
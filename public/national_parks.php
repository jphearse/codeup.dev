<?php 

define('DB_HOST','127.0.0.1');
define('DB_NAME', 'parks_db');
define('DB_USER', 'parks_user');
define('DB_PASS', 'codeup');

require '/vagrant/sites/codeup.dev/db_connect.php';
require '/vagrant/sites/codeup.dev/input.php';

function pageController($dbc) 
{
	$offset = (Input::get('offset') == true) ? (Input::getNumber('offset')) : 0;
	$query = ("SELECT * FROM national_parks");
	$stmt = $dbc->prepare($query);
	$stmt->execute();
	$query2 = ("SELECT * FROM national_parks LIMIT 4 OFFSET ".$offset);
	$stmt2 = $dbc->prepare($query2);
	$stmt2->execute();
	$parks = $stmt2 ->fetchAll(PDO::FETCH_ASSOC);
$errors = [];
try {
function submitNewPark($dbc) 
{
	$query = 'INSERT INTO national_parks (name, location, date_established, area_in_acres, description) VALUES (?, ?, ?, ?, ?)';
	
	function format($date){
		return date_create($date)->format('Y-m-d');
	}
	$date = format(Input::get('date_established'));

	$stmt = $dbc->prepare($query);
	$stmt->execute(array(Input::getString('name'),Input::getString('location'), $date ,Input::getNumber('area_in_acres'),Input::getString('description')));
}
if(Input::get('name')) {
	submitNewPark($dbc);
};

	
} catch (Exception $exception){
	$errors[] = $exception->getMessage();
}
var_dump($errors);
	return [ 
		'parks' => $parks,
		'error' => $errors,
		'parkCount' => $stmt->rowCount()
	];
};
extract (pageController($dbc));
?>

<!DOCTYPE html>
<html>
<head>
	<title>National Parks</title>
	<link rel="stylesheet" type="text/css" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
</head>
<body>
<table class="table table-striped">
				<th><h4>Row</h4></th>
				<th><h4>Name</h4></th>
				<th><h4>Location</h4></th>
				<th><h4>Date Established</h4></th>
				<th><h4>Area In Acres</h4></th>
				<th><h4>Description</h4></th>

				<?php foreach ($parks as $key => $park) { ?>
					<tr>
						<td> <?= htmlspecialchars(strip_tags($park['id'])); ?> </td>
						<td> <?= htmlspecialchars(strip_tags($park['NAME'])); ?> </td>
						<td> <?= htmlspecialchars(strip_tags($park['location'])); ?> </td>
						<td> <?= htmlspecialchars(strip_tags($park['date_established'])); ?> </td>
						<td> <?= htmlspecialchars(strip_tags($park['area_in_acres'])); ?> </td>
						<td> <?= htmlspecialchars(strip_tags($park['description'])); ?> </td>
					</tr>
				<?php } ?>
			</table>
			<?php $j = 1 ;for($i = 0; $i <= $parkCount; $i+=4) { ?>
				<a href="national_parks.php?offset=<?= $i ?>" class="btn btn-success"><?=($j++)?></a>
			<?php } ?>

			 <br><h3><?php foreach ($error as $err) {
					echo $err;
				} ?></h3>
			<form method="GET">
				<h5>Name: </h5>
				<input type="text" name="name" class="form-control" placeholder="Name" value="<?php echo htmlspecialchars(Input::get('name')); ?>" required><br>
				<h5>Location: </h5>
				<input type="text" name="location" class="form-control" placeholder="Location" value="<?php echo htmlspecialchars(Input::get('location')); ?>" required><br>
				<h5>Date: </h5>
				<input type="text" name="date_established" class="form-control" placeholder="YYYY-MM-DD" value="<?php echo htmlspecialchars(Input::get('date_established')); ?>"
				required><br>
				<h5>Area in Acres: </h5>
				<input type="text" name="area_in_acres" class="form-control" placeholder="Area in Acres" value="<?php echo htmlspecialchars(Input::get('area_in_acres')); ?>"><br>
				<h5>Description: </h5>
				<input type="text" name="description" class="form-control" placeholder="Description" value="<?php echo htmlspecialchars(Input::get('description')); ?>"><br>
				<input type="submit" name="submit">


			</form>
</body>
</html>
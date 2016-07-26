<?php
  var_dump($_GET);
  var_dump($_POST);
?>
<!DOCTYPE html>
<html lang="en">
<head>
	<title>Pizza Order</title>
	<link rel="stylesheet" href="/css/pizza_css.css">
</head>
<meta charset="utf-8">
<body>
	<form>
		<label for="quantity">Quantity</label>
		<select id="quantity" name="quantity">
			<option>1</option>
			<option>2</option>
			<option>3</option>
			<option>4</option>
			<option>5</option>
			<option>6</option>
			<option>7</option>
			<option>8</option>
			<option>9</option>
			<option>10</option>
		</select>
		<p>
			<label for="crust">Crust Style</label>
			<select id="crust" name="crust">
				<option>Regular</option>
				<option>Stuffed</option>
				<option>Thin</option>
				<option>Pretzel</option>
			</select>
		</p>
		<p>
			<label for="size">Size</label>
			<select id="size" name="size">
				<option>Small</option>
				<option>Medium</option>				
				<option>Large</option>
			</select>
		</p>
		<p>Toppings</p>
    	<label><input type="checkbox" id="topping1" name="topping[]" value="cheese"><img src="/img/cheese.jpg" alt="cheese"></label>
    	<label><input type="checkbox" id="topping2" name="topping[]" value="pepperoni"><img src="/img/pepperoni.jpg" alt="pepperoni"></label>
    	<label><input type="checkbox" id="topping3" name="topping[]" value="sausage"><img src="/img/sausage.jpg" alt="sausage"></label><br>
    	<label><input type="checkbox" id="topping4" name="topping[]" value="pineapple"><img src="/img/pineapple.jpg" alt="pineapple"></label>

    	<p>
			<label for="first">First Name</label>
			<input type="text" id="first" name="first" placeholder="Type first name">
		</p>		
	
		<p>
			<label for="last">Last Name</label>
			<input type="text" id="last" name="last" placeholder="Type your last name">
		</p>

		<p>
			<label for="address">Address</label>
			<input type="address" id="address" name="address" placeholder="Type address">
		</p>
		<p>
			<label for="card">Credit Card</label>
			<input type="card" id="card" name="card" placeholder="Enter Credit Card Info">
		</p>
		<p>
			<textarea id="info" name="info" placeholder="Enter Additional Information" rows="15" cols="50"></textarea>
		</p>
		<button type="submit">Order</button>
	</form>

</body>
</html>
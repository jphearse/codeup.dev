<?php
  var_dump($_GET);
  var_dump($_POST);
?>
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8">
	<title>My First HTML Form</title>
</head>
<body>
<h2>User Login</h2>
	<form method="POST" action="/my_first_form.php"> <!--GET = download POST = post to server/upload -->
    <p>
        <label for="=username" >Username</label>
        <input id="=username" name="username" type="text" placeholder="Type your username">
    </p>
    <p>
        <label for="password" >Password</label>
        <input id="password" name="password" type="password" placeholder="Type your password">
    </p>
    <p>
        <button type="submit" name="H" value="Login">Click the button</button>
    </p>

	</form>

	<form method="GET" action="https://duckduckgo.com">
    	<label>Search Duckduckgo</label>
    	<input type="text" name="q">
    	<input type="submit">
    </form>
    <h2>Compose email</h2>
    <form>
    	<input type="text" name="To" placeholder="To:"><br>
    	<input type="text" name="From" placeholder="From:"><br>
    	<input type="text" name="Subject" placeholder="Subject:"><br>
    	<textarea id="email_body" name="email_body" rows="15" cols="50">Compose email</textarea>
    	<input type="submit" value="Send">
    </form>

    <input type="checkbox" id="compose_email" name="compose_email" value="yes" checked>
    <label for="compose_email">Do you want to save a copy to sent folder?</label><br><br>

    <a href="https://www.reddit.com/search?q=javascript&sort=top&restrict_sr=&t=all">Searches Reddit for Javascript and sorted by Top</a><br><br>

    <form method="GET" action="https://www.reddit.com/search/">
    	<label>Search Reddit and sort by top</label>
    	<input type="text" name="q">
    	<input name="sort" value="top" type="hidden"> 
    	<button type="submit">Search</button>
    </form>
    <h1>Multiple Choice Test</h1>
    <form>
    <p>Which basketall team is in the West</p>
    	<label>
    		<input type="radio" name="q1" value="San Antonio Spurs">San Antonio Spurs
    	</label>
    	<label>
    		<input type="radio" name="q1" value="Atlanta Hawks">Atlanta Hawks
    	</label>
    	<p>Which basketball team is in the East</p>
    	<label>
    		<input type="radio" name="q2" value="Dallas Mavericks">Dallas Mavericks
    	</label>
    	<label>
    		<input type="radio" name="q2" value="Cleveland Cavaliers">Cleveland Cavaliers
    	</label>
    	<p>Which team won the championship this year?</p>
    	<label><input type="radio" name="q3" value="Cleveland Cavaliers">Cleveland Cavaliers</label>
    	<label><input type="radio" name="q3" value="Golden State Warriors">Golden State Warriors</label>
    	<p>Which teams are in Texas</p>
    	<label><input type="checkbox" id="nba1" name="nba[]" value="Houston Rockets">Houston Rockets</label>
    	<label><input type="checkbox" id="nba2" name="nba[]" value="Dallas Mavericks">Dallas Mavericks</label>
    	<label><input type="checkbox" id="nba3" name="nba[]" value="San Antonio Spurs">San Antonio Spurs</label><br>
    	<label for="cars">Which cars are foreign?</label>
    	<select id="cars" name="cars[]" multiple>
    		<option value="audi">Audi</option>
    		<option value="toyota">Toyota</option>
    		<option value="bmw">BMW</option>
    		<option value="ford">Ford</option>
    		</select>
    	<br>
    	<button type="submit">Submit</button>
    </form>
    <h1>Select Testing</h1>
    <form>
    	<label for="mac">Do you own a Mac?</label>
    	<select id="mac" name="mac">
    		<option value="1">Yes</option>
    		<option value="0">No</option>
    	</select>
    	<button type="submit">Submit</button>
    </form>

</body>
</html>
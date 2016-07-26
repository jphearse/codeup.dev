
<?php var_dump($_POST) ?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title></title>
    <link rel="stylesheet" type="text/css" href="/my_first_external_css.css">
</head>
<body>
    <h1>Please Sign Up</h1>
    <form method="POST">
        <label for="username">Username</label>
        <input id="username" type="text" name="username">
        <br>

        <label for="email">Email</label>
        <input id="email" type="text" name="email">
        <br>

        <label for="password">password</label>
        <input id="password" type="password" name="password">
        <br>

        <label for="confirm_password">confirm password</label>
        <input id="confirm_password" type="password" name="confirm_password">
        <br>

        <h2>Filing Status</h2>

        <label>
            <input type="radio" name="filing_status" value="single">
            Single
        </label>
        <br>
        
        <label>
            <input type="radio" name="filing_status" value="married_joint">
            Married Filing Jointly
        </label>
        <br>
        
        <label>
            <input type="radio" name="filing_status" value="married_separate">
            Married Filing Separately
        </label>
        <br>
        
        <label>
            <input type="radio" name="filing_status" value="hoh">
            Head of Household
        </label>
        <br>
        
        <h2>This past year I was (check all that apply)</h2>

        <label>
            <input type="checkbox" name="employment_status[]" value="self_employed">
            Self - Employed
        </label>
        <br>
        
        <label>
            <input type="checkbox" name="employment_status[]" value="small_business">
            Employed by a small business (< 50 employees)
        </label>
        <br>
        
        <label>
            <input type="checkbox" name="employment_status[]" value="large_business">
            Employed by a large business (> 50 employees)
        </label>
        <br>
        
        <label for="phone_type"><h2>What kind of phone do you have</h2></label>

        <select name="phone_type" id="phone_type">
            <option value="android">Android</option>
            <option value="iphone">iPhone</option>
            <option value="windows">Windows Phone</option>
            <option value="other">Other</option>
        </select>

        <hr>

        <label for="newsletter">Sign Me Up For The Newsletter
            <input type="checkbox" name="newsletter" id="newsletter" checked>
        </label>
        <br>
        <button type="submit">Submit</button>
    </form>
    


</body>
</html>
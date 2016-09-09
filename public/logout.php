<?php 
function clearSession()
{
    // clear $_SESSION array
    session_unset();
    
	session_destroy();
    // delete session data on the server and send the client a new cookie
    session_regenerate_id(true);
}

// start the session (or resume an existing one)
// this function must be called before trying to get or set any session data!
session_start();


clearSession();


 ?>
 <!DOCTYPE html>
 <html>
 <head>
 	<title>Logout</title>
 </head>
 <body>
 <h1>You are logged out</h1>
 </body>
 </html>
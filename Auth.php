<?php 
require_once '/vagrant/sites/codeup.dev/Log.php';
require_once '/vagrant/sites/codeup.dev/public/functions.php';
class Auth 
{
	public static $password = '$2y$10$SLjwBwdOVvnMgWxvTI4Gb.YVcmDlPTpQystHMO2Kfyi/DS8rgA0Fm';


	public static function attempt($username, $password){

		
		if ($username == 'guest' && password_verify($password, Auth::$password) == 'password') {
			header("Location: /authorized.php");
			$_SESSION['logged-in-name']= $username;			

			$instance = new Log('cli');

			$instance->filename = "log-". date('Y-m-d') . '.log';
			$instance->info("User {$username} in successfully");
			die;
		} elseif($username != 'guest' || password_verify($password, Auth::$password) != 'password') {
			$instance = new Log('cli');

				$instance->filename = "log-". date('Y-m-d') . '.log';
				$instance->info("User {$username} failed");
		}
	}
	public static function check(){

			if ($_SESSION['logged-in-name'] != 'guest') {
				header("Location: /login.php");
				return true;
				die;
			} else{
				return false;
			}

	}
	public static function user(){
		 if (isset($_SESSION['logged-in-name'])) {
            return $_SESSION['logged-in-name'];
        }
	}
	public static function logout(){
		session_unset();
    
		session_destroy();

	    session_regenerate_id(true);

	    session_start();
	}
}

?>
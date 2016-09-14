<?php 

class Log 
{
	public $filename;
	public $handle;
	function __construct ($prefix = 'log')
	{	
		$this->filename = $prefix ."-". date('Y-m-d') . '.log';
		$this->handle = fopen($this->filename, 'a');
	}

	function __destruct(){
		fclose($this->handle);
	}

	public function logMessage($logLevel, $message)
	{		
		date_default_timezone_set('America/Chicago');

		$date = date("Y/m/d h:i:s");

		fwrite($this->handle, $date . " " .$logLevel .": ".$message. PHP_EOL . "-----------------------------------------------------" . PHP_EOL);
	}

	public function info($message){
		$this->logMessage("INFO", $message);
	}
	public function error($message){
		$this->logMessage("ERROR", $message);
	}
}

?>
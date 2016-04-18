<?php 

/*this is the logger class, contains all log file related actions 
 */

class Logger {
    
    // public $handle;
    public $message = NULL;
    private $log_file = "./logs/log.txt";

    function __construct() {
        //	check if file exists.
        if (!$this->check_exist()) {
            //"x+" Create and open for reading and writing
            fopen($this->log_file, "x+");
            chmod($this->log_file, "0755");
        }
        
        //check if file readable
        if (!$this->check_readable()) {
            $this->message = "file is not readable!";
            exit;
        }
    }
    
    public function check_exist() {
        return file_exists($this->log_file)? TRUE : FALSE ;
    }
    
    public function check_readable() {
        return is_readable($this->log_file)? TRUE : FALSE ;
    }
    
    public function log_action($action, $msg = "") {
        $oneRecord = strftime("%Y-%m-%d %H:%M:%S") . " | {$action}: {$msg}\n";
        
        if ($handle = fopen($this->log_file, "a+")) {
            fwrite($handle, $oneRecord);
            fclose($handle);
        } else {
            $this->message = "could not open file for writing.";
        }
    }
    
    public function clear($user_id) {
        //	check if file exists.
        if ($this->check_exist($this->log_file)) {
            //clear all logs
            if ($handle = fopen($this->log_file, "w")) {
                $clearLog = strftime("%Y-%m-%d %H:%M:%S") . " | Log was cleared by User ID: {$user_id}\n";
                fwrite($handle, $clearLog);
                fclose($handle);
            }
        } else {
            $this->message = "Log file does not exist";
        }
    }
    
    public function output_log() {
        $output = "";
        if (empty($this->message)) {
            // return nl2br(file_get_contents($this->log_file));
            
            $output .= "<ul class=\"log-entry\">";
            $file_arr = file($this->log_file, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);
            
            foreach ($file_arr as $entry) {
                $output .= "<li>" . htmlentities($entry) . "</li>";
            }
            $output .= "</ul>";
            return $output;
        } else {
            return $this->message;
        }
    }
}

$logger = new Logger();

?>
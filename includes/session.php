<?php 
/*
A class to help work with Sessions. In our case, primarily to manage logging users in and out.
*/


class Session {
    
    public $username;
    private $logged_in = FALSE;
    
    function __construct() {
        session_start();
        $this->check_login();   //intialize session object according to current $_SESSION status
        
        if ($this->logged_in) {
            //actions to take right away if user is logged in
        } else {
            //actions to take right away if user is NOT logged in
        }
    }
    
    public function is_logged_in() {
        return $this->logged_in;
    }
    
    public function login($user_name, $logger) {
        //database should find user based on username/password/email
        if ($user_name) {
            $this->username = $_SESSION["username"] = $user_name;
            $this->logged_in = TRUE;
            
            //log this action
            $logger->log_action("Login", "{$user_name} has logged in.");
        }
    }
    
    public function logout($logger) {
        //log this action
        $logger->log_action("Logout", "{$this->username} has logged out.");
        
        unset($_SESSION["username"]);
        unset($this->username);
        $this->logged_in = FALSE;
    }
    
    private function check_login() {
        if (isset($_SESSION["username"])) {
            $this->username = $_SESSION["username"];
            $this->logged_in = TRUE;
        } else {
            unset($this->username);
            $this->logged_in = FALSE;
        }
    }

}


$session = new Session();

?>
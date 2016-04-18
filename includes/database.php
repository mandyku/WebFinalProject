<?php 
//Database Constants
defined("DB_SERVER") ? NULL : define("DB_SERVER", "localhost");
defined("DB_USER") ? NULL : define("DB_USER", "root");
defined("DB_PASS") ? NULL : define("DB_PASS", "m62431226");
defined("DB_NAME") ? NULL : define("DB_NAME", "test");


class MySQLDatabase {
    private $link;

    public function __construct() {
        $this->open_connection();
    }

    public function open_connection() {
        $this->link = mysqli_connect(DB_SERVER, DB_USER, DB_PASS, DB_NAME);
        if (mysqli_connect_errno()) {
            die("Database connection failed: ".mysqli_connect_error()
                ." (".mysqli_connect_errno().")");
        }
    }

    public function close_connection() {
        if (isset($this->link)) {
            mysqli_close($this->link);
            unset($this->link);
        }
    }

    public function query($sql) {
        $result = mysqli_query($this->link, $sql);
        $this->confirm_query($result);
        return $result;
    }

    private function confirm_query($result) {
        //cannot be called outside of this class
        if (!$result) {
            die("Database query failed.");
        }
    }

    //database "neutral" functions
    public function escape_str($str) {
        return mysqli_real_escape_string($this->link, $str);
    }

    public function fetch_assoc($result_set) {
        return mysqli_fetch_assoc($result_set);
    }
    
}

$db = new MySQLDatabase(); //instantiate a MySQLDatabase, and open a connection
$database =& $db;   //make a reference, they point to the same database object

?>
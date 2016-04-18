<?php 
require_once("includes/logger.php");
require_once("includes/session.php");
require_once("includes/functions.php");
?> 

<?php
//check existing session
if (!$session->is_logged_in()) {
    redirect_to("login.html");
}
?>

<?php 
    //simple logout
    $session->logout($logger);
    
    redirect_to("login.html");
    
 ?>
<?php 
require_once("includes/database.php");
require_once("includes/logger.php");
require_once("includes/session.php");
require_once("includes/functions.php");
?> 

<?php 
if (!$session->is_logged_in()) {
    redirect_to("login.html");
}
?> 

<!--show page header-->
<?php include_once("includes/header.php") ?>


<h1>Welcome: <?php echo ucfirst($_SESSION["username"]); ?> </h1> 

<?php 
echo $session->username;
?>


<div>
    <a href="logout.php" onclick="return confirm('Are you sure?');">Log out
            </a>
</div>

<!--show page footer-->
<?php include_once("includes/footer.php") ?>
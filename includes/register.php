<?php
    session_start();
   
    $username = $_POST["username"];
    $password = $_POST["password"];
    $email = $_POST["email"];
    $encrypted_pass =  password_hash( $password , PASSWORD_BCRYPT, ['cost'=>10]);


    $dbhost = "localhost:3306";
    $dbuser = "root";
    $dbpass = "root";
    $dbname = "test";

    $con = mysql_connect($dbhost, $dbuser, $dbpass,$dbname);
    
    if (!$con)
    {
        echo "No connection";
    }    

    mysql_query("SET NAMES 'utf8'");
    mysql_select_db($dbname);



    $emailquery = "select * from 'toystore_user' where email = '$email';";
    $emailcheck = mysql_query($emailquery) or die('MySQL query error');
    $emailresult = mysql_fetch_array($emailcheck);

    $userquery = "select * from 'toystore_user' where username = '$username';";
    $usercheck = mysql_query($userquery) or die('MySQL query error');
    $userresult = mysql_fetch_array($usercheck);

    if ($emailresult) 
    {
        echo 'email';
    }
    else if ($userresult)
    {
        echo 'user';
    }

    else
    {
       
        $sql = "insert into 'test'.'toystore_user' ( 'id', 'username', 'password', 'email') values (NULL, '$username', '$encrypted_pass', '$email');";

        $result = mysql_query($sql) or die('MySQL query error');

        $_SESSION[$username] = $username;
        echo 'success';
    }

   
?>
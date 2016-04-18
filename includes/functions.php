<?php 
//used for redirect page
function redirect_to($location = NULL) {
    if ($location != NULL) {
        header("Location: {$location}");
        exit;
    }
}

function authenticate($username = "", $password = "", $email = "") {
    global $db;
    $username = $db->escape_str($username);
    $password = $db->escape_str($password);
    $email = $db->escape_str($email);

    $sql = "SELECT * ";
    $sql .= "FROM toystore_user ";
    $sql .= "WHERE username = '{$username}' ";
    // $sql .= "AND password = '{$password}' ";
    $sql .= "AND email = '{$email}' ";
    $sql .= "LIMIT 1; ";
    $result_set = $db->query($sql);

    //get a found user or return NULL
    if (empty($result_set)) {
        return NULL; //user not found
    } else {
        $user = $db->fetch_assoc($result_set);

        if (password_verify($password, $user["password"])) {
            return $user;
        } else {
            return NULL; //password does not match
        }
    }
}



?>
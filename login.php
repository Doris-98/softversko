<?php

include 'config.php';
session_start();

if(isset($_POST['submit'])){

    $email = mysqli_real_escape_string($conn, $_POST['email']);
    $pass = mysqli_real_escape_string($conn, md5($_POST['password']));

    $selected_users = mysqli_query($conn, "SELECT * FROM 'users' WHERE email= '$email' AND password = '$pass'") or die('query failed');

    if($row['user_type'] == 'user'){
        $_SESSION['user_name'] = $row['name'];
        $_SESSION['user_email'] = $row['email'];
        $_SESSION['user_id'] = $row['id'];
        header('location:index.html');
    }
    else{
        $message[] = 'incorrect email or password';
    }
}

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>login</title>
    <link rel="stylesheet" href="dist\css\style2.css">
</head>
<body>
    <?php
    if(isset($message)){
        foreach($message as $message){
            echo '
            <div class="message">
                <span>' .$message. '</span>
                <i class="fas fa-times" onclick="this.parentElement.remove();"></i>
            </div>'
        }
    }
?>


</body>
</html>
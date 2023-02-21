<?php
    include "getFromDatabase.php";

    $users = getFromDatabase();
    $users = array_filter($users, function ($current) {
        return $current['id'] != $_POST['id'];
    });

    $jsonData = json_encode($users);
    file_put_contents("./database.json", $jsonData);
    header("location:./index.php")
?>
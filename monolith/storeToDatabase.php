<?php

//Superglobals - promijenjive kojima mozemo pristupiti u svim fajlovima GET POST PUT SERVER

function storeToDatabase(){
    $arrayToStore = [
        "name" => $_POST["name"],
        "email" => $_POST["email"],
        "phoneNumber" => $_POST["phoneNumber"],
    ];
    $jsonData = json_encode($arrayToStore);
    file_put_contents("./database.json", $jsonData);
}

storeToDatabase();
header("location:/.Jedanaesti-cas")
?>
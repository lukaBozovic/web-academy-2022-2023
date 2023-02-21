<?php

include "./getFromDatabase.php";
include "./userOperations.php";
//Superglobals - promijenjive kojima mozemo pristupiti u svim fajlovima GET POST PUT SERVER

function storeToDatabase(){
   /* $resultFromDatabase = getFromDatabase();  
    $currentArray = $resultFromDatabase == null ? [] : $resultFromDatabase;           Ternarni operator*/

    $currentArray = getFromDatabase();
    if ($currentArray == null)     
        $currentArray = [];
    $arrayToStore = [
        "id" => getIdForNewUser($currentArray),
        "name" => $_POST["name"],
        "email" => $_POST["email"],
        "phoneNumber" => $_POST["phoneNumber"],
    ];

    $currentArray[] = $arrayToStore;
    $jsonData = json_encode($currentArray);
    file_put_contents("./database.json", $jsonData);
}

storeToDatabase();
header("location:./index.php")
?>
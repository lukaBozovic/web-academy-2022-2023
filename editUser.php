<?php

include "./getFromDatabase.php";

function editUser(){
    $currentArray = getFromDatabase();
    //Uzimamo podatke koji su poslati kroz formu
    $id = $_POST["id"];
    $name = $_POST["name"]; 
    $email = $_POST["email"];
    $phoneNumber = $_POST["phoneNumber"];

    //prolazimo kroz sve elemente iz nase baze i trazimo onaj sa id-em koji nama treba
    foreach($currentArray as &$currentElement){
        if ($currentElement['id'] == $id){
            $currentElement['name'] = $name;
            $currentElement['email'] = $email;
            $currentElement['phoneNumber'] = $phoneNumber;
        }
    }

    $jsonData = json_encode($currentArray);
    file_put_contents("./database.json", $jsonData);
}

editUser();
header("location:./index.php")
?>
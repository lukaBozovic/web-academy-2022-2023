<?php
     header("Access-Control-Allow-Origin:*");
     $phonebook = [
            ["name" => "Petar Petrovic", "email" => "petar@mailinator.com","phoneNumber" => "069999999"],
            ["name" => "Marko Markovic", "email" => "marko@mailinator.com","phoneNumber" => "069999999"],
            ["name" => "Ana Markovic", "email" => "ana@mailinator.com", "phoneNumber" => "069999999"],
    ];
        echo json_encode($phonebook);
?>

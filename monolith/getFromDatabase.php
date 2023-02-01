<?php

//citanje iz fajla
function getFromDatabase(){
    $jsonString = file_get_contents("./database.json");
    return json_decode($jsonString, true);
}

?>
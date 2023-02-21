<?php

    function getIdForNewUser($arrayFromDatabase){
        $max = 0;
        if (!$arrayFromDatabase)
            $max = 1;
        foreach($arrayFromDatabase as $currentElement){
        if ($currentElement['id'] > $max)
            $max = $currentElement['id'];
        }
        return $max + 1;
    }

    function deleteUser($id){

    }


?>
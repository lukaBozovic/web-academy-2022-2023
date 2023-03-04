<?php

include "Calculations.php";

class Car extends Vehicle {
 
    private $color;
    private static $temp = 5;
    use Calculations;

    public function __construct($code, $model, $color){
        parent::__construct($code, $model);
        $this->color = $color;
    }

    //override
    public function print(){
        echo "Code is: $this->code Model is: $this->model Color is: $this->color";
    }

    public static function getClass(){
        return "Car";
    } 

    public function getTemp(){
        return self::$temp;
    }
}


?>
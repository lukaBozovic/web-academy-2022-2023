<?php

Trait Calculations{

    public $price = 0;

    public function calculatePrice(){
        if ($this->model == 'Peugeot' && $this->code == 407)
            $this->price = 3000;
        else 
            $this->price = 0;
    }

    public function printPrice(){
        echo $this->price;
    }
}


?>
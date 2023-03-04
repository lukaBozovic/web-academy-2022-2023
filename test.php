<?php

include 'Vehicle.php';
include 'Car.php';

//kreiranje objekta
$vehicle1 = new Vehicle(123, "peugeot");
$vehicle2 = new Vehicle(444);
$vehicle3 = new Vehicle();
//pozivanje metoda iz nekog objekta koji je instanca klase
$vehicle3->setCode(34);
//var_dump($vehicle3->getCode());
//var_dump($vehicle2->code);

//$car1 = new Car(435, 'citroen', 'blue');
/*$car1->print();
$car1->getTemp();
Car::getClass();
*/
//Dovrsiti sledeci cas - da vidimo zasto se desavao error
/*$car1->setCode(407);
$car1->setModel('Peugeot');
$car1->print();*/
//$car1->printPrice();

$car1 = new Car(407, 'Peugeot', 'blue');
$car1->calculatePrice();
$car1->printPrice();
?>
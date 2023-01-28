<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <?php
        //Definisinje varijabli u phpu
        $variableName = 5;
        $stringVariable = "Hello world";
        $decimalVariable = 4.5;

        //funkcije
        function firstFunction(){
            echo "<h1>Hello world<h1>";
        }

        function sum($a, $b){
            return $a + $b;
        }

        //aritmeticke operacije
        //+ - * / 
        //logicki operatori
        // === == && || | &
        // a | b

        //ispis
       /* echo "<h1>Hello world<h1>";
        var_dump(5 === 5.0);*/

        function stringOperations(){
            $s1 = "dadad ";
            $s2 = "acadca";
            $s3 = "Danas je lijep i suncan dan";
            //return $s1 . $s2;
            //Funkcija explode nam vraca niz koji se dobija kada se ovaj string izdijeli po nekom sablonu - stringu koji 
            //predajemo kao prvi argument
            //return explode(" ", $s3);

            //provjerava da li string sadrzi neki drugi string
            //return str_contains($s3, "dan");
    
            //return str_replace("dan", "noc", $s3);
        }

        $a = 35456;

        function printArray($array){
        if (count($array) == 0)
            echo "<h1>Nema elemanata niza</h1>";
        else {
            echo "<h1>Elementi niza su :</h1>";
            /*for($i = 0; $i < count($array); $i++){
            echo "<h3>$array[$i]</h3> <br>";
            }*/

            foreach ($array as $element) {
                echo "<h3>$element</h3> <br>";
            }

            /*$i = 0;
            while($i < count($array)){
            echo "<h3>$array[$i]</h3> <br>";
            $i++;
            }*/
        }

        }

        //deklaracija niza i dodavanje elemenata na kraj niza
        $array = [];
        $array[] = 5;
        $array[] = 7;
        $array[] = 8;
        
        /*echo firstFunction();
        echo sum(5, 10);
        echo "<br>";
        var_dump(stringOperations());
        */
        printArray($array);
        //duzina niza
        echo strlen("ascas");

    ?>
</head>
<body>
    
</body>
</html>
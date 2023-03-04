<?php 

class Vehicle {
    private $code;
    private $model;

    public function __construct($code = null, $model = null){
        $this->code = $code;
        $this->model =  $model;
    }

    public function getCode(){
        return $this->code;
    }

    public function setCode($code){
        if ($code == null){
            //izbaci gresku
            throw new UnexpectedValueException('It is not possible to set code on null');
        }
            
        $this->code = $code;
    }
    public function getModel(){
        return $this->model;
    }

    public function setModel($model){
        if ($model == null){
            //izbaci gresku
            throw new UnexpectedValueException('It is not possible to set code on null');
        }
        $this->model = $model;
    }

    public function print(){
        echo "Code is:". $this->code . "    Model is: " . $this->model;
    }

}

?>
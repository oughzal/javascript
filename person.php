<?php
class Person{
    public $cmp = 0;
    public $id;
    public $nom;
    public $prenom;
    public function __construct($n,$p){ // Le constructeur de la classe Person
        $this->nom = $n;
        $this->prenom = $p;
        $this->id = $this->cmp;
    }

}


?>
<?php

function dd($data) 
{
    echo '<pre>';
    var_dump($data);
    echo '</pre>';
    die;
}

echo '<pre>';

class User
{
    public $name;
    public $id;
}

$peteris = new User();
$liene = new User();


$peteris->name = 'Pēteris';
$liene->name = 'Liene';

var_dump($peteris);
var_dump($liene);
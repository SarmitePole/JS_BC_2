<?php
echo 'Uztaisīt klasi, kurai izveidojot jaunu instanci, izdrukāsies Hello World-------<br>'; 

// <!-- new Foo(); -> Hello World

//  new Foo();
//  new Foo();
//  new Foo();

//  Hello World
//  Hello World
//  Hello World -->


class Cat
{
    public function __construct() 
    {
        echo 'Hello World' . '<br>';
    }
}

$muris = new Cat ('Muris');
$muris = new Cat ('Muris');
$pupa = new Cat ('Pupa');
$pupa = new Cat ('Pupa');


echo '-------<br>';
echo '---2.uzd. Uztaisīt klasi, kas to izveidojot saņems vienu parametru (string) un tajā būs metode 
sayHello(). Izsaucot šo metodi izdrukāsies "Hello, {name}" uz ekrāna-----<br>';

// class Boom
// {
//     public $name;

//     public function __construct() 
//     {
//         $this->name = $name;
//     }

//     public function sayHello(): string
//     {
//         return 'Hello ' . $this->name . '<br>';
//     }

// }

// echo sayHello('Boom');


echo '-------<br>';
echo '---3.uzd līdzīgi kā pirmais, bet aiz Hello World izdrukā skaitli, cik new instances ir uztaisītas-----<br>';

class Foo
{
    public static $newCount;

    public function __construct() 
    {
        self::$newCount++;
        echo 'Hello World - ' . $newCount . '<br>';
    }
}

$muris = new Foo ('Muris');
$muris = new Foo ('Muris');
$pupa = new Foo ('Pupa');
$pupa = new Foo ('Pupa');

echo '-------<br>';
echo '---4.Uztaisīt bankomātu, metodes getBallance() = pārada konta atlikumu, addMoney() = pieskaita naudu., withdrawMoney = noņems naudu-----<br>';
//$atm = new Atm();
//$atm->getBallance();//0
//$atm->addMoney(50);
//$atm->getBallance();//50
//$atm->withdrawMoney(15);//
//$atm->getBallance();//35

class Atm
{
    
    public $ballance = 0;
      
    public function __construct()
    {
        function addMoney(): void
        {
            $this-> $ballance + $money;
        }
    }

    public function withdrawMoney(): void
    {
        $this-> $ballance + $money;
    }

}

$atm = new Atm();

echo '-------<br>';
echo '---5.uzd. Uztaisīt bankomatu, kurs prot izdrukāt visu darījumu vēsturi-----<br>';



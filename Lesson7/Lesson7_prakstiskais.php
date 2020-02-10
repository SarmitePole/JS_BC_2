<?php
echo '1.uzd Uztaisīt klasi, kurai izveidojot jaunu instanci, izdrukāsies Hello World-------<br>'; 

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


echo '------------------------<br>';
echo '---2. Uzrakstīt klasi, kas to izveidojot saņems vienu paramentru (string) un tajā būs metode sayHello(). Izsaucot šo metodi, izdrukāsies "Hello, {name}" uz ekrāna.--<br>';
// $foo = new Bar('Boom!');
// $foo->sayHello();
// $foo->sayHello();

// Hello, Boom!
// Hello, Boom!
// Hello, Boom!



class Bar
{
    public $sayHello;
    public $setNewText;
    
    public function __construct(string $sayHello)
    {
        echo 'Hello, ' . '<br>';
    }

    public function setNewText(string $setNewText)
    {
        $this->setNewText = $setNewText;
        $sayHello =  $sayHello . $setNewText . '<br>';
    }

}

$bar = new Bar('boom!');


echo '-------<br>';
echo '--- 3. Līdzīgi, kā 1. uzdevums, bet katru reizi drukājot Hello world, izdrukā arī skaitli, cik "new" instances līdz tam brīdim ir taisītas.-----<br>';

// new Foo();
// new Foo();
// new Foo();
// new Foo();

// Hello world - 1
// Hello world - 2
// Hello world - 3
// Hello world - 4

class Foo
{
    private $name;
    public static $fooCount = 0;

    public function __construct(string $name)
    {
        $this->name = $name;
        self::$fooCount++;
        echo 'Hello World - ' . Foo::$fooCount . '<br>';
    }
    
}

$a = new Foo('A');
$b = new Foo('B');
$c = new Foo('C');
$d = new Foo('D');
$d = new Foo('D');
$d = new Foo('D');
$d = new Foo('D');


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
        $this->ballance = $ballance;
    }

    public function addMoney(int $numToAdd): void
    {
        $this->numToAdd = $numToAdd;
        $this->result = $this->ballance + $this->numToAdd;
    }

    public function withdrawMoney(int $numToWithdraw): void
    {
        $this->numToWithdraw = $numToWithdraw;
        $this->result = $this->ballance - $this->numToWithdraw;
    }
 
    public function getBallance(): int
    {
        return $this->result;
    }
}

$calc = new Atm();

echo $calc->ballance . '<br>';
echo $ballance . '<br>';

echo numToAdd(50) . '<br>';
echo $calc->numToAdd(50) . '<br>';
echo $this->numToAdd(50) . '<br>';

echo $calc->getBallance() . '<br>';


echo '-------<br>';
echo '---5.uzd. Uztaisīt bankomatu, kurs prot izdrukāt visu darījumu vēsturi-----<br>';

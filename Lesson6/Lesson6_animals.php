<?php

function dd($data) 
{
    echo '<pre>';
    var_dump($data);
    die;
}

interface Namable 
{
    public function getName(): string;
}

trait GetsName
{
    public function getName() : string 
    {
        return $this->name;
    }
}

abstract class Animal implements Namable
{
    use GetsName;

    private $name;
    protected $energy = 10;
    public static $animalCount = 0;

    public function __construct(string $name)
    {
        $this->name = $name;
        self::$animalCount++;
    }

    public function run(): void
    {
        $this->energy --;
    }

    public function eat(): void
    {
        $this->energy ++;
    }

    abstract public function speak(): string;

}

final class Cat extends Animal
{
   public function speak(): string
   {
       return 'Meaw!';
   }
}

class Dog extends Animal
{
    public static $dogCount = 0;

    public function speak(): string
    {
       return 'Meaw!';
    }

    public function __construct(string $name)
    {
        self::$dogCount++;
        parent::__construct($name);
    }


    public function eat(): void
    {
        $this->energy +2;
    }

}

class Person implements Namable
{
    use GetsName;

    private $name;

    public function __construct(string $name) 
    {
        $this->name = $name;
    }

    public function pet(Animal $animal): void
    {
        echo $this->name . ' is petting ' . $animal->getName() . '<br>';
        echo $animal->getName() . ' says ' . $animal->speak() . '<br>';
    }
}


echo Animal::$animalCount . '<br>';

$muris = new Cat ('Muris');
$muris->run();
echo Animal::$animalCount . '<br>';


$reksis = new Dog ('Reksis');
$reksis->eat();

$billy = new Person ('Willy');
$billy->pet($muris);
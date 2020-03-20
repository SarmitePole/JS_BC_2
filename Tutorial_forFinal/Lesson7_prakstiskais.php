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



// class Bar
// {
//     public $sayHello;
//     public $setNewText;
    
//     public function __construct(string $sayHello)
//     {
//         echo 'Hello, ' . '<br>';
//     }

//     public function setNewText(string $setNewText)
//     {
//         $this->setNewText = $setNewText;
//         $this->sayHello = $this->sayHello . $setNewText . '<br>';
//     }
// }

// $bar = new Bar('boom!');


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
$c = new Foo('C');
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

// class Atm
// {
//     public $ballance = 0;
    
//     public function __construct()
//     {
//         $this->ballance = $ballance;
//     }

//     public function addMoney(int $numToAdd): void
//     {
//         $this->numToAdd = $numToAdd;
//         $this->result = $this->ballance + $this->numToAdd;
//     }

//     public function withdrawMoney(int $numToWithdraw): void
//     {
//         $this->numToWithdraw = $numToWithdraw;
//         $this->result = $this->ballance - $this->numToWithdraw;
//     }
 
//     public function getBallance(): int
//     {
//         return $this->result;
//     }
// }

// $calc = new Atm();

// echo $calc->ballance . '<br>';
// echo $ballance . '<br>';

// echo numToAdd(50) . '<br>';
// echo $calc->numToAdd(50) . '<br>';
// echo $this->numToAdd(50) . '<br>';

// echo $calc->getBallance() . '<br>';


echo '-------<br>';
echo '---5.uzd. Uztaisīt bankomatu, kurs prot izdrukāt visu darījumu vēsturi-----<br>';

echo '-------<br>';
echo '-------<br>';
echo '-------<br>';
echo '----Jāņa variants--------------------<br>';
echo '---2. Uzrakstīt klasi, kas to izveidojot saņems vienu paramentru (string) un tajā būs metode sayHello(). Izsaucot šo metodi, izdrukāsies "Hello, {name}" uz ekrāna.--<br>';
// $foo = new Bar('Boom!');
// $foo->sayHello();
// $foo->sayHello();

// Hello, Boom!
// Hello, Boom!
// Hello, Boom!

class Bar
{
    private $name;

    public function __construct(string $name)
    {
        $this->name = $name;
    }

    public function sayHello()
    {
        echo 'Hello, ' . $this->name . '<br>';
    }
}

$foo = new Bar('Boom!');
$roo = new Bar('Puk...');
$foo->sayHello();
$foo->sayHello();
$roo->sayHello();
$foo->sayHello();
$foo->sayHello();

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

class Doo 
{
    private static $count = 0; //ja nebūtu static, tad visu laiku būtu vērtība 1

    public function __construct()
    {
        self::$count++;
        echo 'Hello world - ' . self::$count . '<br>';
    }
}

new Doo();
new Doo();
new Doo();
new Doo();

echo '-------<br>';
echo '---4.Uztaisīt bankomātu, metodes getBallance() = pārada konta atlikumu, addMoney() = pieskaita naudu., withdrawMoney = noņems naudu-----<br>';
//$atm = new Atm();
//$atm->getBallance();//0
//$atm->addMoney(50);
//$atm->getBallance();//50
//$atm->withdrawMoney(15);//
//$atm->getBallance();//35

class NotEnoughMoneyException extends Exception {

}
//Exception ir iebūveta klase..būs vēl ļoti, dauds iebūveto klašu

class Atm
{
    private $balance = 0;

    public function getBalance(): void 
    {
        echo $this->balance . '<br>';
    }

    public function addMoney(float $amount): void 
    {
        $this->balance += $amount;
    }
    
    public function withdrawMoney(float $amount): void 
    {
        if ($this->balance - $amount < 0) {
            throw new NotEnoughMoneyException('Not enough money dude!');
        }

        $this->balance -= $amount;
    }
}


$atm = new Atm();
$atm->getBalance();
$atm->addMoney(50);
$atm->getBalance();

try {
    $atm->withdrawMoney(51);
} catch(Exception $e) {
    echo 'Not enough money dear customer!<br>';
}

$atm->getBalance();


echo '-------<br>';
echo '---5.uzd. Uztaisīt bankomatu, kurs prot izdrukāt visu darījumu vēsturi-----<br>';

class Account
{
    private $balance = [];

    public function addMoney(float $amount): void 
    {
        if ($amount < 0) {
            throw new Exception('Do you even math?');
        }

        $this->balance[] = $amount; //šādi pieveino elementu pie masīva, nevis array push, kas ir lēnāks

    }
    
    public function withdrawMoney(float $amount): void 
    {
        $this->balance[] = $amount * -1;
    }

    public function getBalance(): void 
    {
        $amount = 0;
        foreach ($this->balance as $item) {
            $amount += $item;
        }
        echo $amount . '<br>';
    }

    public function getHistory(): void 
    {
        foreach ($this->balance as $item) {
            echo $item . '<br>';
        }
    }


}

$account = new Account();
$account->addMoney(10);
$account->addMoney(3);
$account->addMoney(4);
$account->withdrawMoney(2);
$account->getBalance();
$account->getHistory();

echo '-------<br>';
echo '---JAUNS JAUNS JAUNS-----<br>';
echo '---1.uzd. Uztaisīt klasi, kura kā parametrus ņem 3 skaitļus =  malu garumus -----<br>';

// getVolume();
// getArea();
// is Square();
// isCube();

// $shape = new Shape (5,5,15);
// echo $shape->getVolume(); //375
// echo $shape->getArea(); //25
// echo $shape->isSquare(); //true
// echo $shape->isCube(); //false


class Shape
{
    private $x;
    private $y;
    private $z;

    public function __construct(int $x, int $y, int $z)
    {
        $this->x = $x;
        $this->y = $y;
        $this->z = $z;
    }
    
    public function getVolume()
    {
        echo $this->x * $this->y * $this->z . '<br>';
    }

    public function getArea()
    {
        echo $this->x * $this->y . '<br>';
    }

    public function isSquare(): void 
    {
        if ($this->x == $this->y &&  $this->x != $this->z) {
            echo 'true' . '<br>'; 
        } else {
            echo 'false' . '<br>';
        }
    }

    public function isCube(): void 
    {
        if ($this->x == $this->y && $this->x == $this->z) {
            echo 'true' . '<br>'; 
        } else {
            echo 'false' . '<br>';
        }
    }
    
}

$shape = new Shape (5, 5, 15);
echo $shape->getVolume();
echo $shape->getArea();
echo $shape->isSquare();
echo $shape->isCube();


echo '-------<br>';
echo '-------<br>';
echo '---2. Tamagoči! uzrakstīt savu dzīvnieku klasi, kam ir vārds, enerģija un izsalkums.-----<br>';

// dzīvnieku var pabarot (samazina izsalkumu, bet ne zem 0).
// Dzīvneiks var gulēt (palielinās enerģija)
// Dīzvnieks var skriet / lidot / peldēt / gulēt (ja ir sliņķis). Tas samazina enerģiju un palielina izsalkumu.

// Ja enerģija ir 0, tad dzīvineks nevar darīt darbību. 
// Ja izsalkums ir virs 10, tad dzīvnieks arī negrib neko darīt, ir jāpabaro.


class Tomagochi
{
    
    private $name;
    public $energy = 10;
    public $hunger = 10;

    public function __construct(string $name)
    {
        $this->name = $name;
    }

    public function eat(): void
    {
        $this->hunger ++;

        if ($this->hunger > 10 ) {
            throw new Exception('This creature is hungry');
        }

       
        echo 'You fed that Beast. His hunger level is ' . $this->hunger . '<br>';
    }

    public function sleep(): void
    {
        $this->energy ++;
        echo 'Slept a tiny bit.<br>';
        echo 'Energy level now is ' . $this->energy . '<br>';
    }

    public function moveTomagochi(): void
    {

        if ($this->energy <= 0) {
            throw new Exception('This creature is not movable');
        }

        $this->hunger --;
        $this->energy ++;
        echo 'Tomagochi is being avtive.<br>';
        echo 'After these activities hunger level is increased to ' . $this->hunger . ', but energy level is drpped to ' . $this->energy . '<br>';
    }

}

$dodo = new Tomagochi ('Dodo');
$dodo->eat();
$dodo->sleep();
$dodo->sleep();
$dodo->moveTomagochi();
$dodo->moveTomagochi();


try {
    $dodo->eat();
    $dodo->sleep();
    $dodo->sleep();
    $dodo->moveTomagochi();
    $dodo->moveTomagochi();
} catch(Exception $e) {
    echo 'This creature is not movable<br>';

} catch(Exception $e) {
    echo 'Feed that poor creature before it is dead becouse of your demands to do something<br>';
}

echo '-------<br>';
echo '---Jāņa variants-----<br>';
echo '---1.uzd. SHAPE -----<br>';

class Shappe
{
    private $height;
    private $width;
    private $lenght;

    public function __construct(float $height, float $width, float $lenght)
    {
        $this->height = $height;
        $this->width = $width;
        $this->lenght = $lenght;
    }

    public function getVolume(): float 
    {
        return $this->height * $this->width * $this->lengh;
    }

    public function getArea(): float 
    {
        return $this->height * $this->width;
    }

    public function isSquare(): bool 
    {
        return $this->height == $this->width;
        // par cik atbilde ir bool, tad var bez if
    }

    public function isCube(): bool 
    {
        return $this->height == $this->width 
        && $this->height == $this->lengh;
        // par cik atbilde ir bool, tad var bez if
    }
}

echo $shape->getVolume();
echo $shape->getArea();
echo $shape->isSquare();
echo $shape->isCube();

//var arī šitā
echo ($shape->isSquare() ? 'true' : 'false') . '<br>';

echo '-------<br>';
echo '-------Jāņa variants<br>';
echo '---2. Tamagoči! uzrakstīt savu dzīvnieku klasi, kam ir vārds, enerģija un izsalkums.-----<br>';

class SlothIsFullException extends Exception
{
   
}

class SlothIsOutOfEnergyException extends Exception
{
    
}

class Sloth
{
    private $name;
    private $hunger = 9;
    private $energy = 1;

    public function __construct(string $name)
    {
        $this->name = $name;
    
    }

    public function sleep(): void 
    {
        $this->energy++;
    }

    public function eat(): void 
    {
        if ($this->hunger <=0) {
            throw new Exception ('This sloth is totally full!');
        }
        $this->hunger--;
    }

    public function breathe(): void 
    {
        if ($this->energy <=0) {
            throw new Exception ('Stop breathing!!!! You are going to die!');
        }
        $this->hunger++;
        $this->energy--;
    }
}

$donald = new Sloth('Donalds');
try {
    $donald->eat();
    $donald->eat();
    $donald->sleep();
    $donald->breathe();
    $donald->breathe();

} catch(SlothIsFullException $e) {
    echo 'Something is wrong with that Sloth<br>';
} catch(SlothIsOutOfEnergyException $e) {
    echo 'Something is wrong with that Sloth<br>';
} finally {
    echo 'Boom! <br>';
}





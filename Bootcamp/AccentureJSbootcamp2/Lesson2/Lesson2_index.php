<?php 

// +
// -
// *
// /
// % matemātiskās darbības

// . 
 
// Kastošana - pārtaisa datus uz citu datu formu

// (int) -> integer
// (float) -> float
// (string) -> string
// (array) -> array
// (obj) -> object
// (bool) -> boolean

// ja nevarēs nokastot, tad izmetīs eeror

echo 1 + '123' . '<br>'; // stringu '123' mēģinās pārvērst par integeru, jo tiek prasīts, veikt matemātisku darbību
echo 1 + (int)'123' . '<br>'; // labāk norādīt viņam, ka es tiešam gribu, lai strings šeit tiek uzskatīts par integeru

$someNumber = '123';
echo 1 + (int)$someNumber . '<br>';

// <
// >
// !=
// ===
// !==


var_dump(1 > 2);
echo 1 > 2 . '<br>';

var_dump(1 == '1');
echo '<br>';

var_dump('a' == 'a' && 'a' == 'b');
echo '<br>';

var_dump('a' == 'a' || 'a' == 'b');
echo '<br>';

$foo = 'a';
var_dump($foo == 'a' || $foo == 'b');

$bar = 3;
var_dump($bar > 5 && $bar < 2 || $bar == 3);
// false && false || true
// false || true

$bar = 3;
var_dump($bar > 5 && $bar < 2|| $bar == 3);
// $bar > 5 && $bar < 2|| $bar == 3
//  false   && false   ||    true
//       false         ||    true
//                     true
echo '<br>';


echo '-------Nosacījumi algoritmu rakstīšanai--------<br>';
echo '-------CONTROL FLOW--------<br>';

if (1 > 5) {
    echo 'boom!<br>';
} else {
    echo 'no boom today :( <br>';
}



$baz = 5;

if ($baz < 3) {
    echo '$baz is less than 3 <br>';
} else  if ($bar <= 5) {
    echo '$baz is less or equal to 5  <br>';
} else {
    echo '$baz is greater than 5 <br>';
};
// Ja ieraksta single quotos - tad mainīgo parāda kā tekstu, ja double quotos - tad parāda mainīga vērtību

// vai skaitlis ir pāra vai nepāra

$baz = 3;

if ($baz % 2 == 0) {
    echo $baz . 'is an even number <br>';
} else {
    echo $baz . 'is an odd number <br>';
}

$num2 = 3;
if ($num2 = 4) {
    echo '$num2 is 4 <br>';
}

// SWITCH statement
echo '-------SWITCH statement--------<br>';

$foo = 5;
switch ($foo) {
    case 1:
        echo $foo . ' is 1 <br>';
        break;
    case 2:
        echo $foo . ' is 2 <br>';
        break;
    case 3:
        echo $foo . ' is 3 <br>';
        break;
    default:
        echo $foo . ' is not 1, 2 or 3 <br>';
        break;
};


/// izdrukā visus ciparus no 1 līdz 10
echo '-------izdrukā visus ciparus no 1 līdz 10--------<br>';

while (false) {
    echo 1;
}
$i = 0;
while ($i <= 10) {
    echo $i . '<br>';
    $i++;

    // $i++ -> $i = $i + 1;
    // $i-- -> $i = $i - 1;
    // $i += 2; $i = $i + 2;
    // $i /= 2; $i = $i / 2;
    // $i -= 2; $i = $i - 2;
    // $i *= 2; $i = $i * 2;
    
    // $foo = 'ab';
    // $foo .= 'c'; => $foo = $foo . 'c';

}


echo '-------WHILE cikls--------<br>';

do {
    echo 'Doing!<br>';
} while (false);


echo '-------WHILE cikls--------<br>';

$i = 0;
do {
    $i++;
    echo 'Doing!<br>';
} while ($i < 5);

echo '-------WHILE cikls--------<br>';

$i = 6;
do {
    $i++;
    echo 'Doing!<br>';
} while ($i < 5);


echo '-------FOR cikls--------<br>';

for ($i = 0; $i <20; $i++) {
    echo $i . '<br>';
}

// uzrakstīt for ciklu, kurš skaita no 0 līdz 100 un katrā rindā saka pāra vai nepāra
for ($i = 0; $i <=25; $i++) {
    
    if ($i % 2 == 0) {
        echo $i . 'is an even number <br>';
    } else {
        echo $i . 'is an odd number <br>';
    }
    
}

// uzrakstīt ciklu, kurš drukā zvaigznītes pieaugoši Mājas darbs

$star = '* ';
for ($i = 1; $i <=8; $i++) {	 
    for ($r = 1; $r <=$i; $r++) {	  	
    echo $star;	 
    }	  	

    echo '<br>';   	
}  

echo '----------------<br>';
// uzrakstīt ciklu, kurš drukā zvaigznītes pieaug/samazinās Mājas darbs
$star = '* ';
for ($i = 1; $i <=8; $i++) {   
    
    for($r=1; $r<=$i; $r++) {   
        echo $star;   
    }  
    
    echo '<br>';   
}  

for ($i = 7; $i >=1; $i--) {   
    
    for($r = 1; $r <=$i; $r++) {  
        echo $star;   
    }   

    echo '<br>';   
}  


echo '----------------<br>';
// skaita uz leju

for ($i = 10; $i > 1; $i--) {
    echo $i . '<br>';
}



echo '----------------<br>';

// cikls darbam ar mašīnām FOR EACH

$cars = ['vaz', 'zaz', 'gaz', 'maz', 'uaz', 'bmw'];
foreach ($cars as $car) {
    echo $car . '<br>';
}

///lai tiktu pie atslēgas nosaukuma (vai numura)

$cars = ['vaz', 'zaz', 'gaz', 'maz', 'uaz', 'bmw'];
foreach ($cars as $kkkk => $cccc) {
    echo 'The car number is ' . $kkkk . 'and name is ' . $cccc . '<br>';
}
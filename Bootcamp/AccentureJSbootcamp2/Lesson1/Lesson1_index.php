
<?php 

$someInteger = 123; //semikoli ir obligāti

$someFloat = 3.14;  //foat

$someText = 'Foo';
$someText2 = "Bar"; //labāk šitās pēdiņas nē

$someText3 = '
Foo
Bar
Baz
<br>';
echo $someText3;

$someText4 = '
Foo<br>
Bar<br>
Baz<br>';
echo $someText4;

$someText5 = 'Foo ' . 'Bar'; //concatenate
echo $someText5 . '<br>';

$someTrue  = false; //bool

$someNothing; //null
$someNothing2 = null; //null

echo 'Hello ' . 123 . '<br>'; //var concatinēt dažādas vērtības

// +
// -
// *
// /
// % matemātiskās darbības

echo 1 + '1' . '<br>';
echo 2 + 2 * 2 . '<br>';
echo true + true . '<br>';

// MASĪVI

$cars = ['vaz', 'maz', 'gaz', 'zaz', 'uaz', 'bmw']; //ja masīvs ir ļoti liels, tad labāk sadalīt pa rindām
echo $cars[5] . '<br>'; //atrod elementu ar šo numuru

$cars [4] = 'foo';
echo $cars[4] . '<br>'; //samaina vērtību

$cars[10] = 'baz';
echo $cars[10] . '<br>'; //pievieno jaunu vērtību vietā nr10, ja paprasīs izdrukāt 8 elementu, tad izmetīs error

echo var_dump($cars) . '<br>'; //izdrukā visu info par masīvu

$cars[] = 'audi'; //pievieno nākošo jauno elementu
$cars[] = 'fiat';


var_dump($cars) . '<br>';

$oldschool = array('foo', 'bar'); //nelietot!!! vecs

$person = [
    [
    'name' => 'John',
    'surname' => 'Doe',
    'age' => 21,
    ],
    [
    'name' => 'Jane',
    'surname' => 'Doe',
    'age' => 20,
    ],
    
];
echo $person[1]['surname'] . '<br>'; // multidimensionāls acociatīvs masīvs, kad vērtības ir nevis pēc kārtas, bet ar atslēgām

$person[] = 123;
var_dump($person) . '<br>'; ////

//aizverošais nav obligāti, ja ir tikai php, tad var nelikt
?> 
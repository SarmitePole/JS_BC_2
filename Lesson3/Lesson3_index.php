<?php 
declare(strict_types=1);


//float
//bol
//

echo '--------FUNKCIJAS------<br>';

function addTwoNumbers($num1, $num2) {
    $result = $num1 + $num2;

    return $result; //parasti pirms return liek atstarpi

    //aiz vārda return, nekas nenotiek. pie RETURN funkcija apstājas strādāt
}

echo addTwoNumbers(5,10) .  '<br>';
echo addTwoNumbers(5,'10') .  '<br>';

echo '--------uuu------<br>';

function addTwoooNumbers($num1, $num2 = 5) {
    $result = $num1 + $num2;

    return $result; 
    
}

echo addTwoooNumbers(5,123) .  '<br>';
echo addTwoooNumbers(5) .  '<br>'; /// ja viņam neiedeva otro vērtību, tad viņs skatā vai tikai nebija definets kaut kur iepriekš

echo '--------noteikt datu tipu------<br>';

function addTwoNuumbers(int $num1, ?int $num2 = 5) {
    $result = $num1 + $num2;

    return $result;
 
}

echo addTwoNuumbers(5,10) .  '<br>';

// ?int $num2 = null ....šeit ? nozīmē, ka dati ir vai nu integer vai  nav vispār

echo '-------<br>';
echo '------1 uzrakstīt fju, kas saņem string un nosaka vai tas ir palindroms (anna, alus ari ira sula) <br>';

$stringToCheck = 'Alus ari ira sula';
$strtouper = strtoupper($stringToCheck);
$reverse = strrev($strtouper);

if($strtouper == $reverse) {
    echo "String $stringToCheck is polindrome". '<br>';
} else {
    echo "String $stringToCheck isnt palindrome at all ". '<br>';
}

echo '-------<br>';
echo '-------2 Uzrakstīt fju, kas saņem 2 stringus un atgriež vai tie ir anagrammas-<br>';

$stringToCheck1 = 'Anna';
$strtouper1 = strtoupper($stringToCheck1);
$reverse = strrev($strtouper1);

$stringToCheck2 = 'Aina';
$strtouper2 = strtoupper($stringToCheck2);
$reverse = strrev($strtouper2);

if($strtouper1 == $strtouper2) {
    echo "Strings $stringToCheck1 and $stringToCheck2 are anagramma". '<br>';
} else {
    echo "Strings $stringToCheck1 and $stringToCheck2 are NOT anagramma". '<br>';
}

echo '-------<br>';
echo '--------3. Uzraksta f-ja, kas nosaka vai visi burti šajā stringā ir lielie-----<br>';

$findUpperLetters = 'ANNA';
$ctype_upper = ctype_upper($findUpperLetters);

if ($ctype_upper == true) {
    echo "String $findUpperLetters contains only upper case letters". '<br>';
    } else {
    echo "String $findUpperLetters DOESNT contain only upper case letters". '<br>';
}

echo '-------<br>';
echo '-------4. Uzrakstīt f-ju, kurai iedod integer. F-ja nosaka vai šis skaitlis ir pirmskaitlis----<br>';

function checkIfPrime($num) {
    for ($i = 2; $i < $num; $i++) {
        if ($num % $i == 0) {
            echo  "Number $num is not prime number" . '<br>';
            break;                
            }  else {
            echo "Number $num is prime number" . '<br>';
            break;
        }             
    }  
}    

echo checkIfPrime(4);
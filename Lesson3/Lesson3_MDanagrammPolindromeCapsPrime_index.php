<?php 

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

function findUpperLetters($findUpperLetters) {
    
    $ctype_upper = ctype_upper($findUpperLetters);

    if ($ctype_upper == true) {
        echo "String $findUpperLetters contains only upper case letters". '<br>';
        } else {
        echo "String $findUpperLetters DOESNT contain only upper case letters". '<br>';
    }

}

echo findUpperLetters('Anna');

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
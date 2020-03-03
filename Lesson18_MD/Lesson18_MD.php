<?php 

echo '------MD uzrakstīt fju, kas saņem string un nosaka vai tas ir palindroms (anna, alus ari ira sula) <br>';


function checkPalindrome($stringToCheck) {
    
    $strtouper = strtoupper($stringToCheck);
    $reverse = strrev($strtouper);

    if($strtouper == $reverse) {
        echo "String $stringToCheck is polindrome". '<br>';
    } else {
        echo "String $stringToCheck isnt palindrome at all ". '<br>';
    }
}

checkPalindrome('Alus ari ira sula');


echo '-------<br>';
echo '-------2 Uzrakstīt fju, kas saņem 2 stringus un atgriež vai tie ir anagrammas-<br>';

function checkAnagramm($stringToCheck1, $stringToCheck2) {
   
    $strtouper1 = strtoupper($stringToCheck1);
    $reverse = strrev($strtouper1);

    $strtouper2 = strtoupper($stringToCheck2);
    $reverse = strrev($strtouper2);

    if($strtouper1 == $strtouper2) {
        echo "Strings $stringToCheck1 and $stringToCheck2 are anagrammas". '<br>';
    } else {
        echo "Strings $stringToCheck1 and $stringToCheck2 are NOT anagrammas". '<br>';
    }

}

checkAnagramm('Anna', 'AnNa');
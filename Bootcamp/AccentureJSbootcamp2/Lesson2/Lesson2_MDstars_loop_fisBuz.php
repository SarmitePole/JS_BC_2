<?php 



// uzrakstīt for ciklu, kurš skaita no 0 līdz 100 un katrā rindā saka pāra vai nepāra
for ($i = 0; $i <=100; $i++) {
    
    if ($i % 2 == 0) {
        echo $i . 'is an even number <br>';
    } else {
        echo $i . 'is an odd number <br>';
    }
    
}

echo '----------------<br>';

// uzrakstīt ciklu, kurš drukā zvaigznītes pieaugoši Mājas darbs

$star = '* ';
for ($i = 1; $i <=8; $i++) {	 
    for ($r = 1; $r<=$i; $r++) {	  	
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
    
    for($r = 1; $r<=$i; $r++) {  
        echo $star;   
    }   

    echo '<br>';   
}  


echo '--------Jāņa variants-1-------<br>';

$output = '';
for ($i = 0; $i < 8; $i++) {
    // $output = $output . '* ';
    $output .= '* ';
    echo $output . '<br>';
}

echo '--------Jāņa variants-2-------<br>';

for ($i = 0; $i < 8; $i++) {
    for ($ii = 0; $ii <8; $ii++) {
        if ($ii <= $i) {
            echo '* ';
        } else {
            echo '- ';
        }
    }
    echo '<br>';
}

echo '--------Jāņa variants-3-------<br>';

for ($i = 0; $i < 8; $i++) {
    for ($ii = 0; $ii <8; $ii++) {
        if ($ii <= $i) {
            echo '* ';
        } else {
            echo '- ';
        }
    }
    echo '<br>';
}

for ($i = 7; $i >= 0; $i--) {
    for ($ii = 0; $ii < 7; $ii++) {
        if ($ii < $i) {
            echo '* ';
        } else {
            echo '- ';
        }
    }
    echo '<br>';

}

echo '--------skait 0 līdz 50-------<br>';
echo '--------ja dalās ar 2, tad FIZZ-------<br>';
echo '--------ja dalās ar 3, tad Bazz-------<br>';
echo '--------ja ar un ar 3, tad FIZZ Bazz-------<br>';
echo '--------ja ne ar 2 ne 3, tad izvada skaitli-------<br>';

for ($i = 0; $i <=50; $i++) {
    
    if ($i % 2 == 0 && $i % 3 == 0) {
        echo 'FIZZ  BAZZ <br>';
    } else {
        if ($i % 3 == 0) {
            echo 'BAZZ <br>';
        } else {
            if ($i % 2 == 0) {
                echo 'FIZZ <br>';
            } else {
                echo $i . '<br>';
            }
        }
    }
}

echo '--------tas pats, bet īsāk-------<br>';




// while (true) {
//     console.log(123);
// } šitais gribēs izpildīties mūžīgi

// šitais apstāsies pēc Break
while (true) {
     console.log(123);
     break;
} 




var number = 0;

while (number < 20) {
    number = number + 1;
    if (number % 2 == 0) {
        continue;
    }
    console.log(number);

//number++;
//number += 1;
//++number;
// console.log(number++);
//console.log(++number);

}

console.log('-----------------');

var number = 50;
while (number >= 1) {
    console.log(number);
    number = number - 1;
}

console.log('-----------------');

// visus ciparus kuri dalās ar 5 nevis izdrukā, bet saka jaaau
var number2 = 50;
while (number2 >= 1) {
    if (number2 % 5 == 0) {
    console.log('jauu');
    } else {
    console.log(number2);
    }
    number2--;
}

console.log('-----------------');

var number3 = 10;
do {
    console.log('foo');
} while(number3 > 20);

for (var number4 = 0; number4 < 10; number4++){
    console.log(number4);
}

for (var number5 = 50; number5 > 0; number5--){
    console.log(number5);

}

console.log('-----------------');

var animals = ['cat', 'dog', 'elePHPant'];

for (var animal of animals ) {
    console.log(animal);
}

console.log('-----------------1variants');


var number = 0;

while (number <= 50) {
    number = number + 1;

    if (number % 3 == 0 && number % 2 == 0) {
        console.log('FizzBazz');
            continue 
    }

    if (number % 2 == 0) {
    console.log('Fizz');
        continue
    }
    if (number % 3 == 0) {
    console.log('Bazz');
        continue 
    }
    
    if (number % 3 !=3  && number % 2 !=2 ) {
        console.log('number');
    }
}

console.log('-----------------2variants');

var number3 = 0;

for (var number3; number3 <= 50; number3 ++) {

    if (number3 % 3 == 0 && number3 % 2 == 0) {
        console.log('Fizz Buzz');
    } else {
        
        if (number3 % 2 == 0) {
            console.log('Fizz');
        }  else  {
        
            if (number3 % 3 == 0) {
                console.log('Buzz');
            } else {

                if (number3 % 3 !=3  && number3 % 2 !=2 ) {
                    console.log('number');
                } 
            }
        }
    }
}

console.log('-----------------3variants');

var number4 = 0;
var printValue = ['FizzBuzz', 'Fizz', 'Buzz', 'number'];

for (var number4; number4 <= 50; number4 ++) {

    if (number4 % 3 == 0 && number4 % 2 == 0) {
        printValue[0];
    } else {
            
        if (number4 % 2 == 0) {
            printValue[1];
        }  else  {
        
            if (number4 % 3 == 0) {
                printValue[2];
            } else {

                if (number4 % 3 !=3  && number4 % 2 !=2 ) {
                    printValue[3];
                } 
            }
        }
    }
    console.log(printValue);

    
}


console.log('-----------------JāniSvariants');


for (var i = 0; i < 50; i++) {
    var out = '';
    if (i % 2 == 0) {
        out = 'Fizz';
    }

    if (i % 3 == 0) {
        out = 'Buzz';
    }

    if (out == '') {
        out = i;
    }
    console.log(out);
}
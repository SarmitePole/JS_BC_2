

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

console.log('-----------------');


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

console.log('tiri piri')

var number3 = 0;

if (number < 50) {
    console.log(number);
    number2 = number2 + 1;

} else if (number % 3 == 0 && number % 2 == 0) {
    console.log('Fizz Buzz');

} else if (number % 2 == 0) {
    console.log('Fizz Buzz');


} else {
    console.log('number');
}
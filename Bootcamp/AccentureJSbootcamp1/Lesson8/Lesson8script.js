var something = 123;
console.log (something);
var someArray = ['foo', 'bar', 'baz'];
console.log(someArray);

console.log(someArray[1]);

console.log('foo' + '' + 'bar');

var name='Pēteris';
console.log('hello, ' + name);

var name="Pika";
var adress="City";
var number="12345";
console.log('Hello, my name is' + ' ' + name + '. ' + 'I live in ' + adress + ' and my favorite number is ' + number);

console.log(`Hello, my name is ${name} and i live in ${adress}, and my favorite nember is ${number} !`);

var first='Vaz';
var second='Zaz';
var third='Gaz';
var fourth='Uaz';
var fifth='Maz';
console.log(`5th car is: ${first}`);
console.log(`4th car is: ${second}`);
console.log(`3rd car is: ${third}`);
console.log(`2nd car is: ${fourth}`);
console.log(`1st car is: ${fifth}`);

console.log(1 +[]);
console.log(5-1);
console.log('4' -1);

console.log(3*3);
console.log(5/2);
console.log(5/0);
console.log(5/-0);

console.log(11 % 2);

console.log(1 > 2);
console.log(1 < 2);
console.log(3 >= 3);

console.log('1' >= 1);
console.log('a' >= 2);

console.log(5 == 5);

console.log(4 != 5);
console.log(!true);
console.log(!1);

console.log(5 === 5);
console.log('5' === 5);

console.log(4 !== 5);
console.log('5' !== 5);
console.log(5 !== 5);

if (true) {
    console.log('This is true');
}

if (true)
    console.log('lielpa');
console.log('trūkst');

var number = 6;
if (number > 5) {
    console.log( number + ' is grater then 5');
}
   
// Sita darīt nevajag
var num1 = 5;
if (num1 >3) {
    if (num1 < 7) {
        console.log('Number is in the sweet spot')
    }
}

if (num1 > 3 && num1 < 7) {
    console.log ('Number is in sweet spot too');
}

var num2 = 5;
if (num2 < 6 || num2 > 6) {
    console.log('Number is not 6');
}




// false && false \\ true...tāpēc izpildās, ka gaida, lai kaut viena no OR pusēm izpildītos
var num3 = 5;
var str1 = 'b';

if (num3 ==4 && str1 == 'a' || str1 == 'b') {
    console.log("something happened");
}


var age = 22;
if (age < 16) {
    console.log ('Sorry dude');
} else {
    if (age < 21) {
        console.log ('only beer allowed');
    } else {
        console.log('angry party');
    }
}

// šitā īsāk
if (age < 16) {
    console.log('Sorry dude');
} else if (age < 21) {
    console.log('only beer allowe');
} else {
    console.log('angry party');
}

var date=29;
if ((date % 2) < 2) {
    console.log("date is uneven");
} else {
    console.log("date is even");
}



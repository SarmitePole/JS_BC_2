// links uz JQuery
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>

// links iekš HTML uz JS
<script src="MajasDarbs_milisekundes.js"></script>

//parāda "masīvs" = "object"
// console.log(typeof[1,2,3,4,5]); 


// Use the length property to alert the length of txt.
// var txt = "Hello World!";
// var x = txt.length;
// console.log(x);

// index of array element
var fruits = ['apples', 'pears', 'oranges', 'peaches', 'pears'];
fruits.indexOf('dates') // -1
fruits.indexOf('oranges') // 2
fruits.indexOf('pears') // 1, the first index at which the element exists

// does array contain taht element?
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.includes("Mango"); // true

// access to pbject property with .(dot) notation
var myObj = {
  prop1: "val1",
  prop2: "val2"
};

//access to nested object
var ourStorage = {
  desk: {
    drawer: "stapler"
  },
  cabinet: {
    "top drawer": {
      folder1: "a file",
      folder2: "secrets"
    },
    "bottom drawer": "soda"
  }
};

ourStorage.cabinet["top drawer"].folder2; // "secrets"
ourStorage.desk.drawer; // "stapler"

//access object propertys with variables
var dogs = {
  Fido: "Mutt",
  Hunter: "Doberman",
  Snoopie: "Beagle"
};

var myDog = "Hunter";
var myBreed = dogs[myDog];
console.log(myBreed); // "Doberman"


var prop1val = myObj.prop1; // val1
var prop2val = myObj.prop2; // val2


// access to nested arrays
var ourPets = [
  {
    animalType: "cat",
    names: ["Meowzer", "Fluffy", "Kit-Cat"]
  },
  {
    animalType: "dog",
    names: ["Spot", "Bowser", "Frankie"]
  }
];
ourPets[0].names[1]; // "Fluffy"
ourPets[1].names[0]; // "Spot"


// Find the position of the character h in the string txt.
var txt = "abcdefghijklm";
var pos = txt.indexOf("h");
console.log(pos);

// Use the slice method to return the word "bananas".
var txt = "I can eat bananas all day";
var x = txt.slice(10, 17);
console.log(x);

// Use the correct String method to replace the word "Hello" with the word "Welcome".
var txt = "Hello World";
txt = txt.replace("Hello", "Welcome");
console.log(txt);

//Convert the value of txt to upper case.
var txt = "Hello World";
txt = txt.toUpperCase();
console.log(txt);

// Change the first item of cars to "Ford".
var cars = ["Volvo", "Jeep", "Mercedes"];
cars[0] = "Ford";
console.log(cars);

// Use the correct Date method to extract the year (four digits) out of a date object.
var d = new Date();
year = d.getFullYear();
console.log(year);

// pāra vai nepāra datums
var now = new Date();
var oddEven = now.getDate();
console.log(oddEven);
if (oddEven % 2 == 0) {
    console.log("This dade is even")
}
if (oddEven % 3 == 0) {
    console.log("This dade is odd")
}

//  saskaitīt milisekundes līdz Z svētkiem un ar pogas klikšķi izsaukt alertu
var d = Date.now();
console.log(d);

var x = new Date(2019, 11, 25, 0, 0, 0, 0);
var xmasMs = Number(x);
console.log(x);
console.log(xmasMs);

var msToWait = xmasMs - d;
console.log(msToWait);
function alertMsToWait() {
    alert("You should wait " + msToWait + " till Xmas")
};

//Choose the correct conditional (ternary) operator to alert "Too young" if age is less than 18, otherwise alert "Old enough".
var age = 30;
var voteable = (age < 18) ? "Too young" : "Old enough";
console.log(voteable);


// Create a switch statement that will alert "Hello" if fruits is "banana", and "Welcome" if fruits is "apple".
switch(fruits) {
    case "Banana":
        alert("Hello")
        break;
    
    case "Apple":
        alert("Welcome")
        break;    
}

// Add a section that will alert("Neither") if fruits is neither "banana" nor "apple".
switch(fruits) {
    case "Banana":
      alert("Hello")
      break;
    case "Apple":
      alert("Welcome")
      break;   
    default:
    alert("Neither");
}

console.log('-------------------next--------------')
// Create a loop that runs through each item in the fruits array.
var fruits = ["Apple", "Banana", "Orange"];
for (x of fruits) {
  console.log(x);
}

console.log('-------------------next--------------')
// Create a loop that runs as long as i is less than 10.
var i = 0;
while (i < 10) {
  console.log(i);
  i++
}

console.log('-------------------next--------------')
//Create a loop that runs as long as i is less than 10, but increase i with 2 each time.
var i = 0;
while (i < 10) {
  console.log(i);
  i = i + 2;
}

console.log('-------------------next--------------')
if (num > 15) {
  return "Bigger than 15";
} else if (num < 5) {
  return "Smaller than 5";
} else {
  return "Between 5 and 15";
}

console.log('-------------------next--------------')
function findGreater(a, b) {
  if (a > b) {
    return "a is greater";
  } else {
    return "b is greater";
  }
}

console.log('-------------------next--------------')
function findGreaterOrEqual(a, b) {
  if (a === b) {
    return "a and b are equal";
  } else if (a > b) {
    return "a is greater";
  } else {
    return "b is greater";
  }
}

console.log('-------------------next--------------')
switch (num) {
  case value1:
    statement1;
    break;
  case value2:
    statement2;
    break;

  default:
    defaultStatement;
    break;
}

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

//fizzBuzz
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
console.log('-----------------fizzBuzz 2variants');

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

console.log('---------------fizzBuzz--3variants');

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

console.log('-------------fizzBuzz----JāniSvariants');

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

//legal age to drink
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

// Iterate Through an Array
var arr = [10, 9, 8, 7, 6];
for (var i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

// return statement
function plusThree(num) {
  return num + 3;
}
var answer = plusThree(5); // 8

//While loop
var i = 1;                      // initialize
while (i < 100) {               // enters the cycle if statement is true
    i *= 2;                     // increment to avoid infinite loop
    document.write(i + ", ");   // output
}

//Do While loop
var i = 1;                      // initialize
do {                            // enters cycle at least once
    i *= 2;                     // increment to avoid infinite loop
    document.write(i + ", ");   // output
} while (i < 100)               // repeats cycle if statement is true at the end

//For loop
for (var i = 0; i < 10; i++) {
  document.write(i + ": " + i*3 + "<br />");
}
var sum = 0;
for (var i = 0; i < a.length; i++) {
  sum += a[i];
}               // parsing an array
html = "";
for (var i of custOrder) {
  html += "<li>" + i + "</li>";
}

//Continue
for (var i = 0; i < 10; i++) {
  if (i == 5) { continue; }       // skips the rest of the cycle
  document.write(i + ", ");       // skips 5
}

//Break
for (var i = 0; i < 10; i++) {
  if (i == 5) { break; }          // stops and exits the cycle
  document.write(i + ", ");       // last output number is 4
}

//Switch statement
switch (new Date().getDay()) {      // input is current day
  case 6:                         // if (day == 6)
      text = "Saturday";          
      break;
  case 0:                         // if (day == 0)
      text = "Sunday";
      break;
  default:                        // else...
      text = "Whatever";
} 

//Get dates
var d = new Date();
a = d.getDay();     // getting the weekday
getDate();          // day as a number (1-31)
getDay();           // weekday as a number (0-6)
getFullYear();      // four digit year (yyyy)
getHours();         // hour (0-23)
getMilliseconds();  // milliseconds (0-999)
getMinutes();       // minutes (0-59)
getMonth();         // month (0-11)
getSeconds();       // seconds (0-59)
getTime();          // milliseconds since 1970

//Set part of dates
var d = new Date();
d.setDate(d.getDate() + 7); // adds a week to a date
setDate();          // day as a number (1-31)
setFullYear();      // year (optionally month and day)
setHours();         // hour (0-23)
setMilliseconds();  // milliseconds (0-999)
setMinutes();       // minutes (0-59)
setMonth();         // month (0-11)
setSeconds();       // seconds (0-59)
setTime();          // milliseconds since 1970)

//Numbers and Math
var pi = 3.141;
pi.toFixed(0);          // returns 3
pi.toFixed(2);          // returns 3.14 - for working with money
pi.toPrecision(2)       // returns 3.1
pi.valueOf();           // returns number
Number(true);           // converts to number
Number(new Date())      // number of milliseconds since 1970
parseInt("3 months");   // returns the first number: 3
parseFloat("3.5 days"); // returns 3.5
Number.MAX_VALUE        // largest possible JS number
Number.MIN_VALUE        // smallest possible JS number
Number.NEGATIVE_INFINITY// -Infinity
Number.POSITIVE_INFINITY// Infinity

// Math
var pi = Math.PI;       // 3.141592653589793
Math.round(4.4);        // = 4 - rounded
Math.round(4.5);        // = 5
Math.pow(2,8);          // = 256 - 2 to the power of 8
Math.sqrt(49);          // = 7 - square root 
Math.abs(-3.14);        // = 3.14 - absolute, positive value
Math.ceil(3.14);        // = 4 - rounded up
Math.floor(3.99);       // = 3 - rounded down
Math.sin(0);            // = 0 - sine
Math.cos(Math.PI);      // OTHERS: tan,atan,asin,acos,
Math.min(0, 3, -2, 2);  // = -2 - the lowest value
Math.max(0, 3, -2, 2);  // = 3 - the highest value
Math.log(1);            // = 0 natural logarithm 
Math.exp(1);            // = 2.7182pow(E,x)
Math.random();          // random number between 0 and 1
Math.floor(Math.random() * 5) + 1;  // random integer, from 1 to 5
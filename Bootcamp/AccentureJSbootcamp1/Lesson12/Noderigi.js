
// Use the length property to alert the length of txt.
var txt = "Hello World!";
var x = txt.length;
console.log(x);

// Find the position of the character h in the string txt.
var txt = "abcdefghijklm";
var pos = txt.indexOf("h");
console.log(pos);

// NESAPRATU Use the slice method to return the word "bananas".
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

//Choose the correct conditional (ternary) operator to alert "Too young" if age is less than 18, otherwise alert "Old enough".
var age = 30;
var voteable = (age < 18) ? "Too young" : "Old enough";
console.log(voteable);


// // Create a switch statement that will alert "Hello" if fruits is "banana", and "Welcome" if fruits is "apple".
// switch(fruits) {
//     case "Banana":
//         alert("Hello")
//         break;
    
//     case "Apple":
//         alert("Welcome")
//         break;    
// }

// // Add a section that will alert("Neither") if fruits is neither "banana" nor "apple".
// switch(fruits) {
//     case "Banana":
//       alert("Hello")
//       break;
//     case "Apple":
//       alert("Welcome")
//       break;   
//     default:
//     alert("Neither");
// }

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

// // No HTML bankomata podziņām skaita summu konsolē
// var countSum = 0;
// function addCount() {
//     var currentTargetValue = parseInt(event.target.value);
//     countSum = countSum + currentTargetValue;
    
//     console.log(countSum)
// }
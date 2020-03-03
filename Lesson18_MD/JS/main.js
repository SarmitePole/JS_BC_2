// console.log(document.getElementById('foo'));
// console.log(document.getElementById('foo').innerText = 'Baz';



document.getElementById('some-button').addEventListener('click', function() {

    var el = document.getElementById('foo');

    if (el.innerText =='Bar') 
    {
        el.innerText = 'Baz'; 
    } else {
        el.innerText = 'Bar'; 
    }  
});





// // var camelCase_Valid = 12345;
 
// // var someString = 'Foo';
// // var someString2 = "Bar";
// // var someString3 = `Biz`; //tikai ES6 

// // var someFloat = 3.14;
// // var someNothing = null;
// // var someNothing2; someNothing3;
// // var someTrue = false;
 
// // vēl mainīgie, tikai komplicētāki
// //datu tips MASĪVS
// var someCars = ['vaz', 'zaz', 'gaz', 'bmv'];
// // izsaucam pēc indeksa numura zaz
// // someCars[1];

// // izdrukājam 
// console.log(someCars[1]);

// someCars[2] = 'Audi'; //samaina 2 paramentru uz audi

// someCars.push('Opel'); //pieliekam beigās jaunu mašīnu Opel

// console.log(someCars); //izdrukājam visu masīvu

// someCars.push('Br'); //pieliekam beigās jaunu mašīnu Opel

// console.log(someCars); //izdrukājam visu masīvu

// //datu tips OBJEKTS

// var somePerson = {
//     name: 'John',
//     age: 21,
// };

// console.log(somePerson['age']);
// console.log(somePerson.age);

// var people = [
//     {
//         name: 'John',
//         age: 21,  
//     },
//     {
//         name: 'Jane',
//         age: 25,  
//     },
// ]

// console.log(people);

// //darbības
// // - matemātiskās
// // - salīdzinājumi

// var number = 1;
// if (number == 2) {
//     console.log('foo');
// } else if (number == 1) {
//     console.log('biz');
// } else {
//     console.log('baz');
// }

// // SWITCH

// switch (number) {
//     case (1):
//         console.log('number is 1');
//         break;
//     case (2):
//         console.log('number is 2');
//         break;
//     case (3):
//         console.log('number is 3');
//         break;
// }

// // CIKLI
// // - WHILE ..vispirms pārbauda
// // - Do WHILE ...vispirms izdara un tikai tad pārbauda

// // - FOR

// for (var i = 0; i < 10; i++) {
//     console.log(i);
// }

// // - FOR

// var cars = ['vaz', 'zaz', 'gaz', 'bmv'];

// for (var car of cars) {
//     // cars.indexOf(car);
//     console.log(car);
// }

// for (var carIndex of cars) {
// // cars[carIndex]
//     console.log(carIndex);
// }

// //fizz buzz

// for (var i = 0; i < 50; i++) {
//     if (i % 3 == 0 && i % 2 == 0) {
//         console.log('FIZZ BUZZ');
//     } else if (i % 3 == 0) {
//         console.log('BUZZ');
//     } else if (i % 2 == 0) {
//         console.log('FIZZ');
//     } else {
//         console.log(i);
//     }
// }

// for (var i = 0; i < 50; i++) {
//     var out = '';
//     if (i % 2 == 0) {
//         out += 'TRR';
//     }
//     if (i % 3 == 0) {
//         out += 'BZZZZZ';
//     }
//     if (!out) {
//         out = i;
//     }

//     console.log(out);
// }

// // FUNKCIJAS


// // definējam funkciju
// function camelCaseAddNumber(num1, num2) {
//     return num1 + num2;
// }

// //izsaucam funkciju
// console.log(camelCaseAddNumber(5, 6));


// //funkciju var izsaukt pirms tā vēl ir definēta
// var someNumber = 3;
// console.log(camelCaseAddNumber(someNumber, 5));


// ///iebūvētā funkcija stringam
// console.log('Foo'.toUpperCase());
// console.log('Foo'.length);

// ///iebūvētā funkcija integeriem
// console.log(Math.round(1.464646));
// console.log(new Date());

// DOM
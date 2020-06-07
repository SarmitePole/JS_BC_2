// parseInt visus stringus pārvērs ciparos, pārējo stringa daļu ugnarējot

var number = parseInt('123')
console.log(number);
console.log(typeof number);

var number = parseInt('123.123')
console.log(number);
console.log(typeof number);

var number = parseInt('123.dibihfnfjgugj23')
console.log(number);
console.log(typeof number);

// parseFloat ssaprot, ka ciparam var būt arī komati (kuri jāraksta ar punktu)

var number2 = parseFloat('5.5.dibihfnfjgugj23')
console.log(number2);
console.log(typeof number2);

// // izmet paziņojumu, kurā jaapstiprina izvēle, ja nē, neko tālāk nedarīs
// confirm('Are you sure bro');
// console.log('foo')


var confirmOutput = confirm('Are you sure')
if (confirmOutput,Output == true) {
    console.log('yay')
} else {
    console.log('boo')
}





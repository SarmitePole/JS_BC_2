var now = new Date();
console.log(now.getTime());
console.log('Foo'.indexOf('c'));


console.log("---------sadala daļās--------")
console.log('Foo'.split(''));

console.log("---------sadala daļās un apgriež pretēja virzienā--------")
var str = 'Foo'.split('');
console.log(str.reverse())


console.log("---------iepriekšējam var pielikt jaunu komandu klāt--------")
console.log('Foo'.split('').reverse().join('').toUpperCase());




console.log("---------ja splitā ir atstarpē, viņs griezīs tur, kur ir atstarpe. ja nav tad sagriezīs katru elementu...ja ieliks komatu, tad griezīs aiz komata. Var likt vairākus limiterus--------")
console.log('a b c d efg h i'.split(', ').join(''));

console.log("---------replace aizstāj tikai pirmo, tāpēc izmantoju regeksu un paprasīju izdzest tukšumus--------");
console.log('foobar@com, baz@biz, bar@foo.net'.replace(/, /g));

console.log("---------pielikt klāt pēdēja vietā--------")
var cars = ['foo', 'bar', 'baz'];
cars.push('ZeBEST');
console.log(cars);

console.log("---------atrod pēdējo un noņem viņu nost no masīva--------")
var lastCar = cars.pop();
console.log(lastCar);
console.log(cars);


console.log("-----noŠifto visus indeksus--------")
var firstCar = cars.shift()
console.log(firstCar);
console.log(cars);

console.log("---jo izņemm burtus sākot no 10 līdz17----")
// Use the slice method to return the word "bananas".
var txt = "I can eat bananas all day";
var x = txt.slice(10, 17);
console.log(x);


console.log("-----kā nodefinēt funkciju--------")
function addTwoNumbers(number1, number2) {
    var result = number1 + number2
    return result
}

console.log("-----izsaucu nodefinēto funkciju--------")
console.log(addTwoNumbers(5,10));


console.log("-----cits, katru reizi saskaita cik reizes ir izsaukts--------")
var count = 0;
function addCount() {
    count++;
    console.log(count)
}

addCount()
addCount()
addCount()

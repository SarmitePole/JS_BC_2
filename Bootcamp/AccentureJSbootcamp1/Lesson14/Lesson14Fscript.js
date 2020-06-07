function isEven() {
    var number = 7
    if (number % 2 == 0) {
        console.log(true)
    } else {
        console.log(false)
    }
}

isEven()

// cits variants
var number = 8
function isEven() {
    
    if (number % 2 == 0) {
        console.log(true)
    } else {
        console.log(false)
    }
}

isEven()
number = 9
isEven()

// cits variants

function isEven(number) {
    console.log(number)
    if (number % 2 == 0) {
        console.log(true)
    } else {
        console.log(false)
    }
}

isEven(5)
isEven(4)

// cits
function subtract(num1, num2) {
    console.log(num2 - num1)
}

subtract(6, 10)

// cits
function subtract(num1, num2) {

    console.log(num2 - num1)
}

var megaNumber = 4
subtract(megaNumber, 10)

// funkcija atgriež vērtību
function subtract(num1, num2) {
    if (typeof num1 != 'number') {
        return 0
    }
    if (typeof num2 != 'number') {
        return 0
    }
    return num2 - num1
}

var megaNumber = 4
subtract(megaNumber, 10)

console.log(4 + 5 - subtract(3, 8))

// cits
function sayHello(name) {
    alert('hello world' + name)
}

document
    .getElementById('btn2')
    .addEventListener('click',  function() {
        sayHello(' Johny')
    })


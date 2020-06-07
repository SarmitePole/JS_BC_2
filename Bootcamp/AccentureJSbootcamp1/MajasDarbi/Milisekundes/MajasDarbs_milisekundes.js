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

console.log('______________');
// pāra vai nepāra datums
var now = new Date();
var oddEven = now.getDate();
console.log(oddEven);
if (oddEven % 2 == 0) {
    function alertOddEven() {
        alert("This date is even")
    };
}

if (oddEven % 3 == 0) {
    function alertOddEven() {
        alert("This date is odd")
    };
}


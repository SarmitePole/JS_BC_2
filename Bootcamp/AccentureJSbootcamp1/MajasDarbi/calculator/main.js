// Izveidot kalkulatoru izmantojot HTML / CSS / JS.
// JS var izmantot jebkādu framework - jQuery, VueJS vai jebkuru citu.
// Nevajag izmantot jau gatavus Plugins.
// Html un CSS - visu rakstīt pašiem.

// Darbība:

// Kalkulatoram ir jabūt displejam, ciparnīcai, '+', '-', '*', '/', ',', un '=' pogām. Kopā 16 pogas.
// 1. Sākotnēji displejā ir 0.
// 2. Uzpiežot uz cipara, tam jāparādās displejā. Uzspiežot uz vēl viena cipara, tam jāparādās aiz pēdējā. Pirmo reizi uzspiežot uz kāda cipara, 0 tiek aizstāta ar to ciparu.
// 3. Ja displejā ir 0 un piespiež ",", tad displejā jāparādās 0.
// 4. Ja vēl neviens cipars nav ievadīts, tad darbību pogas nevar nospiest.
// 5. Nospiežot darbības pogas, tām ir jāpaliek aktīvām, bet tikai vienai. Ja kāda poga jau bija aktīva, tad iepriekš nospiestajai pogai jāpaliek neaktīvai.
// Tam jānotiek tikai tad, ja ir ieadīts pirmais skaitlis.
// 6. Pēc darbības pogas piespiešanas displejā jāparādās skaitlim 0.
// 7. Kad sāk vadīt ciparus otrajam skaitlim, tad tam jāstrādā tā pat, kā 2. un 3. punktā.
// 8. Ja otrais sakitlis jau sākts vadīt un piespiež darbības pogu, tad jāveic iepriekšējā darbība un rezūltāts jāuzstāda kā "pirmais" skaitlis.
// 9. Ja uzspiež kādu ciparu pēc = piespiešanas, tad sāk vadīt pirmo ciparu no sākuma.


var countSum = document.getElementById('screen').innerText;
countSum = parseInt(countSum)

console.log(countSum);
console.log(typeof countSum);

var currentTargetValue = parseInt(event.target.value);
// var currentTargetValue = $(this).click.val;
// currentTargetValue = parseInt(currentTargetValue);

console.log(currentTargetValue);
console.log(typeof currentTargetValue);

countSum = countSum + currentTargetValue;
var sumOutput = document.getElementById('screen');
sumOutput.innerText = countSum;






// $(document).ready(function() {
//     var result = 0;
//     var prevEntry = 0;
//     var operation = null;
//     var currentEntry = '0';
//     updateScreen(result);

//     $('.button').on('click', function(evt) {
//         var buttonPressed = $(this).html();
//         console.log(buttonPressed);
        
//         if (buttonPressed === '.') {
//         currentEntry += '.';
//         } else if (isNumber(buttonPressed)) {
//         if (currentEntry === '0') currentEntry = buttonPressed;
//         else currentEntry = currentEntry + buttonPressed;
//         } else if (isOperator(buttonPressed)) {
//         prevEntry = parseFloat(currentEntry);
//         operation = buttonPressed;
//         currentEntry = '';
//         } else if (buttonPressed === '=') {
//         currentEntry = operate(prevEntry, currentEntry, operation);
//         operation = null;
//         }
        
//         updateScreen(currentEntry);
//     });
// });

// updateScreen = function(displayValue) {
// var displayValue = displayValue.toString();
// $('.screen').html(displayValue.substring(0, 10));
// };

// isNumber = function(value) {
// return !isNaN(value);
// }

// isOperator = function(value) {
// return value === '/' || value === '*' || value === '+' || value === '-';
// };

// operate = function(a, b, operation) {
// a = parseFloat(a);
// b = parseFloat(b);
// console.log(a, b, operation);
// if (operation === '+') return a + b;
// if (operation === '-') return a - b;
// if (operation === '*') return a * b;
// if (operation === '/') return a / b;
// }
   
function setSum() {
    var countSum = document.getElementById('sum-output').value;
    var currentTargetValue = parseInt(event.target.value);
    countSum = parseInt(countSum) +currentTargetValue;
    var sumOutput = document.getElementById('sum-output');
    sumOutput.value = countSum;

}

///polindroms


function checkA() {
    var aInput = document.getElementById('p-input').value;
    var inputValue = aInput.toString();
    var delSpaces = inputValue.replace(/\s+/g, '');  
    var caseDown = delSpaces.toLowerCase();
   
    function reversed() {
        return caseDown.split("").reverse().join("");
    }
    var reversed = reversed(); 
     
    if (caseDown == reversed) {
        var newText = 'This input is polindrome'
    } else {
        var newText = 'This input is NOT polindrome at all'
    }
    console.log(caseDown == reversed);

    var resultOutput = document.getElementById('result-p').innerText;
    console.log(resultOutput);
    console.log(newText);
    resultOutput.innerText = newText.value;       
}

///Jāņa anagramm

document
    .getElementById('check-anagram')
    .addEventListener('click', function() {
        var input1 = document.getElementById('anagram-input-1')
        var input2 = document.getElementById('anagram-input-2')
        var resultElement = document.getElementById('anagram-result')

        var text1 = input1
            .value
            .replace(/ /g, '')
            .toLocalLowerCase()
            .split('')
            .sort()
            .join('')

        var text2 = input2
            .value
            .replace(/ /g, '')
            .toLocalLowerCase()
            .split('')
            .sort()
            .join('')    

        resultElement.innerText = "" + input1.value + " and " + input2.value
        if (text1 === text2) {
            resultElement.innerText += '" are anagrams'
        }  else {
            resultElement.innerText += '" are not anagrams'
        }

        console.log(resultElement)

    }) 
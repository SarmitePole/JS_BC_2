
// function changeButton() {
//     var button = document.getElementById('btn-2') 
//     console.log(button);
//     console.log(button.style);
//     console.log(button.style.fontSize); 
//     // ja nav definēts, tad rādīs tukšumu

//     button.style.fontSize = '30px'; 
//     button.style.color = 'pink';
// }

// poga parādās/pazūd
function changeButton() {
    var button = document.getElementById('btn-2') 
    if (button.style.display == 'none') {
        button.style.display = 'block'
    } else {
        button.style.display = 'none'
    }
}

var clickCounter = 0;

function changeButton2() {
    var button = document.getElementById('btn-2') 
    if (clickCounter == 0) {
        button.style.color = 'red';
    }

    if (clickCounter == 1) {
        button.style.fontSize = '50px';
    }

    if (clickCounter == 2) {
        button.style.color = 'tomatogreen';
    }

    if (clickCounter == 3) {
        button.style.fontSize = '15px';
        clickCounter = -1;
    }
    
    // if (clickCounter < 3) {
    //     clickCounter++;
        
    // } else {
    //     clickCounter = 0;
    // }

    clickCounter++
}

function addCount() {
    var p = document.getElementById('count');
    var currentNumber = parseInt(p.innerText);
    currentNumber ++;
    p.innerText = currentNumber;
}

// setTimeout(addCount, 1000);

var loop = setInterval(addCount, 1)
setTimeout(function(){
    clearInterval(loop)
},5000)


function changeElement() {
    var p = document.getElementById('p-2')
    // p.innerText = '<strong>Bar</strong>'
    p.innerHTML = '<strong>Bar</strong>'
}
var countSum = 0;

function addCount() {
    var currentTargetValue = parseInt(event.target.value);
    countSum = countSum + currentTargetValue;
    
    console.log(countSum)
}


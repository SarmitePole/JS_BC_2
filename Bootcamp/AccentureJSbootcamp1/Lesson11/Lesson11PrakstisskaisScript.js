var tasks = [
    {
        title: 'Bye milk',
        isCompleted: false,
    },
    {
        title: 'Learn Js',
        isCompleted: false,
    },
    {
        title: 'Be awesome',
        isCompleted: true,
    },
    {
        title: 'Be the best',
        isCompleted: true,
    },
    {
        title: 'Smile sometimes',
        isCompleted: true,
    },
]

console.log('-----no Jāņa- Izdrukāt visus---')


for (var task of tasks) {
    console.log(task.title);
}

console.log('-----no Jāņa-Izdrukāt izpildītos---')


for (var task of tasks) {
    if (task.isCompleted == true) {
    console.log(task.title);
    }
}

console.log('-----no Jāņa-izdrukāt nepabeigtos---')


for (var task of tasks) {
    if (task.isCompleted != true) {
    console.log(task.title);
    }
}


console.log('-----no Jāņa-cik ir izpildīti---')


var completedCount = 0;
for (var task of tasks) {
    if (task.isCompleted == true) {
    completedCount++;
    }
}
console.log('completed: ' + completedCount);



console.log('-----no Jāņa-cik nav izpildīti---')

var pendingTasks = 0;
for (var task of tasks) {
    if (task.isCompleted != true) {
        pendingTasks++;
    }
}
console.log('pending: ' + pendingTasks);



console.log('-----izskaitīt līdz 100 atgriezt cik skaitļu bez atlikuma dalās ar 3----')

var numberCount = 0;
for (var i = 0; i < 100; i++) {
    if (i % 3 == 0) {
        numberCount++;
    }
}
console.log(numberCount);



console.log('-----Ir dots skaitslis. Uzrakstīt burtu A tik reizes----')

var stringLenght = 32;
var letterString = '';
for (var i = 0; i < stringLenght; i++) {
        letterString = letterString + 'A';
    }
console.log(letterString);

console.log('-----Izskaitīt no 0 līdz 50----')

var number = 50;
while (number >= 0) {
    console.log(number);
    number = number - 1;
}


var number = 50;
for (var i = 50; i >= 0; i--) {
    console.log(number);
    number = number - 1;
}


console.log('-----Izskaitīt no 0 līdz 50 vienkārsi - katru OTRO ar if----')

for(var x = 50; x>=0; x--) {
    if(x % 2 == 0) {
        console.log(x);
    }
}



console.log('-----Izskaitīt no 0 līdz 50 vienkārsi - katru TREŠO ar if----')

for(var x = 50; x>=0; x--) {
    if(x % 3 == 0) {
        console.log(x);
    }
}



console.log('-----Izskaitīt no 0 līdz 50, un tos, kas lielāki par 40 = viņu vietā jeee----')

for(var x = 50; x>=0; x--) {
    if(x > 40) {
        console.log('jee');
    } else {
        console.log(x);
    }
}




console.log('-----Izskaitīt no 0 līdz 50, un tos, kas lielāki par 40 = viņu vietā jeee un tālāk KATRS OTRAIS----')

for(var x = 50; x>=0; x--) {
    if(x > 40) {
        console.log('jee');
    } else {
        if(x % 2 == 0) {
            console.log(x);
        }
    }
}

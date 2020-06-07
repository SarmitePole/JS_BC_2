var johny = {
    name: 'John',
    email: 'johny@doe.com',
    'last-name': 'Doe',
    age: 21,
    dog: {
        name: 'Reksis',
    }
};

console.log(johny);
console.log(johny.email); 
console.log(johny['last-name']);
console.log(johny['email']);
console.log(johny.age);
console.log(johny.age + ' ' + johny.name);
console.log(johny.dog.name);

johny.age = 22;
console.log(johny.age);

var obj1 = { foo: 1 };
var obj2 = { foo: 1 };

var obj3 = obj1;
console.log(obj1.foo); //1
console.log(obj3.foo); //1
obj3.foo = 2;
obj1 = null; //nepārraksta objektu, maina vērtību
console.log(obj1); //2
console.log(obj3.foo); //2

console.log(obj1 == obj3);

var people = [
    {
        name: 'John',
        surname: 'Doe',
        age: 21,
    },

    {
        name: 'Jane',
        surname: 'Doe',
        age: 99,
    },

    {
        name: 'Teemoo',
        surname: 'Small',
        age: 1,
    },
];

console.log(people[1].age);
console.log(people[1]['age']);

// saskaitīt visu cilvēku vecumus

var totalAge = 0;

for (var person of people) { //katrā iterācijā definēsies jaunais var
    totalAge = totalAge + person.age;
}
console.log(totalAge);


//piemērs iz dzīves - nodrukāt uzdevumu sarakstu

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
]


for (var task of tasks) {
    console.log(task.title);
}

console.log('-------------')
//new Date jaunas instances izveidošana

var now = new Date();
var now2 = new Date();
console.log(now.getFullYear());
console.log(now2);

console.log('-------------')
//matemātika

console.log(Math.PI);
console.log(Math.pow(4, 2)); //kāpināt
console.log(Math.sqrt(16)); //izvilkt kvadrātsakni

console.log(Math.round(123.67)); ///noapaļo no 5
console.log(Math.ceil(123.67)); //apaļo līdz veselajam uz augšu
console.log(Math.floor(123.67)); //apaļo līdz veselajam uz leju

console.log('-----Mājas darbs 1 --Nodrukāt visu cilvēku vārdus-----')


var people = [
    {
        name: 'John',
        surname: 'Doe',
        age: 21,
    },

    {
        name: 'Jane',
        surname: 'Doe',
        age: 99,
    },

    {
        name: 'Teemoo',
        surname: 'Small',
        age: 1,
    },

    {
        name: 'Luluu',
        surname: 'Prety',
        age: 2,
    },

    {
        name: 'Ash',
        surname: 'Thebest',
        age: 4,
    },
];

for (var nameList of people) {
    console.log(nameList.name);
}

console.log('-----Mājas darbs 2 -----')
console.log('-----Visi taski -----')

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

for (var taskList of tasks) {
    console.log(taskList.title);
}

console.log('-----Visi nepabeigtie taski (jābūt diviem) a man drukājas visi-----')

for (var doneList of tasks) {
    if (doneList['isCompleted'] == 'false');
    console.log(doneList.title);
}



console.log('-----saskaitīt nepabeigtos taskus (jābūt 2)- a man saskaita visus 5----')

var count = Object.keys(tasks).length;
console.log(count);




console.log('-----saskaitīt nepabeigtos taskus (jābūt 2)- a šitais nesaskaita vispār  neko----')

var falseCount = '';
if (Object.keys(tasks) == "false") {
    falseCount = falseCount + 1;
}
console.log(falseCount);



console.log('-----saskaitīt nepabeigtos taskus (jābūt ciparam 2)- kāpēc nulle? ----')

var falseCount = '0';
for (var isCompleted of tasks) {
    if (isCompleted == 'false') {
    falseCount = falseCount + 1;
    }
}
console.log(falseCount);



console.log('-----saskaitīt nepabeigtos taskus (jābūt ciparam 2)- a ja es visu paratisītu par array un tad paprasītu tajā atrast value=false un tad....nezinu ko ----')

console.log(Object.keys(tasks));
console.log(Object.values(tasks));
console.log(Object.entries(tasks));



// // var šitā, bet nevajag
// var app = new Vue({
//     el: '#app',

// })

new Vue({
    el: '#app',
    data: {
        message: 'Hello world',
        newTaskName: '',
        tasks: [
            {
                title: 'Buy milk',
                isCompleted: false,
            },
            {
                title: 'Learn JS',
                isCompleted: false,
            },
            {
                title: 'Be awesome',
                isCompleted: true,
            },
        ]
    },
    methods: {
        changeText: function() {
            this.message = 'Foo'
        },
        addTask: function() {
            var newTask = {
                title: this.newTaskName,
                isCompleted: false,
            }
            this.tasks.push(newTask),
            this.newTaskNAme = ''
        }
    },
})

Vue.component('car', {
    template: `<li> {{ car }}  <button @click="$emit('remove-car', car)"> Delete </button></li>`,
    props: ['car']
});



new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue!',
        cars: ['Vaz', 'Zaz', 'Maz', 'BMW'],
        things: ['Big', 'Small', 'Lost', 'Stolen'],
        todos: [
            {title: 'Buy milk', isCompleted: false},
            {title: 'Learn Vue', isCompleted: false},
            {title: 'Be awesome', isCompleted: true},
            {title: 'Go to forest', isCompleted: true},
        ],
        newTaskName: '',
    },

    methods: {
        changeMessage: function() {
            this.message = 'Foo';
        },

        removeCar: function(car) {
            var index = this.cars.indexOf(car);
            this.cars.splice(index, 1);
            // 1 = cik elementus gribam dzest sākot indeksa, kuram click
        },

        removeThing: function(thing) {
            var index = this.things.indexOf(thing);
            this.things.splice(index, 1);
            
        },

        removeTask: function(task) {
            var index = this.todos.indexOf(task);
            this.todos.splice(index,1);
        },

        addTask: function() {
            var newTask = { title: this.newTaskName, isCompleted: false };
            this.todos.push(newTask);
            this.newtaskName = '';
        }


    }

});

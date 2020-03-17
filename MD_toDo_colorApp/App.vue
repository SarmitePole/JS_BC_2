<template>
    <div class="container">
           
        <div class="jumbotron jumbotron-fluid">
            <div class="container">
                <h1 class="display-4">Things to do</h1>
                <p class="lead">Be so kind - help yourself - there are some greate tool, that will help you</p>
            </div>
        </div>

        <div class="row mt-5">
            <div class="col-6 offset-2">
                <ul class="list-group list-group-flush">
                    <li class="list-group-item" v-for="task of todos">
                        <input type="checkbox" v-model="task.isCompleted" class="mr-1">
                        <template v-if="task.isCompleted">
                            <del>{{ task.title }}</del>
                            <button class="btn btn-danger btn-sm ml-1" @click="removeTodo(task)">Delete</button>
                        </template>
                        <span v-else>{{ task.title }}</span>
                    </li>
                </ul>
            </div>
        </div>

        <div class="row mt-5">
            <div class="col-6 offset-2">
                <hr>
            </div>
        </div>
    
        <div class="jumbotron jumbotron-fluid">
            <div class="container">
                <h5 class="display-4">Add new todo</h5>
                <p class="lead">Do you have some ideas what to do next? Write it down</p>
            </div>
        </div>

        <div class="row ">
            <div class="col-6 offset-2">
                <input class="form-control" placeholder="New todo..." v-model="newTodo" @keyup.enter="addTodo">
            </div>
        </div>
        <div class="row mt-3">
            <div class="col-6 offset-2">
                <button class="btn btn-primary" @click="addTodo">Add</button>
            </div>
        </div>

    </div>
</template>

<style scoped>
* {
    
    text-decoration-color: red;
}

h1 {
    color: red;
}

h5 {
    color: blue;
}
</style>

<script>
export default {
    data() {
        return {
            todos: [
                {
                    title: 'Buy everything in store',
                    isCompleted: true,
                },
                {
                    title: 'Learn JS',
                    isCompleted: false,
                },
                {
                    title: 'Be Awesome!',
                    isCompleted: true,
                },
            ],
            newTodo: '',
        }
    },
    methods: {
        addTodo() {
            this.todos.push({
                    title: this.newTodo,
                    isCompleted: false,
            });
            this.newTodo = '';
        },
        removeTodo(todo) {
            let index = this.todos.indexOf(todo);
            this.todos.splice(index, 1);
        }
    }
}
</script>
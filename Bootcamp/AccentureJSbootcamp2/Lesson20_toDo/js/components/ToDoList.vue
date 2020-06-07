<template>
    <div>
        <ul>
            <template v-for="task3 of todos">
                <task
                :taskk="task3"
                @task-deleted="deleteTask"
                ></task>
            </template>
        </ul>
        <hr>
        <new-task @create-task="createTask">
        </new-task>
    </div>
</template>


<style>

</style>



<script>
import Task from './Task.vue';
import NewTask from './NewTask.vue';

export default {
    components: {
        Task,
        NewTask
    },

    data: function() {
        return {
            todos: [
                {
                    title: 'Buy Milk',
                    isCompleted: true,
                },
                {
                    title: 'Learn Vue',
                    isCompleted: false,
                },
                {
                    title: 'Win hackaton',
                    isCompleted: false,
                },
            ]
        };
    },

    methods: {
        deleteTask(task) {
            let index = this.todos.indexOf(task);
            this.todos.splice(index, 1);
        },
        createTask(newTask) {
            this.todos.push(newTask);
        }
    }
}
</script>
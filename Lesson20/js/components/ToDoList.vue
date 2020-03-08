<template>
    <div>
        <ul>
            <template v-for="task3 of todos">
                <task
                :taskk="task3">
                </task>
            </template>
        </ul>
    </div>
</template>


<style>

</style>



<script>
import Task from './Task.vue';

export default {
    components: {
        Task
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
    }
}
</script>
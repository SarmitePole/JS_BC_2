<template>
    <div>
        <p>Hello, {{ name }}</p>
        <to-do-list></to-do-list>
    </div>
</template>


<style>


</style>



<script>
import ToDoList from './ToDoList.vue';

export default {
    data: function() {
        return {
            name: 'Worlddddd!',
        };
    },
    components: {
        ToDoList
    }
}
</script>
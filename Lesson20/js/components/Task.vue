<template>
    <li>
        <template v-if="taskk.isCompleted">
            <del
                @click="taskk.isCompleted = !taskk.isCompleted"
            >{{ taskk.title }}</del>
            <button @click="$emit('task-deleted', taskk)">Delete</button>
        </template>
        
        <span 
            v-else
            @click="taskk.isCompleted = !taskk.isCompleted"
        >{{ taskk.title }}</span>
    </li>
    
</template>


<style>

</style>



<script>
export default {
    props: {
        taskk: {
            required: true,
        }
    }    
}
</script>
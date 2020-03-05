<template>
    <li>
        <del v-if="taskk.isCompleted">{{ taskk.title }}</del>
        <sapn v-else>{{ tasks.title}}</span>
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
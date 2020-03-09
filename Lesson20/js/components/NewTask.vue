<template>
    <div class="row">
        <div>
            <input 
                type="text" 
                class="form-control"
                v-model="newTaskName"
            >
            <button 
                @click="addTaskName"
                class="btn-success"
            >Add task</button>
        </div>
    
    </div>
</template>





<script>

export default {
    data() {
        return {
            newTaskName: '',
        };
    },

    methods: {
        addTaskName() {
            let newTask = {
                title: this.newTaskName,
                isCompleted: false,
            }
            this.newTaskName = '';
            this.$emit('create-task', newTask);

        }
    }
}

</script>
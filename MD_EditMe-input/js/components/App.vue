<template>
    <div>    
        <input 
            type="text"
            class="form-control"
            v-if="shouldShowSomething"
            v-model="newText"
            id="input"
            value=""
        >
        <br>
        <button 
           @click="shouldShowSomething = !shouldShowSomething"
        >{{ currentText }}</button>
    </div>
</template>


<script>

export default {
    data() {
        return {
            shouldShowSomething: false,
            currentText: "Edit me"
        };
    },

    methods: {
        newText() {
            this.value = currentText;
        }
    }
    
}

</script>


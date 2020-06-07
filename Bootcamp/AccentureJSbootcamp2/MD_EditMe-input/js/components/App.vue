<template>
    <div>    
        <div v-if="shouldShowSomething">
            <input type="text" v-model="currentText">
        </div>
        
        <br>

        <button 
           @click="shouldShowSomething = !shouldShowSomething"
           v-model="currentText"
        >{{ currentText }}</button>
    </div>
</template>


<script>

export default {
    data() {
        return {
            shouldShowSomething: false,
            currentText: "Edit me",
            
        };
    },
    
}

</script>


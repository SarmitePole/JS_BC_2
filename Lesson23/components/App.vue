
<template>

    <div class="container">

        <h1>{{ message }}</h1>

        <div>
            <input 
            type="text" v-model="message"
            class="form-control">
    
        </div>
        
        <div>
            <button 

                :class="btnClass()"
                @click="clearMessage"
                >Clear
            </button>
    
        </div>
    
    </div>

</template>


<style>
.red-btn {
    background: red;
}

</style>


<script>
export default {
    data() {
        return {
            message: 'Hello World'
        };
    },
   
    methods: {
        clearMessage() {
            this.message = '';
        },
        btnClass() {
            if (this.message == '') {
                return 'red-btn'
            }
            return '';
        }

    }
    
</script>





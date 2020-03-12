<template>
    <div class="container m-3">
        <div>

            <button
                :class="getBtnClass('Foo')"
                @click="currentValue = 'Foo'"
            >Foo</button>

            <button
                :class="getBtnClass('Bar')" 
                @click="currentValue = 'Bar'"
            >Bar</button>

            <button
                :class="getBtnClass('Baz')"
                @click="currentValue = 'Baz'"
            >Baz</button>

            <button
                :class="getBtnClass('dd')" 
                @click="currentValue = 'dd'"
            >dd</button>

                  
            <button
                :class="getBtnClass('Foo')"
                @click="currentValue = 'Foo'"
            >Foo</button>
            
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
            currentValue: 'Foo'
        } 
    },
    
    methods: {       
        getBtnClass(btnName) {
        if (btnName == this.currentValue) {
            return 'red-btn';
        } else {
            return '';

        }
           
    } 
}
}


</script>
<template>
   
</template>



<script>

export default {
    data() {
        return {
            text: '',
        };
    },

    methods: {       
        addText() {
            let newText = this.value;
            let text = text . newText;
            this.$emit(text);
        }
    }  
}

</script>
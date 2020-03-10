<template>
    <div class="container m-3">
        <div>

            <h1>hoho</h1>

            <button 
                @click="addText"
                class="btn-success"
                value="Grass"
            >Grass</button>

            <button 
                @click="addText"
                class="btn-danger"
                value="Lovīte"
            >Lovīte</button>

            <button 
                @click="addText"
                class="btn-warning"
                value="Sun"
            >Sun</button>

            <button 
                @click="addText"
                class="btn-primary"
                value="Sky"
            >Sky</button>
          
            <div>
                <p></p>
            </div>

            <button 
                :class="btnClass()"
                class="btn-primary"
                >
                There will be miracle - {{ text }}               
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
    data: function() {
        return {
            text: 'not yet',
        };
    },
    
    methods: {       
        addText() {
            let newText = this.value;
            let text = text . newText;
            
        },
        btnClass() {
            if (this.message == '') {
                return 'red-btn'
            }
            return '';
        }
    } 
    
}


</script>
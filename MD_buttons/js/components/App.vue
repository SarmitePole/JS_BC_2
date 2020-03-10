// templeita var būt tikai viens root elements
<template>
    <div class="container m-3">
        <div>
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

            <button class="btn-primary">
                There will be miracle - {{ text }}               
            </button>
        </div>
    </div>
     
</template>


<style>

</style>



<script>
import text from './NewText.vue';

export default {
    data: function() {
        return {
            text: 'not yet',
        };
    },
    
}
</script>
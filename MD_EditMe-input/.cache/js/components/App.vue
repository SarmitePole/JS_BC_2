<template>
    <div class="container m-3">
        <div>

            <button :class="getBtnClass('Grass')"
                @click="currentValue = 'Grass'"
                
            >Grass</button>

            <button :class="getBtnClass('Lovīte')" 
                @click="currentValue = 'Lovīte'"
                
            >Lovīte</button>

            <button :class="getBtnClass('Sun')" 
                @click="currentValue = 'Sun'"
                
            >Sun</button>

            <button :class="getBtnClass('Sky')" 
                @click="currentValue = 'Sky'"
                
            >Sky</button>
          
            <div>
                <p></p>
            </div>

            <div>
                {{ currentValue }}
            </div>

            <button>
                There will be miracle - {{ currentValue }}               
            </button>

            <button @click="shouldShowSomething = !shouldShowSomething">Show/ Hide</button>
            <div v-if="shouldShowSomething">
                {{ currentValue }}
            </div>



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
            currentValue: 'not yet',
            shouldShowSomething: false
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
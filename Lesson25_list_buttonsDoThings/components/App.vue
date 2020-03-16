<template>
    <div>
        <h3 :title="headingTitle">{{ message }} {{ today }}</h3>
        <h2 v-if="isItSunny">Yau it is sunny!</h2>
        <h2 v-else>Boo it is dark...</h2>

        <list :cars="cars"></list> 
          
        <button @click="message = 'Change Vue'">Click me</button>
        <button @click="changeText()">Click me too</button>
        <button @click="changeText">Click me threeeee</button>
        <button @click="changeTextTo('Boo')">Click me four</button>
        <button @click="changeTextTo('Foo')">Click me five</button>
        <br>
        <input type="text" v-model="message">
    </div>
       
</template>

<script>
import List from './List.vue';
export default {

    components: {
        List
    },  
    data() {
        return {
            message: 'Hello vue',
            headingTitle: 'Bar',
            today: new Date (),
            isItSunny: true,
            cars: [
                'Vaz',
                'Zaz',
                'Gaz',
                'Maz',
                'BMW',
            ]
        };
    },
    methods: {
        changeText() {
            this.message = 'Hello from JS side'
        },
        changeTextTo(text) {
            this.message = 'Now the text is ' + text;
        }
    }
    
}

</script>

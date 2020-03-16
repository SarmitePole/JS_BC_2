<template>
    <div>
        <template v-for="car of cars">
            <list-item :car="car"></list-item>
        </template>  
        <list-item :car="'Zaz'"></list-item>
        <list-item car="Opel"></list-item>
    </div>
</template>

<script>
import ListItem from './ListItem.vue';
export default {
    components: {
        ListItem
    },
    props: [
        'cars'
    ]
}
</script>
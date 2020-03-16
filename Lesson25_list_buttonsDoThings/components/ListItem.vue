<template>
    <li>{{ car }}</li>
</template>

<script>
export default {
    props: {
        car: {
            type: String,
            default: 'Sorry, you will have to walk'
        }
    }
}
</script>
<template>
    <div>
        <h1>{{ message }}</h1>
        <div>
            <input type="text" v-model="message">
        </div>
        <div>
            <button>
                :class="red-btn"
                @click="clearMessage"
            >
                Clear
            </button>
        </div>
    </div>
</template>

<style scoped>
.red-btn {
    background: red;
}
</style>

<script>
export default {
    data() {
        return {
            message: 'Hello World!'
        };
    },
    methods: {
        clearMessage() {
            this.message = '';
        },
        btnClass() {
            if (this.messaage == '') {
                return 'red-btn'
            }
            return '';
        }
    }
}
</script>
<template>
    <div>
        <ul>
            <li v-for="user of users">{{ user.name }} ({{ user.email }})</li>
        </ul>
    </div>
</template>


<style>

</style>


<script>
export default {
    data() {
        return {
            users: []
        }    
    },
    created() {
        fetch('http://localhost/myProject/Lesson7/public/?page=users')
            .then((resp) => {
                resp.json().then((data) => {
                    this.users = data;
                });
            })
            .catch(function(error) {
                console.log('There Was a error',  error);
            });
        console.log('foo');    
    }
}

</script>
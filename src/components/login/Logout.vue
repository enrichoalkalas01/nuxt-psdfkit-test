<template>
    <div>
        <span>Success to logout...</span>
    </div>
</template>

<script>
    export default {
        name: 'Logout',
        mounted() {
            this.$store.commit('LogOut')
            this.$store.state.Login.LoginStatus ? window.location.href = '/' : window.location.href = '/'
        },
    }
</script>
<template>
    <div class="password_login">
        <input type="text" placeholder="你的手机号/邮箱" id="phone">
        <input type="password" placeholder="密码" id="password">
    </div>
</template>

<script>
    export default {
        name: "PasswordLogin"
    }
</script>

<style scoped>
    @import url("../../css/password.css");
</style>
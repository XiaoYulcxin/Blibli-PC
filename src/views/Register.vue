<template>
    <div class="register">
        <Header></Header>
        <div class="r_div">
            <span class="line"></span>
            <span class="txt">注册</span>
            <span class="line"></span>
        </div>
        <div class="content">
            <input type="text" placeholder="昵称" v-model.lazy="username">
            <input type="password" placeholder="密码（6-16个字符组成，区分大小写）" v-model.lazy="password">
            <span class="china_span">中国大陆<icon name="chevron-down" class="arrows"></icon></span>
            <input type="text" placeholder="填写常用手机号" class="china" v-model.lazy="phone">
            <input type="text" placeholder="请输入短信验证码" class="gain">
            <span class="gain_span">点击获取</span>
            <p>
                <input type="checkbox" class="check">我已同意<a href="">《哔哩哔哩弹幕网用户使用协议》</a>
                和<a href="">《哔哩哔哩隐私政策》</a>
            </p>
            <input type="submit" value="注册" class="sub" @click="registerHandle">
            <p class="login">
                <router-link to="/login">已有账号，直接登录></router-link>
            </p>
        </div>

        <Footer></Footer>
    </div>
</template>

<script>
    import Header from "../components/login/Header"
    import Footer from "../components/login/Footer"

    export default {
        name: 'Register',
        data() {
            return {
                username: '',
                password: '',
                phone: ''
            }
        },
        methods: {
            registerHandle() {
                if (this.username == '' || this.password == '' || this.phone == '') {
                    alert("昵称、密码、手机号都不能为空");
                } else {
                    const sql_name = localStorage.getItem("0" + this.phone);
                    if (sql_name != null) {
                        alert("你已经注册过了，请登录");
                        this.$router.replace("/login");
                    } else {
                        localStorage.setItem("0" + this.phone, this.username);
                        localStorage.setItem("1" + this.phone, this.password);
                        localStorage.setItem("2" + this.phone, this.phone);
                        alert("注册成功，请登录");
                        this.$router.replace("/login");
                    }
                }
            }
        },
        components: {
            Header,
            Footer
        }
    }
</script>

<style scoped>
    @import url("../css/register.css");
</style>
<template>
	<div class="login">
		<Header></Header>
		<div class="r_div">
			<span class="line"></span>
			<span class="txt">登录</span>
			<span class="line"></span>
		</div>
		<div class="login_content">
			<div class="login_left">
				<img src="../source/登录二维码.png" class="login_code">
				<p>
					<img src="../source/左公仔.png">
					<i>
						<span class="ewm">扫 描 二&nbsp;维&nbsp;码&nbsp;登 录</span><br>
						<span>请使用&nbsp;<a href="">哔哩哔哩客户端</a></span><br>
						<span>扫码登录</span><br>
						<span>或扫码下载APP</span>
					</i>
					<img src="../source/右公仔.png">
				</p>
			</div>
			<div class="login_right">
				<router-link to="password">密码登录</router-link>
				<router-link to="note">短信登录</router-link>
				<router-view></router-view>
				<a href="" class="me">
					<input type="checkbox">记住我<span>不是自己的电脑不要勾选此项</span>
				</a>
				<span class="login_span">
					<a href="">无法验证？</a>
					<a href="">忘记密码？</a>
				</span>
				<div class="l_r">
					<input type="submit" value="登录" class="login" @click="loginHandle">
					<router-link to="/register">
						<input type="submit" value="注册" class="register">
					</router-link>
				</div>
				<p>
					<a href=""><img src="../source/small_weibo.png"> 微博账号登录</a>
					<a href=""><img src="../source/small_qq.png">QQ账号登录</a>
				</p>
			</div>
		</div>
		<p class="login_p">登录及代表你同意<a href="">用户协议</a>和<a href="">隐私政策</a></p>
		<Footer></Footer>
	</div>
</template>

<script>
	import Header from "../components/login/Header"
	import Footer from "../components/login/Footer"

	export default {
		name: 'Login',
		methods: {
			loginHandle() {
				const phone = document.getElementById("phone");
				const password = document.getElementById("password");
				if (phone.value == '' || password.value == '') {
					alert("手机号或密码不能为空");
				} else {
					const sql_phone = localStorage.getItem("2" + phone.value);
					const sql_pwd = localStorage.getItem("1" + phone.value);
					if (phone.value == sql_phone && password.value == sql_pwd) {
						alert("登录成功");
						sessionStorage.setItem("session_phone", sql_phone);
						sessionStorage.setItem("session_pwd", sql_pwd);
						this.$router.go(0);
					} else {
						alert("手机号或密码错误");
					}
				}
			}
		},
		mounted() {
			if(sessionStorage.getItem("session_phone") != null){
				this.$router.push('/content/index/release');
			}
		},
		components: {
			Header,
			Footer
		}
	}
</script>

<style scoped>
	@import url("../css/login.css");

	.r_div .txt {
		color: black;
		vertical-align: middle;
		font-size: 30px;
	}
</style>

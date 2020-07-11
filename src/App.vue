<template>
	<div id="app">
		<!-- 主页视图，通过showPage来判断是否显示哪一个页面 -->
		<div id="PC" v-if="showPage === 1">
			<div id="PCIndexFixed" :style="{top: fixedNavTop ? '0px': '-70px'}">
				<HeadFix></HeadFix>
			</div>
			<Index></Index>
			<router-view></router-view>
		</div>
		<div id="moblie" v-else-if="showPage === 2">
			<router-view></router-view>
		</div>
	</div>
</template>
<script>
	import Index from '@/views/IndexNav.vue'
	import HeadFix from '@/components/header/HeadFixNav.vue'
	export default {
		name: 'App',
		data() {
			return {
				showPage: 1,
				fixedNavTop: false,
			}
		},
		methods: {
			//滚动条事件
			handlescroll() {
				let scrolltop = document.documentElement.scrollTop;
				if (scrolltop >= 320) {
					this.fixedNavTop = true;
				} else {
					this.fixedNavTop = false;
				}
			}
		},
		components: {
			Index,
			HeadFix
		},
		created() {
			if (/Android|webOS| iPhone | iPad | iPod |BlackBerry|opera mini|opera mobile|appleWebkit.*mobile|mobile/i.test(
					navigator.userAgent)) {
				this.showPage = 2
				this.$router.push('/')
			} else {
				this.showPage = 1
				this.$router.push('/')
			}
		},
		mounted() {
			// 如果账号未登录
			if (sessionStorage.getItem('session_phone') == null) {
				console.log('获取个人信息失败，账号未登录');
			}
			window.addEventListener("scroll", this.handlescroll); //监听滚动条
		},
		//离开路由是取消滚动条监听
		destroyed() {
			document.documentElement.scrollTop = 0;
			window.removeEventListener("scroll", this.handlescroll);
		},
	}
</script>
<style>
	@import url("css/init.css");
</style>
<style lang="scss">
	#app {
		font-family: Avenir, Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;

		color: #2c3e50;
		background: #f4f5f7;
	}

	#PCIndexFixed {
		position: fixed;
		top: -70px;
		left: 0;
		right: 0;
		width: 1280px;
		margin: auto;
		transition: top 0.5s;
		z-index: 999;

		
	}

	#nav {
		padding: 30px;

		a {
			font-weight: bold;
			color: #2c3e50;

			&.router-link-exact-active {
				color: #42b983;
			}
		}
	}
</style>

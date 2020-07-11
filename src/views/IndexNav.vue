<template>
	<!-- B站导航栏 -->
	<div id="Index">
		<div id="indexnav">
			<!-- blilbi图标 -->
			<router-link to="/content">
				<img src="../source/blibli.png" alt="blibli" class="img-blibli">
			</router-link>
			<!-- 头部导航 -->
			<div class="nav-blibli">
				<ul v-for="(item, index) in navData" :key="index">
					<li :class="item.bottom" @mouseenter="showBox(index)" @mouseleave="showHidden()" class="li-nav">{{item.name}}</li>
				</ul>
				<!-- 隐藏盒子-主站 -->
				<transition name="fade">
					<div v-show="isShow" class="hiddenBox" @mouseenter="show()" @mouseleave="showHidden()">
						<div id="setPaddingBox">
							<a v-for="(item, ind) in navData[0].navContent" :key="ind" href="#">
								<span class="name">
									<img :src='item.navImg' alt="" id="setImage">
									{{item.navName}}
								</span>
								<span class="count">{{item.navCount}}</span>
							</a>
						</div>
						<div id="r_navBox">
							<a v-for="(item, ind) in navData[0].navcIndex" :key="ind" href="#">
								<span class="name">
									<img :src='item.navImg' alt="" id="setImage">
									{{item.navName}}
								</span>
							</a>
						</div>
					</div>
				</transition>
				<!-- BW切换效果 -->
				<div id="tran-bw">
					<div id="tran">
						<p class="text-bw-one">BWL</p>
						<img src="https://i0.hdslb.com/bfs/archive/bca6c6d4f9de8b4bb37f8cccb46d4e99dd04d926.png" alt="BW" class="img-bw">
						<p class="text-bw">BWL</p>
					</div>
				</div>
				<!-- downloadApp -->
				<div id="downloadApp">
					<p class="bilifont bili-icon_dingdao_xiazaiapp" @mouseenter="showDownWindows()" @mouseleave="hiddenDownWindow()">下载APP</p>
				</div>
				<!-- 下载app隐藏盒子 -->
				<transition name="down">
					<div id="downloadApphidden" v-if="downApp" @mouseenter="showDownWindows()" @mouseleave="hiddenDownWindow()">
						<p class="text">扫码下载手机客户端</p>
					</div>
				</transition>
			</div>
			<div id="nav-search" v-show="nullLogin">
				<form action="" class="form-search">
					<input type="text" name="" placeholder="《隐秘的角落》10个最具电影感镜头" class="input-search">
				</form>
				<div class="btn-search">
					<button class="bilifont bili-icon_dingdao_sousuo nav-btn"></button>
				</div>
			</div>
			<div id="login-icon" v-show="uLogin">
				<a href="">
					<i class="bilifont bili-icon_dingdao_sousuo"></i>
				</a>
			</div>
			<!-- 如果用户为非登录状态，则显示未登录的内容 -->
			<div id="person-center" v-if="loginNullShow">
				<img src="../source/akari.jpg" alt="akari">
				<router-link to="/login" @mouseenter.native="showHiddenLogin()" @mouseleave.native="showHiddenLogin()">登录</router-link>
				<router-link to="/register">注册</router-link>
				<button class="btn-file">投稿</button>
			</div>
			<!-- 用户登录状态 -->
			<div id="person" v-if="uLoginShow">
				<indexLogin></indexLogin>
			</div>
		</div>
		<!-- 登录按钮下的动画盒子 -->		
		<transition name="login">
			<div id="tranLogin" v-show="transitionLogin" @mouseenter="showHiddenLogin()" @mouseleave="showHiddenLogin()">
				<h4>登录后你可以：</h4>
				<div id="LoginDanmu">
					<img src="../source/danmuScroll.png" alt="" id="img-danmu" style="left: -76px;">
					<img src="../source/danmuScroll.png" alt="" id="img-danmu" style="left: 245px;">
				</div>
				<div id="btnshow">
					<button class="btn-register" @click="clickRegister()">注册</button>
					<button class="btn-login" @click="clickLogin()">登录</button>
				</div>
			</div>
		</transition>
	</div>
</template>
<script>
	import indexLogin from '@/components/index/indexLogin.vue';
	import Mock from 'mockjs';
	export default {
		name: 'Index',
		data() {
			return {
				transitionLogin: false,
				navData: [{
					id: '1',
					name: '主站',
					bottom: 'iconfont xiangxia',
					navcIndex:[{
						navName: '专栏',
						navImg: require('../source/m15.png'),
					},{
						navName: '直播',
						navImg: require('../source/m16.png'),
					},{
						navName: '活动',
						navImg: require('../source/m17.png'),
					},{
						navName: '课堂',
						navImg: require('../source/m18.png'),
					},{
						navName: '小黑屋',
						navImg: require('../source/m19.png'),
					},{
						navName: '音乐plus',
						navImg: require('../source/m20.png'),
					}],
					navContent: [{
						id: 1,
						navName: '动画',
						navImg: require('../source/blibli_flashico.png'),
						navCount:Mock.mock('@natural(60, 100)')
					}, {
						id: 2,
						navName: '番剧',
						navImg: require('../source/blibli_tvico.png'),
						navCount:Mock.mock('@natural(60, 100)')
					}, {
						id: 3,
						navName: '国风',
						navImg: require('../source/blibli_chinaico.png'),
						navCount:Mock.mock('@natural(60, 100)')
					}, {
						id: 4,
						navName: '音乐',
						navImg: require('../source/blibli_musicico.png'),
						navCount:Mock.mock('@natural(60, 100)')
					}, {
						id: 5,
						navName: '舞蹈',
						navImg: require('../source/blibli_danceico.png'),
						navCount:Mock.mock('@natural(60, 100)')
					}, {
						id: 6,
						navName: '游戏',
						navImg: require('../source/blibli_ganeico.png'),
						navCount:Mock.mock('@natural(60, 100)')
					}, {
						id: 7,
						navName: '知识',
						navImg: require('../source/m12.png'),
						navCount:Mock.mock('@natural(60, 100)')
					}, {
						id: 8,
						navName: '数码',
						navImg: require('../source/m13.png'),
						navCount:Mock.mock('@natural(60, 100)')
					}, {
						id: 9,
						navName: '生活',
						navImg: require('../source/m14.png'),
						navCount:Mock.mock('@natural(60, 100)')
					}, {
						id: 10,
						navName: '鬼畜',
						navImg: require('../source/m15.png'),
						navCount:Mock.mock('@natural(60, 100)')
					}, {
						id: 11,
						navName: '时尚',
						navImg: require('../source/blibli_ganeico.png'),
						navCount:Mock.mock('@natural(60, 100)')
					}]
				}, {
					id: '2',
					name: '番剧'
				}, {
					id: '3',
					name: '游戏中心'
				}, {
					id: '4',
					name: '会员购'
				}, {
					id: '5',
					name: '漫画'
				}, {
					id: '6',
					name: '赛事'
				}, {
					id: '7',
					name: '歌会'
				}],
				isShow: false,
				// 未登录状态
				loginNullShow: true,
				// 下载app二维码的盒子
				downApp: false,
				// 登陆状态
				uLoginShow: false,
				// 未登录状态的搜索框
				nullLogin: true,
				// 登录时状态搜索框
				uLogin: false
			}
		},
		components: {
			indexLogin
		},
		methods: {
			showBox(index) {
				if (index == 0) {
					this.isShow = !this.isShow
				} else this.isShow = false
			},
			showHidden() {
				this.isShow = false
			},
			show() {
				this.isShow = true;
			},
			showDownWindows() {
				this.downApp = true;
			},
			hiddenDownWindow() {
				this.downApp = false;
			},
			showHiddenLogin(){
				this.transitionLogin = !this.transitionLogin
			},
			clickLogin(){
				this.$router.push('/login/password')
			},
			clickRegister(){
				this.$router.push('/register')
			}
		},
		created() {
			// 如果用户已登录，则将搜索框隐藏并显示已登录的导航栏
			if (sessionStorage.getItem('session_phone') != null) {
				this.loginNullShow = false;
				this.uLoginShow = true;
				this.nullLogin = false;
				this.uLogin = true;
			}
		}
	}
</script>
<style scoped>
	@import url("../css/init.css");
	@import url("../css/indexNavTop.css");
</style>

<template>
	<div id="mIndex">
		<header id="m-navBar">
			<a href="" class="a-mobile-logo">
				<i class="iconfont Navbar_logo"></i>
			</a>
			<div id="nav-right">
				<a href="" class="a-btn-search">
					<img src="../source/search.png" alt="">
				</a>
				<a href="" class="a-btn-info">
					<img src="https://i1.hdslb.com/bfs/face/465cef96d2fd1fed4a595427ba6548e555c480b9.jpg@48w_48h_1c.png" alt="">
				</a>
				<button class="btn-m-download">下载APP</button>
			</div>
		</header>
		<div id="m-content">
			<div class="mBanner"></div>
			<div id="face">
				<img src="https://i0.hdslb.com/bfs/face/4c4850ff0fbf8cc10db6f30f335446fcd5f24c54.jpg" alt="" class="bfg-manger">
				<img src="https://s1.hdslb.com/bfs/static/jinkela/mstation-h5/asserts/icon_Certification_enterprise.png" alt="" class="bfg-icon">
			</div>
			<div id="relation">
				<div class="count">
					<span class="fan">
						<span class="num">239</span>
						<br>
						<span class="type">粉丝</span>
					</span>
					<span class="split"></span>
					<span class="fan">
						<span class="num">6</span>
						<br>
						<span class="type">关注</span>
					</span>
					<span class="split"></span>
					<span class="fan">
						<span class="num">305</span>
						<br>
						<span class="type">获赞</span>
					</span>
				</div>
				<div id="btn-m-collection">
					<button class="gray" v-show="mCollection" @click="canelColl()" id="Colled">已关注</button>
					<button class="gray-um gray" v-show="umCollection" @click="Collectioning()" id="umColl">+关注</button>
				</div>
			</div>
			<div id="base">
				<span class="base-title">茂职院计算机工程系</span>
				<span class="base-level iconfont ic_userlevel_2 "></span>
			</div>
			<div id="verity">
				<img src="https://s1.hdslb.com/bfs/static/jinkela/mstation-h5/asserts/icon_Certification_enterprise.png" alt="">
				<span class="spread-clear">bilibili机构认证：茂职计算机系官方账号</span>
				<a class="spread-btn" @click="showSpread()" v-show="HiddenBtn">展开</a>
				<a class="spread-btn" v-show="showBtn" @click="hiddenSpread()">收起</a>
				<div class="spread-content" id="spread">
					茂名职业技术学院计算机工程系官方账号
					修徳 强技 求实 创新
					<p class="tags">
						<span>uid:488524310</span>
					</p>
				</div>
			</div>
		</div>
		<div id="m-tabs">
			<ul>
				<li class="tab-li" v-for="(item, index) in tabArr" :key = "index" @click="showView(index)" id="tab-li-style">{{item.name}}</li>
			</ul>
		</div>
		<div id="m-views">
			<section v-show="dyShow">
				<Dynamic></Dynamic>
			</section>
			<section v-show="mvShow">
				<mvideo></mvideo>
			</section>
			<section v-show="mPicShow">
				<mPic></mPic>
			</section>	
		</div>
		<div id="OpenApp">
			APP内打开
		</div>
	</div>
</template>

<script>
	import Dynamic from '@/components/moblie/mDynamic.vue';
	import mvideo from '@/components/moblie/mVideo.vue';
	import mPic from '@/components/moblie/mPicture.vue';
	export default {
		name: 'mIndex',
		data() {
			return {
				showBtn: false,
				HiddenBtn: true,
				dyShow: true,
				mvShow: false,
				mPicShow: false,
				mCollection: false,
				umCollection: false,
				tabArr:[{
					name:'动态',
					link:''
				},{
					name:'视频',
					link:''
				},{
					name:'相薄',
					link:''
				}],
			}
		},
		methods: {
			showSpread() {
				this.showBtn = !this.showBtn
				this.HiddenBtn = !this.HiddenBtn
				document.getElementById('spread').style.height = "15.53333vw"
			},
			hiddenSpread() {
				this.showBtn = !this.showBtn
				this.HiddenBtn = !this.HiddenBtn
				document.getElementById('spread').style.height = "4.53333vw"
			},
			showView(index){
				var view = document.getElementsByClassName("tab-li")
				if(index == 0) {
					this.dyShow = true
					this.mvShow = false
					this.mPicShow = false
					view[index+1].style.color="#000000"
					view[index+2].style.color="#000000"
				}
				if(index == 1){
					this.dyShow = false
					this.mvShow = true
					this.mPicShow = false
					view[index-1].style.color="#000000"
					view[index+1].style.color="#000000"
				}
				if(index == 2){
					this.dyShow = false
					this.mvShow = false
					this.mPicShow = true
					view[index-2].style.color="#000000"
					view[index-1].style.color="#000000"
				}
				view[index].style.color="#fb7299"
			},
			canelColl(){
				this.mCollection = false,
				this.umCollection = true,
				document.getElementById('Colled').innerHTML = "操作成功"
				this.$router.go(0)
				localStorage.setItem("follow", "false")
			},
			Collectioning(){
				if(sessionStorage.getItem('session_phone') == null){
					alert('请登录后在操作')
				}else{
					this.mCollection = true,
					this.umCollection = false,
					document.getElementById('umColl').innerHTML = "已关注"
					this.$router.go(0)
					localStorage.setItem("follow", "true")
				}
				
			}
		},
		components: {
			Dynamic,
			mvideo,
			mPic
		},
		created() {
			if(sessionStorage.getItem('session_phone') != null || localStorage.getItem('follow') == "true"){
				this.mCollection = true,
				this.umCollection = false
			}else{
				this.mCollection = false,
				this.umCollection = true
			}
			if(localStorage.getItem('follow') == "false"){
				this.mCollection = false,
				this.umCollection = true
			}else{
				this.mCollection = true,
				this.umCollection = false
			}
		}
	}
</script>

<style scoped="scoped">
	@import url("../css/moblie/mIndex.css");
</style>

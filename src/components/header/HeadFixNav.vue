<template>
	<div id="HeadFixNav">
		<header>
			<section id="wrapper">
				<nav id="person-data">
					<div id="nav-data">
						<ul class="nav-link-fix">
							<li v-for="(item, index) in navArr" :key="index" @mouseenter="movesign(index)" @mousedown="leavesign(index)" @mouseleave="leavenav()">
								<router-link :to="item.navLink" class="navLink" active-class="router-nav-active">
									<span :class="item.navClass"></span>{{item.navName}}
								</router-link>
							</li>
						</ul>
						<form action="" class="nav-form clearfix">
							<input type="text" ref="inData" id="nav-input" placeholder="搜索视频" @mousedown="down()" @mouseout="leave()">
							<span class="icon search-btn"></span>
						</form>
						<div id="nav-static">
							<a href="" title="" class="n-data">
								<p>关注数</p>
								<span>6</span>
							</a>
							<a href="" title="">
								<p>粉丝数</p>
								<span>1.0w</span>
							</a>
							<div class="n-good" title="">
								<p>获赞数</p>
								<span>23556</span>
							</div>
							<div class="n-startplay" title>
								<p>播放数</p>
								<span>10w</span>
							</div>
						</div>
					</div>
					<div id="Horitalcore-fix" ref="hidden"></div>
				</nav>
			</section>
		</header>
	</div>
</template>

<script>
	export default {
		name: 'HeadFixNav',
		data() {
			return {
				navArr: [{
					navClass: 'iconfont icon-ic_home',
					navName: '茂职院计算机工程系',
					navLink:'/content/index/release'
				}, {
					navClass: 'iconfont icon-ic_following',
					navName: '动态',
					navLink:'/content/dynamic'
				}, {
					navClass: 'iconfont icon-ic_video',
					navName: '投稿',
					navCount: 24,
					navLink:'/content/conturibution'
				}, {
					navClass: 'iconfont icon-ic_channel',
					navName: '频道',
					navCount: 1,
					navLink:'/content/channel'
				}, {
					navClass: 'iconfont icon-ic_collect',
					navName: '收藏',
					navCount: 3,
					navLink:'/content/collection'
				}],
				posArr:[{
					index:0,
					indexLeft:'14px'
				},{
					index:1,
					indexLeft:'128px'
				},{
					index:2,
					indexLeft:'193px'
				},{
					index:3,
					indexLeft:'258px'
				},{
					index:4,
					indexLeft:'326px'
				}]
			}
		},
		methods: {
			movesign(index) {
				// 获取滑动横线的DOM
				var horizontal = this.$refs.hidden;
				
				// 从遍历中获取index索引,从使横线能够划入鼠标的块的下面
				if (index == 0) {
					horizontal.style.left = "14px" // 定义样式
					horizontal.style.width = "100px"
				}
				if (index == 1) {
					horizontal.style.left = "128px";
					horizontal.style.width = "50px"
				}
				if (index == 2) {
					horizontal.style.width = "50px"
					horizontal.style.left = "193px";
				}
				if (index == 3) {
					horizontal.style.left = "258px";
					horizontal.style.width = "50px"
				}
				if (index == 4) {
					horizontal.style.left = "326px"
					horizontal.style.width = "50px"
				}
			},
			leavesign(index) {
				// 获取滑动横线的DOM
				var horizontal = this.$refs.hidden;
				horizontal.style.width = "50px"
				if (index == 0) {
					horizontal.style.left = "14px" // 定义样式
					horizontal.style.width = "100px"
				}
				if (index == 1) horizontal.style.left = "128px";
				if (index == 2) horizontal.style.left = "193px";
				if (index == 3) horizontal.style.left = "258px";
				if (index == 4) horizontal.style.left = "326px"
				
			},
			down(){
				var input = this.$refs.inData;
				input.style.border="1px solid #00A1D6";
			},
			leave(){
				var input = this.$refs.inData;
				input.style.border="1px solid #ccd0d7";
			},
			leavenav(){
				// 获取滑动横线的DOM
				var horizontal = this.$refs.hidden;
				var path = this.$route.path;
				if(path == this.navArr[0].navLink || path == '/content/index/play' || path == '/content/index/iCollection') {
					horizontal.style.left = this.posArr[0].indexLeft;
					horizontal.style.width = "100px"
				}
				else if(path == this.navArr[1].navLink) horizontal.style.left = this.posArr[1].indexLeft;
				else if(path == this.navArr[2].navLink || path == '/content/conturibution/video/play' || path=='/content/conturibution/video/release' || path=='/content/conturibution/video/collection'  || path == '/content/conturibution/media' || path == '/content/conturibution/professional' || path == '/content/conturibution/photo') 
				horizontal.style.left = this.posArr[2].indexLeft;
				else if(path == this.navArr[3].navLink) horizontal.style.left = this.posArr[3].indexLeft;
				else if(path == this.navArr[4].navLink || path == '/content/collection/default' || path == '/content/collection/school' || path == '/content/collection/scenery') 
				horizontal.style.left = this.posArr[4].indexLeft;
			},
		},
	}
</script>

<style scoped="scoped" lang="less">

	/**通用的头部 */
	#HeadFixNav {
		width: 100%;
		height: 66px;
		background-color: #fff;
		box-shadow: 0 0 0 1px #eee;

		header {
			height: 56px;
		}
	}
</style>
<style scoped="scoped">
	@import url("../../css/init.css");
	@import url("../../css/indexContentTop.css");
</style>

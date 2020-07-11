<template>
	<div id="school">
		<header>
			<a href="" class="default-header">
				<div id="default-absolte">
					<a id="default-box-img">
						<img src="https://i0.hdslb.com/bfs/archive/0e32086043bc921f4b06b903f9e13c71624c5a58.jpg@380w_240h_100Q_1c.webp" alt="" class="default-img">
						<span class="deficon deficon-favlist"></span>
					</a>
					<a href="" id="default-text-content">
						<p>校园</p>
						<span>创建者：计算机工程系</span>
						<span>播放数：19</span><br>
						<span>2个内容·公开</span>
						<button class="iconfont icon-bofang defaultIcon">播放全部</button>
					</a>
				</div>
			</a>
		</header>
		<div id="default-center">
			<!-- 操作栏 -->
			<div id="center-operation">
				<ul class="center-item">
					<li v-for="(item, index) in defArr" :key="index"><a href="" class="defBox">{{item.name}} <span :class="item.defclass"></span></a></li>
				</ul>
				<div id="center-search" @click="changeColor()" @mouseleave="removeColor()">
					<div class="search-function">当前<span class="chanicon chanicon-arrow Default-arrow"></span></div>
					<div class="search-input">
						<input type="text" name="" id="" placeholder="输入关键词">
						<span class="seaicon icon-search"></span>
					</div>
				</div>
			</div>
			<!-- 内容栏 -->
			<div id="center-favlist-item">
				<ul class="favlist-item">
					<li v-for="(item, index) in favArr" :key="index">
						<a href="" class="favlist-image"  @mouseenter="showInfo(index)" @mouseleave="HiddenInfo(index)">
							<img :src="item.image" alt="">
							<!-- 视频时长 -->
							<span class="video-time">{{item.favVTime}}</span>
							<!-- 收藏视频信息 -->
							<transition name="fav">
								<div id="videoInfo" v-if="showModule && n == index">
									<p>播放:{{item.favPlayCount}}</p>
									<p>收藏:{{item.favCount}}</p>
									<p>UP主:{{item.upName}}</p>
									<p>投稿:{{item.upDate}}</p>
									<span class="watcher" title="稍后在看"></span>
								</div>
							</transition>
							<p class="favTitle">{{item.favTitle}}</p>
							<p class="favCollection">
								<span class="favData">收藏于：{{item.favTime}}</span>
								<span class="iconfont icon-ic_more demore"></span>
							</p>
						</a>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
	import Mock from 'mockjs'
	export default {
		name:'School',
		data() {
			return {
				n:0,
				showModule: false,
				defArr:[{
					name:'批量操作',
					defclass:''
				},{
					name:'全部分区',
					defclass:'chanicon chanicon-arrow defauicon'
				},{
					name:'全部收藏',
					defclass:'chanicon chanicon-arrow defauicon'
				}],
				favArr:[{
					image:'https://i0.hdslb.com/bfs/archive/0e32086043bc921f4b06b903f9e13c71624c5a58.jpg@380w_240h_100Q_1c.webp',
					favTitle:'【茂名职业技术学院】2018级军训宣传片《半月迷彩》',
					favTime:Mock.mock('@date("m-dd")'),
					favPlayCount:Mock.mock('@natural(100,100000)'),
					favCount:Mock.mock('@natural(100,1000)'),
					upName:'茂职院',
					upDate:Mock.mock('@date(yyyy-M-dd)'),
					favVTime:'04:56'
				},{
					image:'https://i2.hdslb.com/bfs/archive/3159c934ebfc2d2d68335f684e7c5aa2dd7e2a28.jpg@380w_240h_100Q_1c.webp',
					favTitle:'【短片】《讲个五零三的故事》之遇见，舍友之间的日常',
					favTime:Mock.mock('@date("m-dd")'),
					favPlayCount:Mock.mock('@natural(100,100000)'),
					favCount:Mock.mock('@natural(100,1000)'),
					upName:'HTFBlog',
					upDate:Mock.mock('@date(yyyy-M-dd)'),
					favVTime:'04:56'
				},{
					image:'https://i0.hdslb.com/bfs/archive/859596e0136feaa3385971b199652bbbb0606f4c.jpg@380w_240h_100Q_1c.webp',
					favTitle:'茂名职业技术学院国旗护卫队进行升旗仪式',
					favTime:Mock.mock('@date("m-dd")'),
					favPlayCount:Mock.mock('@natural(100,100000)'),
					favCount:Mock.mock('@natural(100,1000)'),
					upName:'HTFBlog',
					upDate:Mock.mock('@date(yyyy-M-dd)'),
					favVTime:'04:56'
				},{
					image:'https://i0.hdslb.com/bfs/archive/fb1e3fd0f145421acdd6d77cbda4e28ec669f490.jpg@380w_240h_100Q_1c.webp',
					favTitle:'【茂名职业技术学院】《如家饭堂》舌尖上的二饭~',
					favTime:Mock.mock('@date("m-dd")'),
					favPlayCount:Mock.mock('@natural(100,100000)'),
					favCount:Mock.mock('@natural(100,1000)'),
					upName:'HTFBlog',
					upDate:Mock.mock('@date(yyyy-M-dd)'),
					favVTime:'04:56'
				},{
					image:'https://i2.hdslb.com/bfs/archive/859e38e767a2d148530d915da728f365ea2c4184.jpg@380w_240h_100Q_1c.webp',
					favTitle:'茂名职业技术学院新校区2019年校运会',
					favTime:Mock.mock('@date("m-dd")'),
					favPlayCount:Mock.mock('@natural(100,100000)'),
					favCount:Mock.mock('@natural(100,1000)'),
					upName:'HTFBlog',
					upDate:Mock.mock('@date(yyyy-M-dd)'),
					favVTime:'04:56'
				}]
			}
		},
		methods: {
			changeColor() {
				var search = document.getElementById("center-search");
				search.style.borderColor = "#00A0D8"
			},
			removeColor(){
				var search = document.getElementById("center-search");
				search.style.borderColor = "#CCD0D7"
			},
			showInfo(index){
				this.n = index
				this.showModule = true
			},
			HiddenInfo(index){
				this.n = index
				this.showModule = false
			}
		},
	}
</script>

<style>
</style>

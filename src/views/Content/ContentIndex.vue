<template>
	<div id="contentindex">
		<!-- 左侧内容 -->
		<div id="indexLeft">
			<!-- TA的推荐模块。需要用户关注才可以显示 -->
			<div id="LoginCollection" class="clearfix" v-if="CollectionShow">
				<section id="ShowCollection">
					<a href="" class="CollectionImage">
						<img :src="infoImage" alt="">
						<span class="time-video">03:28</span>
					</a>
					<div id="i-info">
						<a href="" :title="infotitle" class="i-info-title">
							{{infotitle}}
						</a>
						<div class="i-info-meta">
							<span class="i-info-data">
								<em class="i-info-icon i-info-play"></em>1102
							</span>
							<span class="i-info-data">
								<em class="i-info-icon i-info-danmu"></em>3
							</span>
							<span class="i-info-data">
								<em class="i-info-icon i-info-time"></em>3-20
							</span>
						</div>
						<p class="i-info-epsc">{{infoSign}}</p>
						<p class="i-info-reason">{{inforeson}}</p>
					</div>
				</section>
			</div>
			<!-- TA的视频模块 -->
			<div id="section-video">
				<div id="section-video-border">
					<h3 class="section-title">
						<a href="" class="section-video-name">TA的视频</a>
						<span class="count">20</span>
						<a href="" class="section-more">更多</a>
						<div class="be-tab">
							<ul class="be-tab-inner">
								<li class="be-item" v-for="(item, tabindex) in tabitem" :key="tabindex">
									<router-link :to="item.tabLink" class="inner" active-class="inner-active" @click.native="tickleCursor(tabindex)">{{item.tabName}}</router-link>
								</li>
							</ul>
							<div class="be-tab-cursor" ref="tab"></div>
						</div>
					</h3>
					<div id="section-video-content">
						<router-view></router-view>
					</div>
				</div>
			</div>
			<!-- TA的专栏模块 -->
			<div id="section-special">
				<div id="special-border">
					<h3 id="special-title">TA的专栏</h3>
					<div id="special-title-stu">
						学生作品-视频
						<span class="count">1</span>
						<a href="" class="section-watch">稍后在看</a>
						<a href="" class="section-more">更多</a>
					</div>
					<div id="special-content">
						<img src="https://i1.hdslb.com/bfs/archive/3830e4508e8af7f98a6a783bb5a8e2a2b2707e8d.jpg@320w_200h_100Q_1c.webp" alt="">
						<article class="special-inner">
							<p>{{specialTitle}}</p>
							<div class="i-info-meta">
								<span class="i-info-data">
									<em class="i-info-icon i-info-play"></em>1102
								</span>
								<span class="i-info-data">
									<em class="i-info-icon i-info-danmu"></em>3
								</span>
								<span class="i-info-data">
									<em class="i-info-icon i-info-time"></em>3-20
								</span>
							</div>
							<em class="inner-sign">=3=学生制作不易,求一波关注谢谢</em>
						</article>
					</div>
					<!-- TA的收藏模块 -->
					<div id="special-title-stu">
						TA的收藏夹
						<span class="count">3</span>
						<a href="" class="section-more">更多</a>
					</div>
					<div id="special-collection">
						<ul class="s-content">
							<li class="s-content-item" v-for="(item, index) in scArr" :key="index">
								<a href="" class="content-a-data">
									<img :src="item.scImg" alt="">
									<span class="scCount">{{item.scCount}}</span>
									<p>{{item.scName}}</p>
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<!-- TA的相薄模块 -->
			<div id="section-video">
				<div id="section-video-border">
					<h3 class="section-title">
						<a href="" class="section-video-name">TA的相薄</a>
						<span class="count">8</span>
						<a href="" class="section-more">更多</a>
						
					</h3>
					<!-- TA的相薄 -->
					<div id="section-video-content">
						<ul class="release-item">
							<li class="release-video-item" v-for="(item, reIndex) in  videoArr" :key="reIndex">
								<a href="" class="releaseImage">
									<img :src="item.image" alt="">
									<span class="count-photo">{{item.playCount}}</span>
									<div id="scrollbackground" ref="scroll"></div>
								</a>
								<p class="release-item-title">{{item.title}}</p>
								<div class="i-release-meta">
									<span class="i-release-data">
										<em class="i-info-icon i-info-watch"></em>{{item.playCount}}
									</span>
									<span class="i-release-data">
										<em class="i-info-icon i-info-good"></em>{{item.playGood}}
									</span>
								</div>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
		<!-- 右侧内容 -->
		<div id="indexRight">
			<!-- 认证内容 -->
			<div id="Right-organize">
				<p><span class="organize-icon"></span>{{organizeTitle}}</p>
			</div>
			<!-- 公告内容 -->
			<div id="Right-affiche">
				<h4>公告</h4>
				<p>=3=进来了不关注一下吗？</p>
			</div>
			<!-- 直播间内容 -->
			<div id="Right-live">
				<header>
					<h4>直播间</h4>
					<article>
						<button class="btn-attention">关注直播间</button>
						<span class="signCount">233</span>
					</article>
				</header>
				<p>
					主播不在，开播的时候会在动态通知你哦~
					<a href="" class="a-push">前往TA的直播间 ></a>
				</p>
				
			</div>
		</div>
	</div>
</template>

<script>
	import {requestIcon} from '../../utils/Request.js'
	export default {
		name: 'Contentindex',
		data() {
			return {
				CollectionShow:false,
				infoImage: 'http://i2.hdslb.com/bfs/archive/1e81001113e0b1c8731eb773799126196bace7bb.png@560w_350h_100Q_1c.webp',
				infotitle: '【学生作品】茂名职业技术学院 战疫情《加油，我的大学》',
				infoSign: '加油，我的大学！加油茂职，加油茂名，加油武汉，加油，中国！',
				inforeson: '推荐理由：任何困难都难不倒英雄的中国人民！',
				tabitem: [{
					tabName: '最新发布',
					tabLink: '/content/index/release'
				}, {
					tabName: '最多播放',
					tabLink: '/content/index/play'
				}, {
					tabName: '最多收藏',
					tabLink: '/content/index/iCollection'
				}],
				videoArr:'',
				specialTitle:'【学生作品】16级数字媒体1班 陈佩璇——《逐流》',
				scArr:[{
					scImg:'https://i0.hdslb.com/bfs/archive/18fd7f16e2a530fb1ec10a0b966a55d407cdce18.jpg@152w_152h_100Q_1c.webp',
					scName:'默认收藏夹',
					scCount:2
				},{
					scImg:'https://i0.hdslb.com/bfs/archive/0e32086043bc921f4b06b903f9e13c71624c5a58.jpg@152w_152h_100Q_1c.webp',
					scName:'校园',
					scCount:5
				},{
					scImg:'https://i1.hdslb.com/bfs/archive/8d06a19c466b32a88ee3649641fc2cb3a33b1858.jpg@152w_152h_100Q_1c.webp',
					scName:'茂名风光',
					scCount:5
				}],
				organizeTitle:'blibli机构认证：茂职院计算机系官方账号'
			}
		},
		methods: {
			// 控制tab-cursor盒子滑动
			tickleCursor(index) {
				var navBox = this.$refs.tab;
				if (index == 0) navBox.style.transform = "translateX(0px)";
				if (index == 1) navBox.style.transform = "translateX(71px)";
				if (index == 2) navBox.style.transform = "translateX(142px)";
			}
		},
		created() {
			requestIcon('https://www.lcxin666.com', su=>{this.videoArr = su}, fa => {console.log(fa)})
			// 如果用户已关注up主,就将推荐模块显示,否则隐藏
			if(localStorage.getItem('follow') == "true" && sessionStorage.getItem('session_phone') != null){
				this.CollectionShow = true
			}else{
				this.CollectionShow = false
			}
		}
	}
</script>

<style>
	@import url("../../css/init.css");
	@import url("../../css/indexContent.css");
</style>

<template>
	<div id="Video">
		<header id="video-header">
			<h3>TA的视频</h3>
			<article>
				<div id="inner">
					<ul class="be-tab-inner">
						<li class="be-item" v-for="(item, tabindex) in tabitem" :key="tabindex">
							<router-link :to="item.tabLink" class="inner" active-class="inner-active" @click.native="tickleCursor(tabindex)">{{item.tabName}}</router-link>
						</li>
					</ul>
					<div class="be-tab-cursor" ref="tab"></div>
				</div>
				<section class="icon-sort">
					<span class="vicon icon-circule"></span>
					<span class="vicon icon-list"></span>
				</section>
			</article>
		</header>
		<!-- 导航栏 -->
		<div id="video-nav">
			<ul>
				<li v-for="(vitem, vindex) in navItem" :key="vindex" class="video-sortNav"><a @click="showcontent(vindex)"><span class="video-content">{{vitem.navName}} </span><span class="video-count" v-if="vindex === 0">{{addCount}}</span><span class="video-count" v-else-if="vindex !== 0 ">{{vitem.navCount}}</span></a></li>
			</ul>
		</div>
		<div id="video-content">
			<router-view></router-view>
		</div>
	</div>
</template>

<script>
	export default {
		name:'Video',
		data() {
			return {
				tabitem: [{
					tabName: '最新发布',
					tabLink: '/content/conturibution/video/release'
				}, {
					tabName: '最多播放',
					tabLink: '/content/conturibution/video/play'
				}, {
					tabName: '最多收藏',
					tabLink: '/content/conturibution/video/collection'
				}],
				navItem:[{
					navName:'全部',
				},{
					navName:'动画',
					navCount:3
				},{
					navName:'生活',
					navCount:5
				}]
			}
		},
		methods: {
			// 控制tab-cursor盒子滑动
			tickleCursor(index) {
				var navBox = this.$refs.tab;
				if (index == 0) navBox.style.transform = "translateX(0px)";
				if (index == 1) navBox.style.transform = "translateX(71px)";
				if (index == 2) navBox.style.transform = "translateX(142px)";
			},
			showcontent(index){
				console.log(index);
			}
		},
		computed:{
			addCount(){
				var index = this.navItem.length
				var SumCount = this.navItem[index-2].navCount + this.navItem[index-1].navCount
				return SumCount
			}
		}
	}
</script>

<style>
	@import url("../../css/Conturibution.css");
</style>

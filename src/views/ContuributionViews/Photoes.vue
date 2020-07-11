<template>
	<div id="photo">
		<header id="video-header">
			<h3>TA的相薄</h3>
		</header>
		<!-- 导航栏 -->
		<div id="video-nav" class="photo-nav">
			<ul>
				<li v-for="(vitem, vindex) in navItem" :key="vindex" class="video-sortNav"><a @click="showcontent(vindex)"><span class="video-content">{{vitem.navName}} </span><span class="video-count" v-if="vindex === 0">{{addCount}}</span><span class="video-count" v-else-if="vindex !== 0 ">{{vitem.navCount}}</span></a></li>
			</ul>
		</div>
		<!-- 主页内容 -->
		<div id="photo-box">
			<ul class="photo-item">
				<li class="photo-index" v-for="(pitem, pindex) in picArr" :key="pindex">
					<a href="#" class="img-rel" :style="pitem.itemStyle">
						<span class="itemCount">{{pitem.itemCount}}</span>
					</a>
					<a href="" class="item-title">{{pitem.itemTitle}}</a>
					<article>
						<span class="itn-view">
							<span :class="pitem.iconClass"></span>
							<span class="count-view">{{pitem.checkCount}}</span>
						</span>
						<span :class="pitem.iconLike">
							<span class="icon-like"></span>
							<span class="count-like">{{pitem.checkLike}}</span>
						</span>
					</article>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
import Mock from 'mockjs'
export default {
	name:'Photoes',
	data() {
		return {
			navItem:[{
				navName:'全部',
			},{
				navName:'日常',
				navCount:4
			}],
			picArr:[{
				itemCount:'4P',
				itemTitle:'深切悼念抗疫烈士和遇难同胞。',
				itemStyle:"background: url('https://i0.hdslb.com/bfs/album/a5189b2367d842b6b7d2efd553ac8c57f761b92b.jpg@160w_120h_1e.webp') no-repeat;background-size: cover;",
				iconClass:'icon-view',
				iconLike:'itn-like',
				checkCount:Mock.mock('@natural(60, 10000)'),
				checkLike:8
			},{
				itemCount:'13P',
				itemTitle:'【投稿】茂职院最美的秋天，随手一拍就是蔚蓝的天空！！[惊喜][惊喜][惊喜]（投稿人：计算机工程系18软件4班李灿欣）。',
				itemStyle:"background: url('https://i0.hdslb.com/bfs/album/8507567aa8bf523356fc918c2f935fcf37888144.jpg@160w_120h_1e.webp') no-repeat;background-size: cover;",
				iconClass:'icon-view',
				iconLike:'itn-like',
				checkCount:Mock.mock('@natural(60, 10000)'),
				checkLike: 11
			},{
				itemCount:'10P',
				itemTitle:'[tv_斜眼笑]多么有艺术气息的作业啊～',
				itemStyle:"background: url('https://i0.hdslb.com/bfs/album/61b6f976ddacb813beecc6371d2eee1133cee6f5.webp') no-repeat;background-size: cover;",
				iconClass:'icon-view',
				iconLike:'itn-like',
				checkCount:Mock.mock('@natural(60, 10000)'),
				checkLike: 11
			},{
				itemCount:'12P',
				itemTitle:'我已成为哔哩哔哩第68456571位转正会员，挑战转正答题考试获得74分，获得"学霸"挂件，有效期21天。',
				itemStyle:"background: url('https://i0.hdslb.com/bfs/member/b63f60fead7ea2d866650caa572ebdbe65af895b.png@160w_120h_1e.webp') no-repeat;background-size: cover;",
				iconClass:'icon-view',
				iconLike:'itn-like',
				checkCount:Mock.mock('@natural(60, 10000)'),
				checkLike: 11
			}],
			CountArr:''
		}
	},
	computed: {
		addCount(){
			let SumCount = ""
			var pz = ""
			for(pz  = 1;pz < this.navItem.length;pz++){
				SumCount += this.navItem[pz].navCount 
				console.log(SumCount);
			}
			return SumCount
		}
	},
}
</script>

<style>
</style>

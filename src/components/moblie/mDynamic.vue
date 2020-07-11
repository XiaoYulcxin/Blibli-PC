<template>
	<div id="mDynamic">
		<!-- {{mDyArr}} -->
		<ul>
			<li class="mDy-li" v-for="(item, index) in mDyArr" :key="index">
				<div id="cardHeader">
					<section class="cardImg">
						<img src="https://i0.hdslb.com/bfs/face/4c4850ff0fbf8cc10db6f30f335446fcd5f24c54.jpg" alt="" class="bfg-manger mfg-manger">
						<img src="https://s1.hdslb.com/bfs/static/jinkela/mstation-h5/asserts/icon_Certification_enterprise.png" alt="" class="bfg-icon mfg-icon">
					</section>
					<div id="cardName">
						<p class="cardTitle">茂职院计算机工程系</p>
						<p class="cardData">
							<span>{{item.dyDate}}&nbsp;&nbsp;</span>
							<span>投稿了视频</span>
						</p>
					</div>
				</div>
				<div id="cardVideo">
					<img :src="item.dyImage" alt="">
					<div id="cushion">
						<div class="detail">
							<p class="time">{{item.dyTime}}</p>
							<p>{{item.dyWatch}}观看</p>
							<p>{{item.dydanmu}}弹幕</p>
						</div>
					</div>	
				</div>
				<p class="text-view">{{item.dytitle}}</p>
				<footer>
					<ul class="footer-mUl">
						<li v-for="(oitem, oindex) in dyIcon" :key="oindex" :class="oitem.dyClass">{{item.dyMess}}</li>
					</ul>
				</footer>
			</li>
		</ul>
	</div>
</template>

<script>
	import {mDynamic} from '../../utils/Request.js'
	export default {
		name:'mDynamic',
		data() {
			return {
				mDyArr:'',
				dyIcon:[{
					'dyClass':'mtransmit'
				},{
					'dyClass':'mComment'
				},{
					'dyClass':'support'
				}]
			}
		},
		created() {
			mDynamic("http://www.bbb.com", su=>{this.mDyArr = su}, fa =>{console.log(fa)})
		}
	}
</script>

<style>
</style>

<template>
	<div id="indexPlay">
		<ul class="release-item">
			<li class="release-video-item" v-for="(item, reIndex) in  videoArr" :key="reIndex">
				<a href="" class="releaseImage" @mouseenter="showBg(reIndex)" @mouseleave="hiddenBg(reIndex)">
					<img :src="item.image" alt="">
					<span class="time-video">{{item.playTime}}</span>
					<div id="scrollbackground" ref="scroll"></div>
				</a>
				<p class="release-item-title">{{item.title}}</p>
				<div class="i-release-meta">
					<span class="i-release-data">
						<em class="i-info-icon i-info-time"></em>{{item.date}}
					</span>
					<span class="i-release-data">
						<em class="i-info-icon i-info-play"></em>{{item.playCount}}
					</span>
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
	import {requestIcon} from '../../utils/Request.js'
	export default {
		name:'IndexPlay',
		data() {
			return {
				videoArr:''
			}
		},
		methods: {
			showBg(index) {
				// 获取其盒子id
				var show = this.$refs.scroll;
				show[index].style.background="rgba(127,127,127,0.5)";
			},
			hiddenBg(index){
				var show = this.$refs.scroll;
				show[index].style.background="rgba(127,127,127,0)"
			}
		},
		created() {
			requestIcon('https://www.lcxin666.com', su=>{this.videoArr = su}, fa => {console.log(fa)})
		}
	}
</script>

<style>
</style>

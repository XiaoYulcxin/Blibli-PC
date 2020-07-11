<template>
	<div id="mVideo">
		<div class="artive-list">
			<a href="" class="video-item-artive" v-for="(item, index) in mvArr" :key="index">
				<div id="cover">
					<img :src="item.vImage" alt="">
					<span class="duration">{{item.vTime}}</span>
				</div>
				<div class="info">
					<h3>{{item.vtitle}}</h3>
					<div class="state">
						<span class="view">
							<i class="iconfont icon_shipin_bofangshu"></i>
							<span>{{item.vShare}}</span>
						</span>
						<span class="danmaku">
							<i class="iconfont icon_shipin_danmushu"></i>
							<span>{{item.vMess}}</span>
						</span>
					</div>
				</div>
			</a>
		</div>
	</div>
</template>

<script>
	import {mrVideo} from '../../utils/Request.js'
	
	export default {
		name:'mVideo',
		data() {
			return {
				mvArr:''
			}
		},
		created() {
			mrVideo("http://www.lcxin.com", su=>{this.mvArr = su}, fa=>{console.log(fa)})
		}
	}
</script>

<style>
</style>

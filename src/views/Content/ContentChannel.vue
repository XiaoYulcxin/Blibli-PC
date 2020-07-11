<template>
	<div id="channel">
		<h4>TA的频道</h4>
		<div id="channel-source">
			<a href="" class="channel-list" @mouseenter="showWatcher()" @mouseleave="hiddenWatcher()">
				<img src="https://i1.hdslb.com/bfs/archive/3830e4508e8af7f98a6a783bb5a8e2a2b2707e8d.jpg@380w_240h_100Q_1c.webp" alt="">
				<div id="video-num">
					<strong>1</strong>
					<span></span>
				</div>
				<span class="watcher" v-show="watcher" title="稍后在看"></span>
			</a>
			<a href="" class="channel-title">
				<p title="学生作品-视频">学生作品-视频</p>
				<span>3-12</span>
			</a>
		</div>
	</div>
</template>

<script>
	export default {
		name:'ContentChannel',
		data() {
			return {
				watcher: false
			}
		},
		methods: {
			showWatcher() {
				this.watcher = true
			},
			hiddenWatcher(){
				this.watcher = false
			}
		},
	}
</script>

<style>
@import url("../../css/Channel.css");
</style>

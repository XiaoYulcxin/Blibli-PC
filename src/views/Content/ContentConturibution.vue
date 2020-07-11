<template>
	<div id="conturibution">
		<!-- 投稿导航栏模块 -->
		<section id="conturibution-left">
			<ul>
				<li>
					<router-link :to="item.link" @click="navDisplay(index)" active-class="nav-enter-active" class="left-navName" v-for="(item, index) in navNameArr" :key="index">
						{{item.name}}
						<span class="navCount">{{contuributionArr.length}}</span>
					</router-link>
				</li>
			</ul>
		</section>
		
		<article id="conturibution-right">
			<router-view></router-view>
		</article>
	</div>
</template>

<script>
	import {requestIcon} from '../../utils/Request.js'
	export default {
		name:'ContentContutibution',
		data() {
			return {
				navNameArr:[
					{
						name:'视频',
						link:'/content/conturibution/video'
					},
					{
						name:'音频',
						count: 0,
						link:'/content/conturibution/media'
					},
					{
						name:'专栏',
						count:0,
						link:'/content/conturibution/professional'
					},
					{
						name:'相薄',
						link:'/content/conturibution/photo'
					}
				],
				videoShow: true,
				mediaShow: false,
				ProShow: false,
				PhotoShow :false,
				contuributionArr:''
			}
		},
		created() {
			requestIcon('https://www.lcxin666.com', su=>{this.contuributionArr = su}, fa => {console.log(fa)})
		},
	}
</script>

<style scoped="scoped">
	@import url("../../css/Conturibution.css");
</style>

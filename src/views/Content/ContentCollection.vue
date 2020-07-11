<template>
	<div id="Collection">
		<!-- 收藏导航栏模块 -->
		<section id="conturibution-left" class="collection-left">
			<a class="channel-show" @click="showNav()">
				<div>
					<h4>TA的创建</h4>
					<span class="chanicon chanicon-arrow" :class="{before:isbefore}"></span>
				</div>
			</a>
			<ul v-show="showCollectionNav">
				<li>
					<router-link :to="item.link" @click="navDisplay(index)" active-class="collection-enter-active" class="left-navName left-CollectionName" v-for="(item, index) in navNameArr" :key="index">
						<span class="iconfont icon-bodan"></span>
						<span class="CollectionName">{{item.name}}</span>
						<span class="navCount">{{item.count}}</span>
					</router-link>
				</li>
			</ul>
		</section>
		<article id="Collection-right">
			<router-view></router-view>
			<router-view name="Default"></router-view>
			<router-view name="School"></router-view>
			<router-view name="Scenery"></router-view>
		</article>
	</div>
</template>

<script>
	export default {
		name:'ContentCollection',
		data() {
			return {
				navNameArr:[
					{
						name:'默认收藏夹',
						link:'/content/collection/default',
						count:2
					},
					{
						name:'校园',
						count: 5,
						link:'/content/collection/school'
					},
					{
						name:'茂名风光',
						count:4,
						link:'/content/collection/scenery'
					}
				],
				showCollectionNav: true,
				isbefore:false
			}
		},
		methods: {
			showNav() {
				this.showCollectionNav = !this.showCollectionNav
				this.isbefore = !this.isbefore
			}
		},
	}
</script>

<style>
	@import url("../../css/Collection.css");
</style>

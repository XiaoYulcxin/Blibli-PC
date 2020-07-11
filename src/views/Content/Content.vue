<template>
	<div id="content">
		<Personal></Personal>
		<PerNav></PerNav>
		<div id="c-sign">
			<router-view></router-view>
		</div>
	</div>
</template>

<script>
	import Personal from '@/views/Personal.vue';
	import PerNav from '@/views/PerNav.vue';
	export default {
		name: 'Content',
		components: {
			Personal,
			PerNav
		}
	}
</script>

<style>
	@import url("../../css/init.css");

	#content {
		width: 100%;
	}

	#c-sign{
		width: 100%;
	}
	
</style>

<template>
	<div class="Personal">
		<div class="p-inner">
			<div class="p-gradent"></div>
			<div id="g-user">
				<section class="p-info">
					<div class="p-image">
						<img src="https://i0.hdslb.com/bfs/face/4c4850ff0fbf8cc10db6f30f335446fcd5f24c54.jpg_64x64.jpg" alt="">
						<span title="机构认证" class="user-auth"></span>
					</div>
					<div class="p-basic">
						<section>
							<h3 id="name">{{name}}</h3>
							<a href="" target="_blank" class="p-level m-level" :lvl="level"></a>
						</section>
						<div class="p-sign">
							<p :title="sign">{{sign}}</p>
						</div>
					</div>
				</section>
				<section class="p-option">
					<button class="p-option-follow" id="follow" v-show="nufollow"  @click="perfollow()">关注</button>
					<button class="p-option-followed" id="followed" v-show="followed"  @click="perfollowed()">已关注</button>
					<button class="p-option-send">发信息</button>
					<div id="p-option-after">
						<a title="更多操作" class="iconfont icon-ic_more" @mouseenter="showBox()" @mouseleave="hiddenBox()"></a>
						<transition name="after">
							<div class="p-option-after-hidden" v-if="afterShow" @mouseenter="showBox()" @mouseleave="hiddenBox()">
								<ul class="hidden-ul-item">
									<li v-for="(item, index) in afterArr" :key="index">{{item}}</li>
								</ul>
							</div>
						</transition>
					</div>
				</section>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name:'Personal',
		data() {
			return {
				name:'茂职院计算机工程系',
				sign:'茂名职业技术学院计算机工程系官方账号 修徳 强技 求实 创新',
				level:2,
				afterShow: false,
				followed: false,
				nufollow: true,
				afterArr:['加入黑名单','悄悄关注','个人信息举报']
			}
		},
		methods: {
			showBox() {
				this.afterShow = true;
			},
			hiddenBox(){
				this.afterShow = false;
			},
			// 通过关注用户决定显示哪个按钮
			perfollow(){
				if(sessionStorage.getItem('session_phone') != null){
					document.getElementById("follow").innerHTML = "已关注"
					localStorage.setItem('follow', "true");
					this.$router.go(0)
				}else{
					alert('您还未登录，请登录后操作')
				}
				
			},
			perfollowed(){
				document.getElementById("followed").innerHTML = "已取关"
				localStorage.setItem('follow', "false");
				this.$router.go(0)
			}
		},
		created() {
		// 如果用户是登录状态并且已经关注了该用户,就显示已关注按钮,否则,则显示未关注按钮
			if(localStorage.getItem('follow') == "true" && sessionStorage.getItem('session_phone') != null){
				this.followed = true
				this.nufollow = false
			}else if(localStorage.getItem('follow') == "false"){
				this.followed = false
				this.nufollow = true
			}
		}
	}
</script>

<style>
	@import url("../css/init.css");
	/* 页面头部信息样式 */
	@import url("../css/indexContentTop.css");
</style>

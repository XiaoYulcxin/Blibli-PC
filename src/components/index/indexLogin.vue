<template>
	<div id="indexLogin">
		<div class="hright">
			<div class="tou"><a href="#"><img src="../../source/loginLogo.png" class="tou-img" /></a>
				<div class="tou-1">
					<p class="tou-p">{{uLoginUser}}</p>
					<div class="tdiv-1">
						<span class="szuo">等级4</span>
						<span class="syou">8870 / 10800</span>
						<img src="" />
						<div class="tdiv-1-1">
							<p class="p-title">作为LV4，你可以：</p>
							<p>1、发射高级弹幕（彩色、高级、顶部、底部）</p>
							<p>2、参与视频互动（评论、添加、Tag）</p>
							<p>3、投稿成为偶像</p>
							<a href="#">会员等级相关说明&nbsp;&nbsp;&nbsp;&nbsp;></a>
						</div>
					</div>
					<div class="tdiv-2">
						<span><img src="../../source/t2-1.png" />683.0</span>
						<span><img src="../../source/t2-2.png" />0</span>
						<img src="../../source/t2-3.png" />
					</div>
					<div class="tdiv-3">
						<div class="tdiv-3-1">
							<span>关注</span>
							<p>166</p>
						</div>
						<div class="tdiv-3-1">
							<span>粉丝</span>
							<p>0</p>
						</div>
						<div class="tdiv-3-1">
							<span>动态</span>
							<p>0</p>
						</div>
					</div>
					<ul id="tou-ul">
						<li id="tli"><a href="#">个人中心</a></li>
						<li id="tli"><a href="#">投稿管理</a></li>
						<li id="tli"><a href="#">B币钱包</a></li>
						<li id="tli"><a href="#">订单中心</a></li>
						<li id="tli"><a href="#">直播中心</a></li>
						<li id="tli"><a href="#">我的课程</a></li>
					</ul>
					<div class="tdiv-4">
						语言：简体中文
						<img src="" />
						<div class="tdiv-4-1">
							<ul>
								<li class="tdiv-4-shang">简体中文
									<img src="" /></li>
								<li>繁体中文</li>
							</ul>
						</div>
					</div>
					<div class="tdiv-5">
						<div class="tdiv-5-1">
							<a href="" @click="logout()">退出</a>
						</div>
					</div>
				</div>
			</div>
			<ul class="rul">
				<li class="huiyuan"><a href="#">大会员</a></li>
				<li class="xiaoxi"><a href="#">消息</a>
					<div class="xiaoxi-1">
						<ul>
							<li><a href="#">回复我的</a></li>
							<li><a href="#">@我的</a></li>
							<li><a href="#">收到的赞</a></li>
							<li><a href="#">系统通知</a><img src="" /></li>
							<li><a href="#">我的消息</a></li>
						</ul>
					</div>
					<img src="" />
				</li>
				<li class="dongtai"><a href="#">动态</a>
					<div class="dongtai-1">
						<div class="dongtai-1-top">
							<span>视频动态</span>
							<p>直播</p>
							<p>专栏</p>
						</div>
						<div class="dongtai-1-bottom">
							<div class="dongtai-xiaoxi">
								暂时没有新动态了哦！
								<div class="dongtai-tip">历史动态</div>
							</div>
							<div class="dongtai-1-bottom-bottom">
								<div class="dtdiv">
									<div class="imgzuo">
										<img src="" />
										<img src="" class="imgbiao" />
									</div>
									<p class="shangzuo">九九练字高效</p>
									<p class="shangyou">31分钟前</p>
									<p class="xiaxia"></p>
									<img src="" class="imgyou" />
								</div>
							</div>
						</div>
					</div>
				</li>
				<li class="shoucang"><a href="#">收藏</a></li>
				<li class="lishi"><a href="#">历史</a></li>
				<li><a href="#">创作中心</a></li>
			</ul>
			<button class="btn-file">投稿</button>
		</div>
	</div>
</template>

<script>
	export default {
		name:'indexLogin',
		data() {
			return {
				uLoginUser: sessionStorage.getItem('session_phone'),
			}
		},
		methods: {
			logout(){
				sessionStorage.clear();
				this.$router.go(0)
			}
		},
	}
</script>

<style>
	@import url("../../css/init.css");
	@import url("../../css/navheader.css");
</style>

<template>
	<div id="contentdymaic" class="contentdy">
<!-- 		<div id="show" v-if="show">页面正在加载中，请稍后...</div> -->
		<div id="dynamic" class="dynamic" v-for="(item, index) in dyList" :key="index" @mouseleave="hiddInfo(index)">
			<header class="dy-head">
				<a href="" class="head-img" @mouseenter="showInfo(index)" @mouseleave="hiddInfo(index)">
					<img src="https://i0.hdslb.com/bfs/face/4c4850ff0fbf8cc10db6f30f335446fcd5f24c54.jpg@48w_48h.webp" alt="logo" class="img-style" />
					<span class="user-auth user-auth-header"></span>
				</a>
				<article>
					<h4 class="head-title">茂职院计算机工程系</h4>
					<span class="relesse-date">{{ item.dyDate }}</span>
				</article>
				<button class="iconfont icon-ic_more"></button>
			</header>
			
			<transition name="info">
				<div id="hidden-head-info" v-show="hiddenInfo && n==index" @mouseenter="showInfo(index)" @mouseleave="hiddInfo(index)">
					<header class="header-bg"></header>
					<div class="hidden-content">
						<a href="" class="info-logo head-img">
							<img src="https://i0.hdslb.com/bfs/face/4c4850ff0fbf8cc10db6f30f335446fcd5f24c54.jpg_64x64.jpg" alt="">
							<span class="user-auth-info user-auth"></span>
						</a>
						<section id="info">
							<h4 id="name" class="info-name">茂职院计算机工程系</h4>
							<a href="" class="p-level p-level-info m-level-info" lvl="2"></a>
							<div class="info-collection">
								<strong>关注：6</strong>
								<strong>粉丝：255</strong>
							</div>
							<span class="info-sign">茂名职业技术学院计算机工程系官方账号 修徳 强技 求实 创新</span>
						</section>
						<footer id="btn-two">
							<button class="btn-collection" id="btn-collection" v-show="collectionBtn" @click="newCollection()">+关注</button>
							<button class="btn-user-collection" id="btn-user-collection" v-show="userCollection" @mouseenter="showTitle()" @mouseleave="hiddTitle()" @click="canelCollection()">已关注</button>
							<button class="btn-send">发信息</button>
						</footer>
					</div>
				</div>
			</transition>
			
			<div id="dynamic-content">
				<p class="dynamic-para">
					{{item.dyparagraph}}
				</p>
				<img :src="item.dyImage" alt="">
				<footer id="dynamic-footer">
					<span class="dynamic-span" v-for="(iconitem, iconindex) in iconArr" :key="iconindex" @click="showCommand(iconindex, index)">
						<i :class="iconitem.iconClass"></i>{{iconitem.iconName}}
					</span>
				</footer>
				<div id="Command" v-show="isCommand && i == index">
					<div id="InfoImage">
						<img src="../../source/loginLogo.png" alt="">
					</div>
					<div id="RelCommand">
						<textarea name="" id="RelText" cols="50" rows="3" v-model="command" placeholder="发表友善的评论"></textarea>
						<button class="btn-command" @click="releaseCommand()">发表评论</button>
						<span class="span-command">
							<Emoji @click="selectedEmoji" />
							<span class="emoji-text">表情</span>
						</span>
					</div>
				</div>
				<!-- 展示评论内容 -->
				<div id="show-command" v-if="sCommand && i == index">
					<ul>
						<li v-for="(citem, cindex) in commandArr" :key="cindex">
							<span class="command-title">{{citem.username}}:</span>
							<span class="command-content">{{citem.command}}</span>
							<button @click="deleteCommand(cindex)" class="btn-del">删除</button>
						</li>
					</ul>
				</div>
			</div>
		</div>
		
	</div>
</template>

<script>
	import {
		requestDynamic
	} from "../../utils/Request.js";
	import { VueChatEmoji } from 'vue-chat-emoji'
	export default {
		name: "ContentDynamic",
		data() {
			return {
				dyList: "",
				hiddenInfo: false,
				collectionBtn: true,
				userCollection: false,
				sCommand: false,
				command:'',//文字内容
				n:0,
				i:0,
				isCommand: false,
				iconArr:[{
					iconClass:'bp-svg-icon transmit btn-icon',
					iconName:'转发'
				},{
					iconClass:'bp-svg-icon comment btn-icon',
					iconName:'评论'
				},{
					iconClass:'bp-svg-icon zan btn-icon',
					iconName:'点赞'
				}],
				commandArr:[],
				emojiArr:[]
			};
		},
		methods: {
			showInfo(index) {
				this.hiddenInfo = true;
				this.n = index
			},
			hiddInfo(index){
				this.hiddenInfo = false;
				this.n = index
			},
			showTitle(){
				document.getElementById("btn-user-collection").innerHTML = "取消关注";
			},
			hiddTitle(){
				document.getElementById("btn-user-collection").innerHTML = "已关注";
			},
			newCollection(){
				if(sessionStorage.getItem('session_phone') != null){
					localStorage.setItem('follow', "true")
					this.userCollection = true
					this.collectionBtn = false
					this.$router.go(0)
				}else{
					alert("您还未登录")
				}
			},
			canelCollection(){
				localStorage.setItem('follow', "false")
				this.collectionBtn = true;
				this.userCollection = false;
				this.$router.go(0)
			},
			selectedEmoji(args) {
				// arg即为表情
				var text = document.getElementById('RelText')
				this.command = text.value + args.emoji
				console.log(args.key); 
			},
			showCommand(iconindex, index){
				//如果点击了评论
				if(iconindex == 1){
					this.isCommand = !this.isCommand
					this.sCommand = !this.sCommand
					this.i = index
				}else{
					console.log(iconindex);
				}
			},
			releaseCommand(){
				if(sessionStorage.getItem('session_phone') != null && this.command != ''){
					this.commandArr.push({
						username:sessionStorage.getItem('session_phone'),
						command:this.command
					})
					this.command = ""
				}else{
					alert('请登录后评论或者您未输入评论内容')
				}
			},
			deleteCommand(index){
				this.commandArr.pop(index)
				alert('删除成功')
			}
		},
		created() {
			requestDynamic(
				"http://www.hi.com",
				(succ) => {
					this.dyList = succ;
				},
				(err) => {
					console.log(err);
				});
			if(sessionStorage.getItem('session_phone') != null && localStorage.getItem('follow') == "true"){
				this.userCollection = true;
				this.collectionBtn = false;
			}else{
				this.userCollection = false;
				this.collectionBtn = true;
			}
		},
		components: {
			Emoji: VueChatEmoji
		}
	};
</script>

<style>
	@import url("../../css/indexDynamic.css");
</style>

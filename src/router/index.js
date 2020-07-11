import Vue from 'vue'
import VueRouter from 'vue-router'
import content from '../views/Content/Content.vue';
import ContentIndex from '../views/Content/ContentIndex.vue';
import ContentDynamic from '../views/Content/ContentDynamic.vue';
import ContentConturibution from '../views/Content/ContentConturibution.vue';
import ContentChannel from '../views/Content/ContentChannel.vue';
import ContentCollection from '../views/Content/ContentCollection.vue';
import PasswordLogin from "../components/login/PasswordLogin"
import NoteLogin from "../components/login/NoteLogin";
import mIndex from '../moblie/mIndex.vue'
// 布尔变量,判断页面是否为移动端
var isPhone = (/Android|webOS| iPhone | iPad | iPod |BlackBerry|opera mini|opera mobile|appleWebkit.*mobile|mobile/i.test(
	navigator.userAgent))
Vue.use(VueRouter)

let routes = []
// 如果页面为移动端页面,执行移动端路由
if (isPhone) {
	routes = [
		{
			path: '/',
			redirect: '/moblie'
		},
		{
			path: '/moblie',
			name: 'mIndex',
			component: mIndex,
			meta:{
				title:'茂职院计算机工程系的个人空间 - 哔哩哔哩 ( ゜- ゜)つロ 乾杯~ Bilibili'
			},
		},
	]
} else {
	// 否则执行电脑端路由
	routes = [
		{
			path: '/',
			redirect: '/content',
			
		},
		{
			path: '/content',
			name: 'Content',
			components: {
				default: content,
				ContentIndex,
				ContentDynamic,
				ContentConturibution,
				ContentChannel,
				ContentCollection
			},
			children: [{
				path: '',
				redirect: 'index'
			}, {
				path: 'index',
				component: () => import('../views/Content/ContentIndex.vue'),
				children: [{
					path: '/',
					redirect: 'release'
				}, {
					path: 'release',
					component: () => import('../views/ContentIndex/IndexRelease.vue'),
					meta:{
						title:'茂职院计算机工程系的个人空间 - 哔哩哔哩 ( ゜- ゜)つロ 乾杯~ Bilibili'
					},
				}, {
					path: 'play',
					component: () => import('../views/ContentIndex/IndexPlay.vue')
				}, {
					path: 'iCollection',
					component: () => import('../views/ContentIndex/IndexCollection.vue')
				}]
			}, {
				path: 'dynamic',
				component: () => import('../views/Content/ContentDynamic.vue'),
				meta:{
					title:'动态 - 哔哩哔哩 ( ゜- ゜)つロ 乾杯~ Bilibili'
				},
			}, {
				path: 'conturibution',
				component: () => import('../views/Content/ContentConturibution.vue'),
				
				children:[{
					path:'',
					redirect:'video'
				},{
					path:'video',
					name:'Video',
					component:()=>import('../views/ContuributionViews/Video.vue'),
					meta:{
						title:'投稿 - 哔哩哔哩 ( ゜- ゜)つロ 乾杯~ Bilibili'
					},
					children:[{
						path:'',
						redirect:'release'
					},{
						path:'play',
						name:'VideoPlay',
						component:()=>import('../views/ContuributionViews/VideoPlay.vue')
					},{
						path:'release',
						name:'VideoPlay',
						component:()=>import('../views/ContuributionViews/VideoRelease.vue')
					},{
						path:'collection',
						name:'VideoCollection',
						component:()=>import('../views/ContuributionViews/VideoCollection.vue')
					}]
				},{
					path:'media',
					name:'Media',
					component:()=>import('../views/ContuributionViews/Media.vue')
				},{
					path:'professional',
					name:'Professional',
					component:()=>import('../views/ContuributionViews/Professional.vue')
				},{
					path:'photo',
					name:'Photoes',
					component:()=>import('../views/ContuributionViews/Photoes.vue')
				}]
			}, {
				path: 'channel',
				component: () => import('../views/Content/ContentChannel.vue'),
				meta:{
					title:'频道 - 哔哩哔哩 ( ゜- ゜)つロ 乾杯~ Bilibili'
				},
			}, {
				path: 'collection',
				component: () => import('../views/Content/ContentCollection.vue'),
				meta:{
					title:'收藏 - 哔哩哔哩 ( ゜- ゜)つロ 乾杯~ Bilibili'
				},
				children:[
				{
					path:'',
					redirect:'default'
				},
				{
					path:'default',
					name:'Default',
					component:() => import('../views/CollectionViews/Default.vue')
				},{
					path:'school',
					name:'School',
					component:() => import('../views/CollectionViews/School.vue')
				},{
					path:'scenery',
					name:'Scenery',
					component:() => import('../views/CollectionViews/Scenery.vue')
				}]
			}]
		},
		{
			path: '/login',
			name: 'Login',
			component: () => import('../views/Login.vue'),
			meta:{
				title:'登录 - 哔哩哔哩 ( ゜- ゜)つロ 乾杯~ Bilibili'
			},
			children: [
				// 配置默认路由
				{
					path: '/', // 路径
					redirect: '/login/password' // 重定向
				},
				{
					path: 'password',
					component: PasswordLogin
				},
				{
					path: 'note',
					component: NoteLogin
				}
			]
		},
		{
			path: '/register',
			name: 'Register',
			meta:{
				title:'用户注册 - 哔哩哔哩 ( ゜- ゜)つロ 乾杯~ Bilibili'
			},
			component: () => import('../views/Register.vue')
		},
	]
}


const router = new VueRouter({
	// mode: 'history',
	base: process.env.BASE_URL,
	routes
})

export default router

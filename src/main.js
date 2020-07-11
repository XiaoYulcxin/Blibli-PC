import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'vue-awesome/icons'
import Icon from 'vue-awesome/components/Icon'
import 'lib-flexible'
import { VueChatEmoji } from 'vue-chat-emoji';
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI)
Vue.component("Emoji", VueChatEmoji);
require("vue-chat-emoji/dist/vue-chat-emoji.css");
Vue.component('icon', Icon);
Vue.use(VueChatEmoji);

Vue.config.productionTip = false

router.beforeEach((to, from, next)=>{
	if(to.meta.title){
		document.title = to.meta.title
	}
	next()
})

new Vue({
	router,
	render: h => h(App)
}).$mount('#app')

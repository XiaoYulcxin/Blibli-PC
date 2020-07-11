import axios from 'axios'
import Mock from 'mockjs'

// 填充其个人主页中的发布,播放和收藏页面数据
export function requestIcon(url, succ, fail){
	const instance = axios.create({
		method:'get'
	})
	
	instance(url).then(res=>{succ(res.data.list)}).catch(err=>{fail(err)})
	
	Mock.mock(url,{
		'list|8':[{
			"id|+1":1,
			"image":"@image('160X100')",
			"title":"@ctitle()",
			"date":"@date('M-dd')",
			"playTime":"@datetime('mm:ss')",
			"playCount|1000-10000":1655,
			"playGood|10000-99999":1555
		}]
	})
}

export function requestVideo(url, succ, fail){
	const instance = axios.create({
		method:'get'
	})
	
	instance(url).then(res=>{succ(res.data.list)}).catch(err=>{fail(err)})
	
	Mock.mock(url,{
		'list|10':[{
			"id|+1":1,
			"image":"@image('160X100')",
			"title":"@ctitle()",
			"date":"@date('M-dd')",
			"playTime":"@datetime('mm:ss')",
			"playCount|1000-10000":1655,
			"playGood|10000-99999":1555
		}]
	})
}

// 填充动态页
export function requestDynamic(url, succ, fail){
	const instance = axios.create({
		method:'get'
	})
	
	instance(url).then(res=>{succ(res.data.list)}).catch(err=>fail(err))
	
	Mock.mock(url,{
		'list|10-20':[{
			"id|+1":1,
			"dyparagraph":"@cparagraph()",
			"dyImage":"@image(110X100)",
			"dyDate":"@date('M-dd')"
		}]
	})
}
//移动端动态数据填充
export function mDynamic(url, succ, fail){
	const instance = axios.create({
		method:'get'
	})
	
	instance(url).then(res=>{succ(res.data.list)}).catch(err=>fail(err))
	
	Mock.mock(url,{
		'list|10-20':[{
			"id|+1":1,
			"dytitle":"@ctitle(25, 50)",
			"dyImage":"@image(296X196)",
			"dyDate":"@date('MM-dd')",
			"dyTime":"@datetime('mm:ss')",
			"dyWatch":"@natural(50, 100)",
			"dydanmu":"@natural(50, 100)",
			"dyShare":"@natural(50, 100)",
			"dyMess":"@natural(100,1000)",
			"dyGood":"@natural(10000, 999999)"
		}]
	})
}

//移动端视频填充
export function mrVideo(url, succ, fail){
	const instance = axios.create({
		method:'get'
	})
	
	instance(url).then(res=>{succ(res.data.list)}).catch(err=>fail(err))
	
	Mock.mock(url,{
		'list|10-20':[{
			"id|+1":1,
			"vtitle":"@ctitle(5, 8)",
			"vImage":"@image(99X62)",
			"vTime":"@datetime('mm:ss')",
			"vShare":"@natural(50, 100)",
			"vMess":"@natural(100,1000)",
		}]
	})
}
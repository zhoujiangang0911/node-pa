var http = require('http')
var cheerio = require('cheerio')
var url  = "http://list.jd.com/list.html?cat=670,677,678"
function filterChapter(html){
	var $ = cheerio.load(html)
	var pingjia = $('.tab-content-item')
	
	

	
	var goods=[]
	pingjia.each(function(item,i){
		var chapter = $(this)
		var pingjias = chapter.find('a').text()
		var bb = pingjias.replace("加入购物车","")
		var goodss={
			pingjias: bb
		}
		goods.push(goodss)
	})
	
	return goods	
}


http.get(url,function (res) {
	var html = ''
	res.on('data',function(data){
		html += data
	})
	res.on('end',function(){
		//console.log(html)
		var goodsnaems = filterChapter(html)
		console.log(goodsnaems)
	})
}).on('error',function(){
	console.log("获取数据出错")
})
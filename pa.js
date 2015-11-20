var http = require('http')
var cheerio = require('cheerio')
var url  = "http://www.xigangmall.com"
function filterChapter(html){
	var $ = cheerio.load(html)
	var chapters = $('.ind_pro_tit')
	// [
	// 	goodsname:''
	// ]
	var goodsnames =[]
	chapters.each(function(item){
		var chapter = $(this)
		var goodname = chapter.find('a').text()
		
		goodsnames.push({goodname})
	})
	return goodsnames	
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
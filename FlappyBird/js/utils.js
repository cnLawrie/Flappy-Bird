// var logText = function(s){
// 	$('#id-text-log').val($('#id-text-log').val()+'\n'+s)
// }
var log=console.log.bind(console)

var imageFromPath = function (path) {
	var img = new Image()
	img.src = path
	return img
}

var rectIntersect = function (a, b) {
	return !(a.x > (b.x + b.w) ||
		a.y > (b.y + b.h) ||
		b.x > (a.x + a.w) ||
		b.y > (a.y + a.h))
}

const randomBetween=function(start, end) {
	var len=end-start
    var float= Math.random() * len
    return Math.floor(float+start)
}

const delFromEle = function(){
	
}
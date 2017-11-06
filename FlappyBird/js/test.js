var i=0
var st = setInterval(function(){
    if(i == 5) 
        clearInterval(st)
    console.log(i)
    i++
},1000)


// demo

let count2 = 100
setInterval(function(){
    if(count2 === 95){
        clearInterval()
    }else{
        count2--
        console.log(count2)
    }
  
}, 1000)






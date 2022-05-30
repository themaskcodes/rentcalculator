function onCalculate(){

var dd = document.getElementById("income").value

var rentAnswer = dd*.3
var utilitiesAnswer = dd*.2
var foodAnswer = dd*.1
var throwawayAnswer = dd*.3
var savingsAnswer = dd*.1




document.getElementById("rent").innerHTML="$"+rentAnswer
document.getElementById("utilities").innerHTML="$"+utilitiesAnswer
document.getElementById("food").innerHTML="$"+foodAnswer
document.getElementById("throwaway").innerHTML="$"+throwawayAnswer
document.getElementById("savings").innerHTML="$"+savingsAnswer

if(dd<=2000){
document.getElementById("result").innerHTML="Kill yo self fool!!!"
document.getElementById("principal").focus()
}



else if(dd>2000 && dd <4000){

document.getElementById("result").innerHTML="You are getting there. <br>KEEP TRYING!"

}

else if(dd>=4000 && dd <6000){
document.getElementById("result").innerHTML="Now we are getting there!"

}

else if(dd>=6000 && dd <8000){
document.getElementById("result").innerHTML="Now we can LIVE!"

}


else {document.getElementById("result").innerHTML="Nigga, WE BALLIN!"}


}

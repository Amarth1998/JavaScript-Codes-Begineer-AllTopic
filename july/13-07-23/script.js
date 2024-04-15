document.getElementById("player1").addEventListener("click",player1Move)
var ballObj;
var lft=250;
var paly1Int;

function p1ballMove(){
ballObj=document.getElementById("ball");
lft+=5;
ballObj.style.left=lft+"px";
if (lft>=1080) {
    clearInterval(paly1Int);
}
}

function player1Move (){
paly1Int=setInterval(p1ballMove,10);
}
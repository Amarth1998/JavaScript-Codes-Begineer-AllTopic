document.getElementById('player').addEventListener("click",myGame);


let ballObj;
let left=100;
function ballMove()
{
	ballObj=document.getElementById("ball");
	left+=5;
	ballObj.style.left=left+"px";

	if (left>=1200)
	{
		clearInterval(myInt);
	}

}



function myGame()
{
	myInt=setInterval(ballMove,1);
}

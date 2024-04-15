document.getElementById('player').addEventListener("click",myGame);
document.getElementById('player2').addEventListener("click",myGame1);


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



let ballObj1;
function ballMove1()
{
	ballObj1=document.getElementById("ball");
	left-=5;
	ballObj1.style.left=left+"px";

	if (left==100)
	{
		clearInterval(myInt1);
	}

}



function myGame1()
{
    myInt1=setInterval(ballMove1,1);

}

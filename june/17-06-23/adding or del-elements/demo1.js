
document.getElementById('btn1').addEventListener("click",display1)
function display1(){
    let myobj=document.createElement("h1");
    myobj.innerHTML="hi this is sunil's here !!";
    let myele=document.getElementById('head2');
    document.getElementById("box1").insertBefore(myobj,myele);
}

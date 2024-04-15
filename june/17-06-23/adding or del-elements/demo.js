document.getElementById('btn').addEventListener("click",display)
function display(){
    let mypara=document.createElement("p");
    mypara.innerHTML="Enter city : <input type='text'>";
    mypara.style.width="300px";
    document.getElementById("box").appendChild(mypara);
}

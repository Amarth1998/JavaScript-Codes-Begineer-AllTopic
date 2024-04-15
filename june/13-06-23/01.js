document.getElementById("btn").addEventListener("click",mycal)

function mycal(){
    let no1=parseInt( document.getElementById("no1").value);
    let no2=parseInt(document.getElementById("no2").value);
    let ans= no1 + no2
document.getElementById("ans").innerHTML="ADDITION" +" "+ ans
}

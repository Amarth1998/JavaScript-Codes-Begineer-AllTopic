document.getElementById("btn").addEventListener("click",mycal)

function mycal(){
    let height=parseInt( document.getElementById("no1").value);
    let weigth=parseInt(document.getElementById("no2").value);
    let age=parseInt(document.getElementById("no3").value);
    let BMR=88.362 + (13.397 * weigth ) + (4.799 * height) - (5.677 * age) 
    
document.getElementById("ans").innerHTML="BMR is" +" : "+ BMR
}

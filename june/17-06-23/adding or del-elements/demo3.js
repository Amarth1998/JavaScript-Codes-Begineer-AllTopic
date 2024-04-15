document.getElementById('btn').addEventListener("click",display);
function display(){
    let myli=document.createElement("li");
    myli.innerHTML="JAVA";
    document.getElementById("mylist").insertBefore(myli,mylist.children[1]);
}

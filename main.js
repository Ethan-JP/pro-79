var menu=[]
function add() {
    item=document.getElementById("fooditem").value;
    menu.push(item);
    document.getElementById("output").innerHTML=menu;
    document.getElementById("fooditem").value=""
}
const inputbox=document.getElementById("input-box");
const listcontainer=document.getElementById("list-container");
function AddTask(){
    if(inputbox.value===''){
        alert("you must write somthing");
    }
    else{
        let li=document.createElement("li");
        li.innerHTML=inputbox.value;
        listcontainer.appendChild(li);
        let span=document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
    }
    inputbox.value="";
    save();
}
listcontainer.addEventListener("click",function(e){
    if(e.target.tagName==="LI"){
        e.target.classList.add("checked")
    }
    else if(e.target.tagName==="SPAN"){
e.target.parentElement.remove();
    }
},false);
function save(){
    localStorage.setItem("data",listcontainer.innerHTML);
}
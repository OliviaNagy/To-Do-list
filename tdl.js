const inputbox=document.getElementById("input-box");
const listcontainer=document.getElementById("list-container");
function addtask()
{
    if(inputbox.value==='')
    {
        alert("You must write something!")
    }
    else
    {
        let li=document.createElement("li")
li.textContent = inputbox.value;
        listcontainer.appendChild(li);
       let span = document.createElement("span");
span.innerHTML = '<i class="fa-duotone fa-regular fa-circle-xmark"></i>';
li.appendChild(span);
        storage();

        
    }
    inputbox.value=""

}

listcontainer.addEventListener("click",function(e){
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked");
        storage();
    }
    else if(e.target.closest("span")) 
    {
        e.target.closest("li").remove();
        storage();
    }
},false);


function storage(){
    localStorage.setItem("data",listcontainer.innerHTML);
}
function tasks(){
    listcontainer.innerHTML=localStorage.getItem("data");
}
tasks();
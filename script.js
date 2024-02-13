const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
// const btnAdd = document.getElementById("btnAdd");
// const btnAdd = .addEventListener("btnAdd");

function addTask(){
    if(inputBox.value === ''){
        alert("You must write something!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData();



    // const btnAdd= document.getElementById("btnAdd")
    // listContainer.addEventListener('keyup', function (e){
    //         event.preventDefault();
    //         if (event.keyCode === 13){
    //         document.getElementById("btnAdd").click();
    //     }
    // });
}

listContainer.addEventListener("click", function (e){
        if(e.target.tagName === "LI"){
            e.target.classList.toggle("checked");
            saveData();
        }
        else if(e.target.tagName === "SPAN"){
            e.target.parentElement.remove();
            saveData();
        }
}, false);

function  saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();
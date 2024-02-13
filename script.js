const INPUT_BOX = document.getElementById("input-box");
const LIST_CONTAINER = document.getElementById("list-container");
const BTN_ADD = document.querySelector(".btnAdd");

INPUT_BOX.addEventListener('keyup', handleOnKeyUpOfAddInput);
BTN_ADD.addEventListener('click', addTask);

loadSavedData();

function handleOnKeyUpOfAddInput(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        BTN_ADD.click();
    }
}

function addTask(){
    if(INPUT_BOX.value === '') {
        alert("You must write something!");
    }
    else {
        let liElement = document.createElement("li");
        liElement.innerHTML = INPUT_BOX.value;
        LIST_CONTAINER.appendChild(liElement);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        liElement.appendChild(span);
    }
    INPUT_BOX.value = "";
    saveData();
}



LIST_CONTAINER.addEventListener("click", function (e){
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
    localStorage.setItem("data", LIST_CONTAINER.innerHTML);
}

function loadSavedData(){
    LIST_CONTAINER.innerHTML = localStorage.getItem("data");
}

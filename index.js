const inputTask = document.getElementById("taskInput");
const listBox = document.getElementById("tasks");

function addTask() {
    if (inputTask.value === '')
        alert("No Task Assigned!");
    else {
        const li = document.createElement("li");
        li.innerHTML = inputTask.value;
        listBox.appendChild(li);
        const span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputTask.value = "";
    storeData();
}

inputTask.addEventListener('keyup', (e) => {
    if (e.keyCode === 13) {
        addTask();
    }
});

listBox.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("check");
        storeData();
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        storeData();
    }
}, false);

function storeData(){
    localStorage.setItem("data", tasks.innerHTML);
}

function getData(){
    tasks.innerHTML = localStorage.getItem("data");
}

getData();

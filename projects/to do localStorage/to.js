let input = document.querySelector(".input");
let submit = document.querySelector(".add");
let tasksDiv = document.querySelector(".tasks");

// Empty Array TO Store Tasks
let arrayOfTasks = [];

// check if there is tasks in local storage
if (localStorage.getItem("tasks")) {
    arrayOfTasks = JSON.parse(localStorage.getItem("tasks"))
}

// trigger get data from local storage
getDataFromLocalStorage()

// add task
submit.onclick = function () {
    if (input.value != "") {
        addTaskToArray(input.value); // Add Task To Array Of Tasks
        input.value = ""; // Empy Input Filed
    };
};

// click on tasks element
tasksDiv.addEventListener("click", (e) => {
    if (e.target.classList.contains("del")) {
        // remove element from page
        e.target.parentElement.remove();
        // remove task from local storage
        deleteTaskWith(e.target.parentElement.getAttribute("data-id"));
    }
    // task element
    if (e.target.classList.contains("task")) {
        // toggle completed for task
        toggleStatusTaskWith(e.target.getAttribute("data-id"))
        // toggle done class
        e.target.classList.toggle("done")
    }
})

function addTaskToArray(taskText) {
    // Task Data
    const task = {
        id: Date.now(),
        title: taskText,
        completed: false,
    };
    // Push Task To Array Of Tasks
    arrayOfTasks.push(task)
    // Add Tasks To Page
    addElementsToPageFrom(arrayOfTasks);
    // add tasks to local storage
    addDataToLocalStorageFrom(arrayOfTasks);
    // for testing
};

function addElementsToPageFrom(arrayOfTaks) {
    // Empty Tasks Div
    tasksDiv.innerHTML = "";
    removeAll()
    // Looping On Array Of tasks
    arrayOfTasks.forEach(task => {
        let div = document.createElement("div");
        div.className = "task";
        // check if task is done
        if (task.completed) {
            div.className = "task done"
        }
        div.setAttribute("data-id", task.id);
        div.appendChild(document.createTextNode(task.title));
        let span = document.createElement("span");
        span.className = "del"
        span.appendChild(document.createTextNode("Delete"))
        div.appendChild(span)
        // add task div to tasks div
        tasksDiv.appendChild(div)
    });
}

function addDataToLocalStorageFrom(arrayOfTasks) {
    window.localStorage.setItem("tasks", JSON.stringify(arrayOfTasks))
}

function getDataFromLocalStorage() {
    let data = window.localStorage.getItem("tasks");
    if (data) {
        let tasks = JSON.parse(data)
        addElementsToPageFrom(tasks)
    }
}

function deleteTaskWith(taskId) {
    arrayOfTasks = arrayOfTasks.filter((task) => task.id != taskId)
    addDataToLocalStorageFrom(arrayOfTasks)
}

function toggleStatusTaskWith(taskId) {
    for (let i = 0; i < arrayOfTasks.length; i++) {
        if (arrayOfTasks[i].id == taskId) {
            arrayOfTasks[i].completed == false ? (arrayOfTasks[i].completed = true) : (arrayOfTasks[i].completed = false)
        }
    }
    addDataToLocalStorageFrom(arrayOfTasks)
}

function removeAll() {
    let button = document.createElement("button")
    button.onclick = function () {
        localStorage.removeItem("tasks")
        arrayOfTasks = []
        tasksDiv.innerHTML = ""
        removeAll()
    }
    button.innerHTML = "Remove All"
    button.className = "remove"
    tasksDiv.appendChild(button)
}
removeAll()
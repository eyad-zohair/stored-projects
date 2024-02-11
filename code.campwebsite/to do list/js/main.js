import ToDoList from "./toDoList.js";
import ToDoItem from "./toDoItem.js";

const toDoList = new ToDoList();

document.addEventListener("readystatechange", (event) => {
    if (event.target.readyState === "complete") {
        initApp()
    }
})

const initApp = () => {
    // add lisener
    const itemEntryForm = document.getElementById("itemEntryForm");
    itemEntryForm.addEventListener("submit", (event) => {
        event.preventDefault();
        processSubmission();
    })

    const clearItems = document.getElementById("clearItems")
    clearItems.addEventListener("click", (event) => {
        const list = toDoList.getList();
        if (list.length) {
            bobab("Sure ?")
        }
    })
    // procedural
    loadListObject()

    refreshThePage()
}

const loadListObject = () => {
    const storedList = localStorage.getItem("myToDoList")
    if (typeof storedList !== "string") return;
    const parsedList = JSON.parse(storedList)
    parsedList.forEach(itemObj => {
        const newToDoItem = createNewItem(itemObj._id, itemObj._item)
        toDoList.addItemToList(newToDoItem);
    })
}

const refreshThePage = () => {
    clearListDisplay();
    RenderTheList()
    clearItemsIntryField()
    setFocusOnItemEntry()
}

const clearListDisplay = () => {
    const parentElement = document.getElementById("listItems")
    deleteContents(parentElement);
}

const deleteContents = (parerntElement) => {
    let child = parerntElement.lastElementChild
    while (child) {
        parerntElement.removeChild(child)
        child = parerntElement.lastElementChild;
    }
}

const RenderTheList = () => {
    const list = toDoList.getList();
    list.forEach(item => {
        buildListItem(item)
    });
}

const buildListItem = (item) => {
    const div = document.createElement("div")
    div.className = "item";
    const check = document.createElement("input")
    check.type = "checkbox"
    check.id = item.getId()
    check.tapIndex = 0;
    addClickLisenterToCheckbox(check);
    const label = document.createElement("label")
    label.htmlFor = item.getId()
    label.textContent = item.getItem()
    div.appendChild(check);
    div.appendChild(label)
    const container = document.getElementById("listItems")
    container.appendChild(div)
}

const addClickLisenterToCheckbox = (checkbox) => {
    checkbox.addEventListener("click", (event) => {
        toDoList.removeItemFromList(checkbox.id)
        updatePresestantData(toDoList.getList())
        const removedText = getLabelText(checkbox.id)
        updateScreenReaderConfirmation(removedText, "removed from list")
        setTimeout(() => {
            refreshThePage()
        }, 400);
    })
}

const getLabelText = (ckeckboxId) => {
    return document.getElementById(ckeckboxId).nextElementSibling.textContent
}
const updatePresestantData = (listArray) => {
    localStorage.setItem("myToDoList", JSON.stringify(listArray))
}
const clearItemsIntryField = () => {
    document.getElementById("newItem").value = "";
}

const setFocusOnItemEntry = () => {
    document.getElementById("newItem").focus()
}

const processSubmission = () => {
    const newEntryText = getNewEntry();
    if (!newEntryText.length) return;
    const nextItemId = calcNextItemId();
    const toDoItem = createNewItem(nextItemId, newEntryText);
    toDoList.addItemToList(toDoItem)
    updatePresestantData(toDoList.getList())
    updateScreenReaderConfirmation(newEntryText, "added");
    refreshThePage();
}

const getNewEntry = () => {
    return document.getElementById("newItem").value.trim();
}

const calcNextItemId = () => {
    let nextItemId = 1;
    const list = toDoList.getList();
    if (list.length > 0) {
        nextItemId = list[list.length - 1].getId() + 1;
    }
    return nextItemId;
}

const createNewItem = (itemId, itemText) => {
    const toDo = new ToDoItem()
    toDo.setId(itemId);
    toDo.setItem(itemText);
    return toDo;
};

const updateScreenReaderConfirmation = (newEntryText, actionVerb) => {
    document.getElementById("confirmation").textContent = `${newEntryText} ${actionVerb}.`;
}
function bobab(message) {
    let div = document.createElement("div")
    let mess = document.createElement("p")
    let conf = document.createElement("button")
    let no = document.createElement("button")

    mess.innerHTML = message
    conf.innerHTML = "yes"
    no.innerHTML = "no"

    div.className = "bobabDiv"

    conf.onclick = function () {
        toDoList.clearList();
        updatePresestantData(toDoList.getList())
        refreshThePage();
        div.remove()
    }

    no.onclick = function () {
        div.remove()
    }

    div.appendChild(mess)
    div.appendChild(conf)
    div.appendChild(no)
    let sec = document.querySelector(".listTitle")
    sec.appendChild(div)
}
///////////////Exercise 1////////////////

const saveBtn = document.getElementById("saveBtn");
const clearBtn = document.getElementById("clearBtn");
const textArea = document.getElementById("textArea");


const saveLocal = (key, value) => {

    localStorage.setItem(key, value)
    if (localStorage.getItem(key) === null)
        throw new Error("There was an error when saving");

}

const clearLocal = (key) => {

    if (localStorage.getItem(key))
        localStorage.removeItem(key)
    else
        throw new Error("The item does not exist");


}



let request = window.indexedDB.open("DB1");
let db;

request.onupgradeneeded = function(event) {
    db = request.result;
    db.createObjectStore("savedText", { autoIncrement: false });
};

request.onsuccess = function(event) {
    db = request.result;
};

request.onerror = function(event) {
    Error(event.target.errorCode);
};

const saveDb = (key, value) => {
    let tx = db.transaction(key, "readwrite");
    let store = tx.objectStore(key);

    store.put(value, key);
}

const clearDb = (key) => {
    let tx = db.transaction(key, "readwrite");
    let store = tx.objectStore(key);

    store.clear();
}

const saveTextArea = (event) => {
    saveLocal("savedText", textArea.value);
    saveDb("savedText", textArea.value);
}

const clearTextArea = (event) => {
    clearLocal("savedText");
    clearDb("savedText");
}

saveBtn.addEventListener("click", saveTextArea);
clearBtn.addEventListener("click", clearTextArea);

///////////////Exercise 2////////////////

const dropZone = document.getElementById("dropZone");
const dropData = document.getElementById("txtFileData");

const overDropZone = (event) => {
    event.preventDefault();
    console.log("File is in the drop zone");
}

const enterDropZone = (event) => {
    event.preventDefault();
    console.log("File entered in the drop zone");
    dropZone.classList.add("dropZoneReady");
}

const leaveDropZone = (event) => {
    event.preventDefault();
    console.log("File has left the drop zone");
    dropZone.classList.remove("dropZoneReady");
}

const handleFiles = (file) => {

}

const readFile = (file) => {

    let reader = new FileReader();
    reader.readAsText(file);
    reader.onload = function(event) {
        dropData.textContent += event.target.result;
    }
}

const dropTxt = (event) => {
    event.preventDefault();
    dropData.textContent = "";
    let file = event.dataTransfer.files[0];
    readFile(file);
    dropZone.classList.remove("dropZoneReady");
}




dropZone.addEventListener("dragenter", enterDropZone);
dropZone.addEventListener("dragleave", leaveDropZone);
dropZone.addEventListener("dragover", overDropZone)
dropZone.addEventListener("drop", dropTxt);
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
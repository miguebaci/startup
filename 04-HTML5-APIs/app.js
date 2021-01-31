///////////////Exercise 1////////////////

const saveBtn = document.getElementById("saveBtn");
const clearBtn = document.getElementById("clearBtn");
const textArea = document.getElementById("textArea");


const saveLocal = (key, value) => {

    try {
        localStorage.setItem(key, value);
    } catch (e) {
        console.error("There was an error saving your file ", e);
    }

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
    if (file.type == "text/plain") {
        reader.onload = function(event) {
            dropData.textContent += event.target.result;
        }
    } else {
        dropData.textContent += "Not a .txt file";
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

///////////////Exercise 3////////////////

let wsUri = "wss://echo.websocket.org/";
let output;

function init() {
    output = document.getElementById("webSocketOutput");
    testWebSocket();
}

function testWebSocket() {
    let socket = new WebSocket(wsUri);
    socket.onopen = onOpen;
    socket.onclose = onClose;
    socket.onmessage = onMessage;
    socket.onerror = onError;
}

function onOpen(event) {
    writeToScreen("CONNECTED");
    doSend = (message) => {
        writeToScreen("SENT: " + message);
        this.send(message);
    };
    doSend("Testing WebSocket");
}

function onClose(event) {
    writeToScreen("DISCONNECTED");
}

function onMessage(event) {
    writeToScreen('<span style="color: blue;">RESPONSE: ' + event.data + '</span>');
    this.close();
}

function onError(event) {
    writeToScreen('<span style="color: red;">ERROR:</span> ' + event.data);
}

function writeToScreen(message) {
    let pre = document.createElement("p");
    pre.style.wordWrap = "break-word";
    pre.innerHTML = message;
    output.appendChild(pre);
}

window.addEventListener("load", init, false);
const saveBtn = document.getElementById("saveBtn");
const clearBtn = document.getElementById("clearBtn");
const textArea = document.getElementById("info");


const saveLocal = (key, value) => {

    localStorage.setItem(key, value)
    if (localStorage.getItem(key) === null)
        throw new Error("There was an error when saving");

}

const removeLocal = (key) => {

    if (localStorage.getItem(key))
        localStorage.removeItem(key)
    else
        throw new Error("The item does not exist");


}

saveBtn.addEventListener("click", () => {

    document.localStorage.;

});
//--------------excercise 1--------------------//

let section = document.getElementById('hidden');
window.onload = () => section.style.opacity = 1;

//------------excercise 3 (2 before)----------//

let getJoke = async() => {
    let jokeSection = document.getElementById('jokeSection');
    try {
        let response = await fetch('http://api.icndb.com/jokes/random');
        let joke = await response.json();
        const chuckJoke = document.getElementById('chuckJoke');
        chuckJoke.innerHTML = joke.value.joke;
    } catch (error) {
        jokeSection.innerHTML = error;
        jokeSection.style.backgroundColor = "red";
    }
}

document.getElementById("jokeBtn").addEventListener("click", getJoke);

//--------------excercise 4--------------------//

document.getElementById("searchBtn").addEventListener("click", (event) => {
    event.preventDefault();
    let searchWord = document.getElementById("searchWord").value;
    searchRepo(searchWord);
})

const addLi = (item, ul) => {
    let li = document.createElement('li');
    li.appendChild(document.createTextNode(item));
    ul.appendChild(li);
}

const createList = (items) => {
    let ul = document.getElementById("repoList");
    ul.innerHTML = "";
    for (let i = 0; i < items.length; i++) {
        addLi(items[i].name, ul)
    }
}

let searchRepo = (searchWord) => {
    fetch('https://api.github.com/search/repositories?q=' + searchWord)
        .then(response => response.json())
        .then((data) => { createList(data.items) })

}

//--------------excercise 6--------------------//

document.getElementById("tableBtn").addEventListener("click", (event) => {
    event.preventDefault();
    addCells([
        ["Juan", "28", "Argentina"],
        ["John", "25", "Canada"],
        ["Pedro", "23", "España"]
    ]);
})

const addCells = (matrix) => {

    let table = document.getElementById('matrixTable');
    table.innerHTML = "";

    for (let i = 0; i < matrix.length; i++) {

        let tableRow = document.createElement("tr");

        for (let j = 0; j < matrix[i].length; j++) {
            let tableCell = document.createElement("td");
            let data = document.createTextNode(matrix[i][j]);
            tableCell.appendChild(data);
            tableRow.appendChild(tableCell);

        }
        table.appendChild(tableRow);
    }
    document.getElementById('tableSection').appendChild(table)
}
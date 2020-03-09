//--------------excercise 1--------------------//

let section = document.getElementById('hidden');
window.onload = () => section.style.opacity = 1;

//------------excercise 3 (2 before)----------//

let jokeSection = document.getElementById('jokeSection')

document.getElementById("jokeBtn").addEventListener("click", () => getJoke());

let getJoke = () => {
    fetch('http://api.icndb.com/jokes/random')
        .then(response => response.json())
        .then((joke) => chuckJoke.innerHTML = joke.value.joke)
        .catch((error) => {
            jokeSection.innerHTML = error;
            jokeSection.style.backgroundColor = "red"
        })
}

//--------------excercise 4--------------------//

document.getElementById("searchBtn").addEventListener("click", (event) => {
    event.preventDefault();
    let section = document.getElementById("repoSearch");
    let exists = document.getElementById('repoList');
    if (exists)
        section.removeChild(exists);
    let ul = document.createElement('ul');
    ul.classList.add("ul");
    ul.setAttribute("id", "repoList");
    section.appendChild(ul);
    let searchWord = document.getElementById("searchWord").value;
    console.log(searchWord);
    searchRepo(ul, searchWord);
})

const addLi = (item, ul) => {
    let li = document.createElement('li');
    li.appendChild(document.createTextNode(item));
    ul.appendChild(li);
}

let searchRepo = (ul, searchWord) => {
    fetch('https://api.github.com/search/repositories?q=' + searchWord)
        .then(response => response.json())
        .then((data) => {
            let items = data.items;
            for (let i = 0; i < items.length; i++) {
                addLi(items[i].name, ul)
            }

        })

}
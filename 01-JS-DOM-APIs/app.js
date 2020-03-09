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
            jokeSection.style.backgroundCulor = "red"
        })
}

//--------------excercise 4--------------------//

document.getElementById("searchBtn").addEventListener("click", () => {
    let section = document.getElementById("repoSearch");
    let ul = document.createElement('ul');
    section.appendChild(ul)

    searchRepo(ul);
})

const addLi = (item, ul) => {
    let li = document.createElement('li');
    li.appendChild(document.createTextNode(item));
    ul.appendChild(li);
    ul.classList.add("ul")
}

let searchRepo = (ul) => {
    fetch('https://api.github.com/search/repositories?q=JavaScript')
        .then(response => response.json())
        .then((data) => {
            let items = data.items;
            for (let i = 0; i < items.length; i++) {
                addLi(items[i].name, ul)
            }

        })
        .catch((error) => {
            repoSearch.innerHTML = error;
            repoSearch.style.backgroundCulor = "red"
        })

}
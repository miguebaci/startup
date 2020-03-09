//--------------excercise 1--------------------//

let section = document.getElementById('hidden');
console.log(section);
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
class Movie {

    constructor(title, year, duration) {
        this.title = title;
        this.year = year;
        this.duration = duration;
    }

    play() {

    }

    pause() {

    }

    resume() {

    }

}

movie1 = new Movie("Terminator 2: Judgment Day", 1991, "137 minutes");
console.log(movie1.title);
console.log(movie1.year);
console.log(movie1.duration);
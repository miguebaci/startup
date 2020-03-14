class EventEmitter {

    constructor() {
        this.events = {};
    }


    on(eventName, callback) {
        if (!this.events[eventName]) {
            this.events[eventName] = [];
        }

        this.events[eventName].push(callback);
    }

    emit(eventName) {
        const event = this.events[eventName];
        if (event) {
            event.forEach(fn => fn(eventName));
        }
    }


    off(eventName, callback) {
        this.events[eventName] = this.events[eventName].filter(eventFn => callback !== eventFn);
    }
}

class Movie extends EventEmitter {

    constructor(title, year, duration) {
        super();
        this.title = title;
        this.year = year;
        this.duration = duration;
        this.cast = [];
    }

    play() {
        super.emit("play");
    }

    pause() {
        super.emit("pause");
    }

    resume() {
        super.emit("resume");
    }

    addCast(cast) {

        if (Array.isArray(cast)) {
            if (cast instanceof Actor)
                this.cast.concat(cast);

        } else {
            if (cast instanceof Actor)
                this.cast.push(cast);
        }
    }

}

movie1 = new Movie("Terminator 2: Judgment Day", 1991, "137 minutes");
console.log(movie1.title);
console.log(movie1.year);
console.log(movie1.duration);

class Actor {

    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
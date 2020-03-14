import EventEmitter from "./EventEmitter.js";
import Actor from './Actor.js';

export default class Movie extends EventEmitter {

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
            this.cast = this.cast.concat(cast);
        } else {
            if (cast instanceof Actor)
                this.cast.push(cast);
        }
    }

}
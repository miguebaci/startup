import Actor from './Actor.js';
import EventEmitter from './EventEmitter.js';
import Logger from './Logger.js';
import Movie from './Movie.js';

const movie1 = new Movie("Terminator 2: Judgment Day", 1991, "137 minutes");
const arnold = new Actor('Arnold Schwarzenegger', 50);
const actors = [
    new Actor('Paul Winfield', 50),
    new Actor('Michael Biehn', 50),
    new Actor('Linda Hamilton', 50)
];

movie1.addCast(arnold);
movie1.addCast(actors);
console.log(movie1);

let logger = new Logger();
movie1.on("play", logger.log);
movie1.play();
movie1.off("play", logger.log);


let social = {
    share(friendName) {
        return console.log(`${friendName} shared ${this.title}`);
    },
    like(friendName) {
        return console.log(`${friendName} likes ${this.title}`);
    }
};

Object.assign(movie1, social);

movie1.like('Miguel');
movie1.share('Miguel');
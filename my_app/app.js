const joke = require("one-liner-joke");

const myJoke = joke.getRandomJoke();
// console.log(myJoke);

// fake data generator

const casual = require("casual");

let city = casual.city;

console.log(city);
const joke = require("one-liner-joke");

const myJoke = joke.getRandomJoke();
// console.log(myJoke);

// fake data generator

const casual = require("casual");

const people = [];

for(let i = 0; i < 20; i++) {
	people.push(casual.full_name);
}
console.log(people);
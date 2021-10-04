const joke = require("one-liner-joke");

const myJoke = joke.getRandomJoke();
// console.log(myJoke);

// fake data generator

const casual = require("casual");

const people = [];

for(let i = 0; i < 20; i++) {
	people.push(casual.full_name);
}
// console.log(people);

const output = [];

for(let j = 0; j < 10; j++) {
	output.push({
		firstName: casual.first_name,
		lastName: casual.last_name,
		city: casual.city,
		creditCardNumber: casual.card_number(),
		creditCardExpiry: casual.card_exp,
	});
}
console.log(output);
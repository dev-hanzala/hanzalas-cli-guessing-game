#! /usr/bin/env node
// 1. Computer generates a random number.
const computerNumber = Math.floor(Math.random());
console.log(computerNumber);
export {};
// 2. Take users number.
// const userChoice = await inquirer.prompt([
// 	{
// 		name: "userNumber",
// 		type: "number",
// 		message: "Make a guess: "
// 	},
// ]);
// // 3. Compare.
// if (userChoice.userNumber === computerNumber) {
// 	console.log(`Congrats! You guessed correctly.`);
// } else {
// 	console.log(`Incorrect guess.`);
// }

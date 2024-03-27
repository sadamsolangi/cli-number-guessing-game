#!/usr/bin/env node
import inquirer from "inquirer";

const randomNumber = Math.floor(Math.random()*10 + 1);

//wellcome user 
console.log("Wellcome to the number guessing game");

const answers = await inquirer.prompt([{
    name: "userGuessedNumber",
    type: "number",
    message: "Please guess a number between 1-10"
}
]);
if(answers.userGuessedNumber === randomNumber) {
       console.log("Congratulations you guessed a number");
       
}else {
 console.log("oh no you not guessed a number next time better luck!");
 
}
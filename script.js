const choices = ["rock", "paper", "scissors"];

function getComputerChoice() {
    const options = choices[Math.floor(Math.random() * choices.length)];
    console.log(options);
    }

getComputerChoice();


function firstRound(playerSelection, computerSelection) {
    const outcome = "You lose! Paper beats Rock";
    return outcome.toUpperCase();

}

const playerSelection = "paper";
const computerSelection = getComputerChoice();
console.log(firstRound(playerSelection, computerSelection));

function game() {
    const outcome = "You lose! Paper beats Rock";
    return outcome.toUpperCase();


}
console.log(firstRound(5));
    
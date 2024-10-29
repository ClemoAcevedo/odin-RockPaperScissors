function getComputerChoice() {
    let computerChoice;
    const randomNumber = Math.floor(Math.random() * 3) + 1;
    if (randomNumber == 1) {
        computerChoice = "rock";
    }

    else if (randomNumber == 2) {
        computerChoice = "paper";
    }

    else if (randomNumber == 3) {
        computerChoice = "scissors";
    }

    return computerChoice;
};


let humanScore = 0;
let computerScore = 0;
let rounds = 0;

const options = document.querySelector("div");
const humanScoreDiv = document.querySelector("#humanScore");
const computerScoreDiv = document.querySelector("#computerScore");
const roundsCounter = document.querySelector("#roundsCounter");
const resultMessage = document.querySelector("#resultMessage")

options.addEventListener('click', (event) => {
    rounds++
    roundsCounter.innerText = `Rounds played: ${rounds}`;
    let target = event.target;
    let humanChoice;
    let computerChoice = getComputerChoice();
    switch (target.id) {
        case 'rock':
            humanChoice = "rock";
            break
        case 'paper':
            humanChoice = "paper";
            break
        case 'scissors':
            humanChoice = "scissors"
            break
    }
    if (humanChoice == "rock") {

        if (computerChoice == "rock") {
            resultMessage.innerText = "It's a tie, you both chose rock!";
        }

        else if (computerChoice == "paper") {
            resultMessage.innerText = "You lose! paper beats rock";
            computerScore++;
            computerScoreDiv.innerText = `Computer score so far: ${computerScore}`
        }

        else if (computerChoice == "scissors") {
            resultMessage.innerText = "You win! rock beats scissors";
            humanScore++;
            humanScoreDiv.innerText = `Human score so far: ${humanScore}`
        }
    }

    else if (humanChoice == "paper") {

        if (computerChoice == "rock") {
            resultMessage.innerText = "You win! paper beats rock";
            humanScore++;
            humanScoreDiv.innerText = `Human score so far: ${humanScore}`
        }

        else if (computerChoice == "paper") {
            resultMessage.innerText = "It's a tie, you both chose paper!";
        }

        else if (computerChoice == "scissors") {
            resultMessage.innerText = "You lose! scissors beats paper";
            computerScore++;
            computerScoreDiv.innerText = `Computer score so far: ${computerScore}`
        }
    }

    else if (humanChoice == "scissors") {

        if (computerChoice == "rock") {
            resultMessage.innerText = "You lose! rock beats scissors";
            computerScore++;
            computerScoreDiv.innerText = `Computer score so far: ${computerScore}`
        }

        else if (computerChoice == "paper") {
            resultMessage.innerText = "You win! scissors beats paper";
            humanScore++;
            humanScoreDiv.innerText = `Human score so far: ${humanScore}`
        }

        else if (computerChoice == "scissors") {
            resultMessage.innerText = "It's a tie, you both chose scissors!";
        }
    }

    if (rounds == 5) {
        if (humanScore > computerScore) {
            resultMessage.innerText = "Congratulations! You won the game!";
        }

        else if (humanScore < computerScore) {
            resultMessage.innerText = "You lost the game!";
        }

        else if (humanScore == computerScore) {
            resultMessage.innerText = "It's a tie!";
        }
    }
})

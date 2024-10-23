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

function getHumanChoice() {
    let humanChoice = prompt("Choose between rock, paper and scissors");
    return humanChoice;
};

let humanScore = 0;
let computerScore = 0;

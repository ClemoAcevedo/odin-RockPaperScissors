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
    humanChoice = humanChoice.toLowerCase();
    return humanChoice;
};

function playGame() {

    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {

        if (humanChoice == "rock") {

            if (computerChoice == "rock") {
                console.log("It's a tie, you both chose rock!");
            }

            else if (computerChoice == "paper") {
                console.log("You lose! paper beats rock");
                computerScore++;
            }

            else if (computerChoice == "scissors") {
                console.log("You win! rock beats scissors");
                humanScore++;
            }
        }

        else if (humanChoice == "paper") {

            if (computerChoice == "rock") {
                console.log("You win! paper beats rock");
                humanScore++;
            }

            else if (computerChoice == "paper") {
                console.log("It's a tie, you both chose paper!");
            }

            else if (computerChoice == "scissors") {
                console.log("You lose! scissors beats paper");
                computerScore++;
            }
        }

        else if (humanChoice == "scissors") {

            if (computerChoice == "rock") {
                console.log("You lose! rock beats scissors");
                computerScore++;
            }

            else if (computerChoice == "paper") {
                console.log("You win! scissors beats paper");
                humanScore++;
            }

            else if (computerChoice == "scissors") {
                console.log("It's a tie, you both chose scissors!");
            }
        }
    }

    for (let i = 0; i < 5; i++) {
        let humanSelection = getHumanChoice();
        let computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
        console.log("Your score so far: " + humanScore);
        console.log("Computer score so far: " + computerScore);
    }

    if (humanScore > computerScore) {
        console.log("Congratulations! You won the game!");
    }

    else if (humanScore < computerScore) {
        console.log("You lost the game!");
    }

    else if (humanScore == computerScore) {
        console.log("It's a tie!");
    }
}

playGame();
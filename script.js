let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const computerChoice = Math.floor(Math.random() * 3) + 1;

    switch (computerChoice) {
        case 1:
            return "rock";
        case 2:
            return "paper";
        case 3:
            return "scissors";
    }
}

function getHumanChoice() {
    let humanChoice = prompt("Enter your choice: ");
    return humanChoice;
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice.toLowerCase() === "rock") {
        if (computerChoice.toLowerCase() === "rock") {
            return "You draw! Both chose Rock";
        } else if (computerChoice.toLowerCase() === "paper") {
            computerScore++;
            return "You lose! Paper beats Rock";
        } else if (computerChoice.toLowerCase() === "scissors") {
            humanScore++;
            return "You win! Rock beats Scissors";
        }
    } else if (humanChoice.toLowerCase() === "paper") {
        if (computerChoice.toLowerCase() === "rock") {
            humanScore++;
            return "You win! Paper beats Rock";
        } else if (computerChoice.toLowerCase() === "paper") {
            return "You draw! Both chose Paper";
        } else if (computerChoice.toLowerCase() === "scissors") {
            computerScore++;
            return "You lose! Scissors beats Paper";
        }
    } else if (humanChoice.toLowerCase() === "scissors") {
        if (computerChoice.toLowerCase() === "rock") {
            computerScore++;
            return "You lose! Rock beats Scissors";
        } else if (computerChoice.toLowerCase() === "paper") {
            humanScore++;
            return "You win! Scissors beats Paper";
        } else if (computerChoice.toLowerCase() === "scissors") {
            return "You draw! Both chose Scissors";
        }
    }
}

function playGame() {
    for (let i = 0; i < 5; i++) {
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();
    
        console.log(playRound(humanChoice, computerChoice));
    }
    if (humanScore > computerScore) {
        console.log("You win!");
    } else if (humanScore < computerScore) {
        console.log("You lose!");
    }
}

playGame();
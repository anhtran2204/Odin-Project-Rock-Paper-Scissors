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

const resultDisplay = document.querySelector("body");
const resultContainer = document.createElement("div");
resultContainer.classList.add("result-container");
const humanChoices = document.querySelectorAll(".rps-button");
const resetButton = document.createElement("button");
resetButton.textContent = "Reset";
humanChoices.forEach((button) => {
    button.addEventListener("click", () => {
        console.log(playRound(button.textContent, getComputerChoice()));
        console.log("Human Score: " + humanScore);
        console.log("Computer Score: " + computerScore);
        if (humanScore >= 5) {
            resultContainer.textContent = "You won the game!";
            resultDisplay.appendChild(resultContainer);
            resultDisplay.appendChild(resetButton);
            resetButton.addEventListener("click", () => {
                humanScore = 0;
                computerScore = 0;
                resultContainer.textContent = "";
                resultDisplay.removeChild(resetButton);
            }) 
        } else if (computerScore >= 5) {
            resultContainer.textContent = "You lost the game!";
            resultDisplay.appendChild(resultContainer);
            resultDisplay.appendChild(resultContainer);
            resultDisplay.appendChild(resetButton);
            resetButton.addEventListener("click", () => {
                humanScore = 0;
                computerScore = 0;
                resultContainer.textContent = "";
                resultDisplay.removeChild(resetButton);
            }) 
        }
        // alert(button.id);
    })
});


console.log("Hello World")

function getComputerChoice() {
    return Math.floor(Math.random() * 3) + 1;
}

console.log(getComputerChoice());

function getHumanChoice() {
    let humanChoice = prompt("Enter your choice: ");
    return humanChoice;
}

console.log(getHumanChoice());
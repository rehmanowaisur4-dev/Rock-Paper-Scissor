let playerScore = 0;
let computerScore = 0;

function playGame(playerChoice) {

    let choices = ["Rock", "Paper", "Scissors"];

    let computerChoice =
        choices[Math.floor(Math.random() * choices.length)];

    let result;

    if (playerChoice === computerChoice) {

        result = "Draw!🤝";

    } 
    else if (
        (playerChoice === "Rock" && computerChoice === "Scissors") ||
        (playerChoice === "Paper" && computerChoice === "Rock") ||
        (playerChoice === "Scissors" && computerChoice === "Paper")
    ) {

        result = "You Win!🎉";
        playerScore++;

    } 
    else {

        result = "Computer Wins!💻";
        computerScore++;

    }

    document.getElementById("result").textContent = result;

    document.getElementById("choices").textContent =
        "You: " + playerChoice + " | Computer: " + computerChoice;

    document.getElementById("PlayerScore").textContent = playerScore;

    document.getElementById("ComputerScore").textContent = computerScore;
}


// RESET BUTTON

document.getElementById("resetbtn").addEventListener("click", function () {

    playerScore = 0;
    computerScore = 0;

    document.getElementById("PlayerScore").textContent = 0;
    document.getElementById("ComputerScore").textContent = 0;

    document.getElementById("result").textContent = "Choose your move!";

    document.getElementById("choices").textContent = "";

});
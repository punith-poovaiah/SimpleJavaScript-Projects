// Choices
const choices = ["rock", "paper", "scissors"];

// Select elements
const userChoiceEl = document.getElementById("userChoice");
const computerChoiceEl = document.getElementById("computerChoice");
const winnerEl = document.getElementById("winner");

// Add event listeners to buttons
document.getElementById("rock").addEventListener("click", () => playGame("rock"));
document.getElementById("paper").addEventListener("click", () => playGame("paper"));
document.getElementById("scissors").addEventListener("click", () => playGame("scissors"));

// Game logic
function playGame(userChoice) {
  // Generate computer's choice
  const computerChoice = choices[Math.floor(Math.random() * choices.length)];

  // Determine the winner
  let winner;
  if (userChoice === computerChoice) {
    winner = "It's a tie!";
  } else if (
    (userChoice === "rock" && computerChoice === "scissors") ||
    (userChoice === "paper" && computerChoice === "rock") ||
    (userChoice === "scissors" && computerChoice === "paper")
  ) {
    winner = "You win!";
  } else {
    winner = "Computer wins!";
  }

  // Update the DOM
  userChoiceEl.textContent = `Your Choice: ${capitalize(userChoice)}`;
  computerChoiceEl.textContent = `Computer's Choice: ${capitalize(computerChoice)}`;
  winnerEl.textContent = `Winner: ${winner}`;
}

// Helper function to capitalize the first letter
function capitalize(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

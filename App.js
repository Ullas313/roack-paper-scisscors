// Initialize user and computer scores
let userScore = 0;
let compScore = 0;

// Select DOM elements
const choices = document.querySelectorAll(".choice");
const message = document.querySelector("#msg");
const resetButton = document.querySelector("#reset-btn");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

// Function to generate computer's choice
const generateComputerChoice = () => {
  const options = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * 3);
  return options[randomIndex];
};

// Function to handle a draw situation
const drawGame = () => {
  message.innerText = "Draw :|";
  message.style.backgroundColor = "#706F6F";
};

// Function to reset the game scores and message
const resetGame = () => {
  userScore = 0;
  compScore = 0;
  userScorePara.innerText = userScore;
  compScorePara.innerText = compScore;
  message.innerText = "Start a New Game.";
  message.style.backgroundColor = "#706F6F";
};

// Add event listener to reset button to trigger resetGame function
resetButton.addEventListener("click", resetGame);

// Function to display the winner of the round
const showWinner = (userWin, userChoice, compChoice) => {
  if (userWin) {
    userScore++;
    userScorePara.innerText = userScore;
    message.innerText = `You Win :) Your ${userChoice} beats ${compChoice}`;
    message.style.backgroundColor = "green";
  } else {
    compScore++;
    compScorePara.innerText = compScore;
    message.innerText = `You lose :( ${compChoice} beats Your ${userChoice}`;
    message.style.backgroundColor = "red";
  }
};

// Function to play the game, comparing user and computer choices
const playGame = (userChoice) => {
  // Generate computer choice
  const compChoice = generateComputerChoice();

  // Determine the result of the game
  if (userChoice === compChoice) {
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      userWin = compChoice === "scissors" ? false : true;
    } else {
      userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin, userChoice, compChoice);
  }
};

// Add event listeners to each choice for user interaction
choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});

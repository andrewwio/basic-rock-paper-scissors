// FEATURES TO COMPLETE:
// Timer 


// COUNTDOWN TIMER ANIMATION
var i = 0;
var countdownSlides = [];
var time = 500;

countdownSlides[0] = "Rock...";
countdownSlides[1] = "Paper...";
countdownSlides[2] = "Scissors...";
countdownSlides[3] = "SHOOT!";
countdownSlides[4] = "playerSelection VS computerSelection";
countdownSlides[5] = "playerSelection VS computerSelection";
countdownSlides[6] = "you WIN || you lose...";
countdownSlides[7] = "you WIN || you lose...";

function countdown(){
	document.querySelector(".countdown").innerHTML = countdownSlides[i];
	if (i >= 7) {
    return;
  } 
  i++;
  setTimeout("countdown()", time);
}



document.querySelector(".start-screen__btn").addEventListener("click", () => {
  displayGamePlayContainer();
  countdown();
});

function displayGamePlayContainer() {
document.querySelector(".gameplay__container").style.display = 'block';
document.querySelector(".reset").style.display = 'block';
document.querySelector(".start-screen__container").style.display = 'none';
}

function computerPlay() {
  const randomChoice = Math.floor(Math.random() * 1000);
  if (randomChoice % 3 === 0) {
          return 'Rock';
  }
  else if (randomChoice % 3 === 1) {
          return 'Paper';
  } 
  else if (randomChoice % 3 === 2) {
    return 'Scissors';
  }
  else {
    console.log("Error in computerPlay function");
    let errorMessage = "Error in computerPlay function";
    error(errorMessage);
  }
}

function updateScore() {
  document.querySelector(".player-score").innerHTML = `Player Score - ${playerScore}`;
  document.querySelector(".computer-score").innerHTML = `Computer Score - ${computerScore}`;
}



let playerScore = 0;
let computerScore = 0;
let roundResult = "";
let playerSelection = "";
let computerSelection = "";

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    roundResult = "Tie!";
    document.querySelector(".player-selection-display").innerHTML = `${playerSelection}`;
    document.querySelector(".computer-selection-display").innerHTML = `${computerSelection}`;
  }
  else if (
    (playerSelection === 'Rock' && computerSelection === 'Scissors') ||
    (playerSelection === 'Paper' && computerSelection === 'Rock') ||
    (playerSelection === 'Scissors' && computerSelection === 'Paper')
  ) {
    playerScore++;
    roundResult = "You WIN!";
    document.querySelector(".player-selection-display").innerHTML = `${playerSelection}`;
    document.querySelector(".computer-selection-display").innerHTML = `${computerSelection}`;
  }
  else if (
    (computerSelection === 'Rock' && playerSelection === 'Scissors') ||
    (computerSelection === 'Paper' && playerSelection === 'Rock') ||
    (computerSelection === 'Scissors' && playerSelection === 'Paper')
  ) {
    computerScore++;
    roundResult = "You lose...";
    document.querySelector(".player-selection-display").innerHTML = `${playerSelection}`;
    document.querySelector(".computer-selection-display").innerHTML = `${computerSelection}`;
  } else {
    console.log("Error in playRound function");
    let errorMessage = "Error in playRound function";
    error(errorMessage);
  }
}

function error(errorMessage) {
  document.querySelector(".gameplay__container").style.display = "none";
  document.querySelector(".error").style.display = "block";
  document.querySelector(".error").innerHTML = errorMessage;
}

function updateRoundResult() {
  if (roundResult === "Tie!") {
    document.querySelector(".round-result").innerHTML = "Tie!";
  }
  else if (roundResult === "You WIN!") {
    document.querySelector(".round-result").innerHTML = "You WIN!";
  }
  else if (roundResult === "You lose...") {
    document.querySelector(".round-result").innerHTML = "You lose...";
  }
  else {
    console.log("Error in updateRoundResult function");
    let errorMessage = "Error in updateRoundResult function";
    error(errorMessage);
  }
}

// BUTTONS

document.querySelector(".rock").addEventListener("click", () => {
  let playerSelection = 'Rock';
  computerSelection = computerPlay();

  playRound();
  console.log(playRound(playerSelection, computerSelection), playerScore, computerScore);
  updateScore(playerScore, computerScore);
  updateRoundResult();

  endGame();
});

document.querySelector(".paper").addEventListener("click", () => {
  let playerSelection = 'Paper';
  computerSelection = computerPlay();

  playRound();
  console.log(playRound(playerSelection, computerSelection), playerScore, computerScore);
  updateScore(playerScore, computerScore);
  updateRoundResult();

  endGame();
});

document.querySelector(".scissors").addEventListener("click", () => {
  let playerSelection = 'Scissors';
  computerSelection = computerPlay();

  playRound();
  console.log(playRound(playerSelection, computerSelection), playerScore, computerScore);
  updateScore(playerScore, computerScore);
  updateRoundResult();

  endGame();
});



// RESET BUTTON
document.querySelector(".reset").addEventListener("click", () => {
  playerScore = 0;
  computerScore = 0;
  document.querySelector(".game-result__container").style.display = "none";
  document.querySelector(".gameplay__container").style.display = "block";
  document.querySelector(".player-score").innerHTML = "Player Score - 0";
  document.querySelector(".computer-score").innerHTML = "Computer Score - 0";
  document.querySelector(".player-selection-display").innerHTML = "";
  document.querySelector(".computer-selection-display").innerHTML = "";
  document.querySelector(".round-result").innerHTML = "";
  document.querySelector(".reset__btn").innerHTML = "Start Over";
})

function endGame() {
  if (playerScore === 5) {
    document.querySelector(".game-result__container").style.display = "block";
    document.querySelector(".gameplay__container").style.display = "none";
    document.querySelector(".reset__btn").innerHTML = "Let's Play Again!";
    document.querySelector(".game-result__container").innerHTML = "YOU WON ROCK PAPER SCISSORS!!!";
  } else if (computerScore === 5) {
    document.querySelector(".game-result__container").style.display = "block";
    document.querySelector(".gameplay__container").style.display = "none";
    document.querySelector(".reset__btn").innerHTML = "Let's Play Again!";
    document.querySelector(".game-result__container").innerHTML = "You lost the game...";
  }
}
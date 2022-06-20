// FEATURES
// Reset/start button
// Win/lose round display
// Win/lose game display
// countdown animation display

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
  }
}

function updateRoundResult() {
  if (roundResult === "Tie!") {
    document.querySelector(".round-result").innerHTML = "Tie!";
  }
  if (roundResult === "You WIN!") {
    document.querySelector(".round-result").innerHTML = "You WIN!";
  }
  if (roundResult === "You lose...") {
    document.querySelector(".round-result").innerHTML = "You lose...";
  }
}

function updatePlayerSelection() {
  if (playerSelection === 'Rock') {
    document.querySelector(".player-selection-display").innerHTML = "Rock";
  }
  else if (playerSelection === 'Paper') {
    document.querySelector(".player-selection-display").innerHTML = "Paper";
  }
  else if (playerSelection === 'Scissors') {
    document.querySelector(".player-selection-display").innerHTML = "Scissors";
  }
  else if (playerSelection === 'bananahammer') {
    document.querySelector(".player-selection-display").innerHTML = "bananahammer"
  }
  else {
    console.log("Error in updatePlayerSelection")
  }
}

document.querySelector(".rock").addEventListener("click", () => {
  let playerSelection = 'Rock';
  computerSelection = computerPlay();

  playRound();
  console.log(playRound(playerSelection, computerSelection), playerScore, computerScore);
  updateScore(playerScore, computerScore);
  updateRoundResult();
  updatePlayerSelection(playerSelection);
});

document.querySelector(".paper").addEventListener("click", () => {
  let playerSelection = 'Paper';
  computerSelection = computerPlay();

  playRound();

  console.log(playRound(playerSelection, computerSelection), playerScore, computerScore);
  updateScore(playerScore, computerScore);
  updateRoundResult();
});

document.querySelector(".scissors").addEventListener("click", () => {
  let playerSelection = 'Scissors';
  computerSelection = computerPlay();

  playRound();

  console.log(playRound(playerSelection, computerSelection), playerScore, computerScore);
  updateScore(playerScore, computerScore);
  updateRoundResult();
});



// RESET BUTTON
document.querySelector(".reset").addEventListener("click", () => {
  location.reload();
})


let playerPoints = 0;
let computerPoints = 0;
let roundWinner = "";
let playerSelection = "";
let computerSelection = "";

const startScreenBtn = document.querySelector(".start-screen__btn");
const rock = document.querySelector(".rock");
const playerSelectionDisplay = document.querySelector(".player-selection-display");
const computerSelectionDisplay = document.querySelector(".computer-selection-display");
const roundResult = document.querySelector(".round-result");
const playerSelectionContainer = document.querySelector(".player-selection__container");
const countdownContainer = document.querySelector(".countdown__container");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");
const reset = document.querySelector(".reset");
const gameResultContainer = document.querySelector(".game-result__container");
const gameplayContainer = document.querySelector(".gameplay__container");
const playerScore = document.querySelector(".player-score");
const computerScore = document.querySelector(".computer-score");
const resetBtn = document.querySelector(".reset__btn");
const scoreContainer = document.querySelector(".score__container");
const startScreenContainer = document.querySelector(".start-screen__container");
const errorAbbreviation = document.querySelector(".error");

// BUTTONS

startScreenBtn.addEventListener("click", () => {
  displayGamePlayContainer();
  musicPlay();
  buttonSound();
});

rock.addEventListener("click", () => {
  playerSelectionDisplay.innerHTML = "";
  computerSelectionDisplay.innerHTML = "";
  roundResult.innerHTML = "";
  playerSelectionContainer.style.pointerEvents = "none";
  buttonSound();
  displayCountdown();
  setTimeout(function() {
    let playerSelection = 'Rock';
    computerSelection = computerPlay();
    playRound(playerSelection, computerSelection);
  }, 1500);
  setTimeout(function() {
    countdownContainer.style.display = "none";
  }, 2500);
  setTimeout(function() {
    updateScore(playerPoints, computerPoints);
    updateRoundResult();
    endGame();
  }, 2500);
  setTimeout(function() {
    playerSelectionContainer.style.pointerEvents = "auto";
  }, 2500);
});

paper.addEventListener("click", () => {
  playerSelectionDisplay.innerHTML = "";
  computerSelectionDisplay.innerHTML = "";
  roundResult.innerHTML = "";
  playerSelectionContainer.style.pointerEvents = "none";
  buttonSound();
  displayCountdown();
  setTimeout(function() {
    let playerSelection = 'Paper';
    computerSelection = computerPlay();
    playRound(playerSelection, computerSelection);
  }, 1500);
  setTimeout(function() {
    countdownContainer.style.display = "none";
  }, 2500);
  setTimeout(function() {
    updateScore(playerPoints, computerPoints);
    updateRoundResult();
    endGame();
  }, 2500);
  setTimeout(function() {
    playerSelectionContainer.style.pointerEvents = "auto";
  }, 2500);
});

scissors.addEventListener("click", () => {
  playerSelectionDisplay.innerHTML = "";
  computerSelectionDisplay.innerHTML = "";
  roundResult.innerHTML = "";
  playerSelectionContainer.style.pointerEvents = "none";
  buttonSound();
  displayCountdown();
  setTimeout(function() {
    let playerSelection = 'Scissors';
    computerSelection = computerPlay();
    playRound(playerSelection, computerSelection);
  }, 1500);
  setTimeout(function() {
    countdownContainer.style.display = "none";
  }, 2500);
  setTimeout(function() {
    updateScore(playerPoints, computerPoints);
    updateRoundResult();
    endGame();
  }, 2500);
  setTimeout(function() {
    playerSelectionContainer.style.pointerEvents = "auto";
  }, 2500);
});

document.querySelector(".reset").addEventListener("click", () => {
  playerPoints = 0;
  computerPoints = 0;
  gameResultContainer.style.display = "none";
  gameplayContainer.style.display = "block";
  playerScore.innerHTML = "Player - 0";
  computerScore.innerHTML = "Computer - 0";
  playerSelectionDisplay.innerHTML = "";
  computerSelectionDisplay.innerHTML = "";
  roundResult.innerHTML = "";
  resetBtn.innerHTML = "Start Over";
  resetSong();
  buttonSound();
})

// GAMEPLAY FUNCTIONS

function displayGamePlayContainer() {
  scoreContainer.style.display = "block";
  gameplayContainer.style.display = 'block';
  reset.style.display = 'block';
  startScreenContainer.style.display = 'none';
}

function displayCountdown() {
  countdownContainer.style.display = "block";
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

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    roundWinner = "Tie!";
    playerSelectionDisplay.innerHTML = `${playerSelection}`;
    computerSelectionDisplay.innerHTML = `${computerSelection}`;
  }
  else if (
    (playerSelection === 'Rock' && computerSelection === 'Scissors') ||
    (playerSelection === 'Paper' && computerSelection === 'Rock') ||
    (playerSelection === 'Scissors' && computerSelection === 'Paper')
  ) {
    playerPoints++;
    roundWinner = "You WIN!";
    playerSelectionDisplay.innerHTML = `${playerSelection}`;
    computerSelectionDisplay.innerHTML = `${computerSelection}`;
  }
  else if (
    (computerSelection === 'Rock' && playerSelection === 'Scissors') ||
    (computerSelection === 'Paper' && playerSelection === 'Rock') ||
    (computerSelection === 'Scissors' && playerSelection === 'Paper')
  ) {
    computerPoints++;
    roundWinner = "You lose...";
    playerSelectionDisplay.innerHTML = `${playerSelection}`;
    computerSelectionDisplay.innerHTML = `${computerSelection}`;
  } else {
    console.log("Error in playRound function");
    let errorMessage = "Error in playRound function";
    error(errorMessage);
  }
}

function updateScore() {
  playerScore.innerHTML = `Player - ${playerPoints}`;
  computerScore.innerHTML = `Computer - ${computerPoints}`;
}

function updateRoundResult() {
  if (roundWinner === "Tie!") {
    roundResult.innerHTML = "Tie!";
    tieRoundAudio();
  }
  else if (roundWinner === "You WIN!") {
    roundResult.innerHTML = "You WIN!";
    winRoundAudio();
  }
  else if (roundWinner === "You lose...") {
    roundResult.innerHTML = "You lose...";
    loseRoundAudio();
  }
  else {
    console.log("Error in updateRoundResult function");
    let errorMessage = "Error in updateRoundResult function";
    error(errorMessage);
  }
}

function endGame() {
  if (playerPoints >= 5) {
    gameResultContainer.style.display = "block";
    gameplayContainer.style.display = "none";
    resetBtn.innerHTML = "Let's Play Again!";
    gameResultContainer.innerHTML = "YOU WON ROCK PAPER SCISSORS!!!";
    setTimeout(function() {
      winGameAudio();
    }, 750);
  } else if (computerPoints >= 5) {
    gameResultContainer.style.display = "block";
    gameplayContainer.style.display = "none";
    resetBtn.innerHTML = "Let's Play Again!";
    gameResultContainer.innerHTML = "You lost the game...";
    setTimeout(function() {
      loseGameAudio();
    }, 750);
  }
}

// ERROR MESSAGE

function error(errorMessage) {
  gameplayContainer.style.display = "none";
  errorAbbreviation.style.display = "block";
  errorAbbreviation.innerHTML = errorMessage;
}

// AUDIO FUNCTIONS

function musicPlay() {
  themeSong = new Audio('assets/audio/theme-song.mp3');
  themeSong.loop = true;
  themeSong.play();
}

function winGameAudio() {
  victorySong = new Audio('assets/audio/win-game.mp3');
  victorySong.loop = true;
  victorySong.play();
  themeSong.pause();
  themeSong.currentTime = 0;
}

function loseGameAudio() {
  gameOver = new Audio('assets/audio/lose-game.wav');
  gameOver.play();
  themeSong.pause();
  themeSong.currentTime = 0;
}

function resetSong() {
  themeSong.play();
  victorySong.pause();
  victorySong.currentTime = 0;
}

function winRoundAudio() {
  sm641up = new Audio('assets/audio/win-round.wav');
  sm641up.play();
}

function loseRoundAudio() {
  errorSound = new Audio('assets/audio/errorsound.wav');
  errorSound.play();
}

function tieRoundAudio () {
  littleRobots = new Audio('assets/audio/littlerobots.wav');
  littleRobots.play();
}

function buttonSound() {
  andrewEthan = new Audio('assets/audio/andrewethan.wav');
  andrewEthan.play();
}
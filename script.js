let playerScore = 0;
let computerScore = 0;
let roundResult = "";
let playerSelection = "";
let computerSelection = "";

const startScreenBtn = document.querySelector(".start-screen__btn");




// BUTTONS

startScreenBtn.addEventListener("click", () => {
  musicPlay();
  buttonSound();
  displayGamePlayContainer();
});

document.querySelector(".rock").addEventListener("click", () => {
  document.querySelector(".player-selection-display").innerHTML = "";
  document.querySelector(".computer-selection-display").innerHTML = "";
  document.querySelector(".round-result").innerHTML = "";
  document.querySelector(".player-selection__container").style.pointerEvents = "none";
  buttonSound();
  displayCountdown();
  setTimeout(function() {
    let playerSelection = 'Rock';
    computerSelection = computerPlay();
    playRound(playerSelection, computerSelection);
  }, 1500);
  setTimeout(function() {
    document.querySelector(".countdown__container").style.display = "none";
  }, 2500);
  setTimeout(function() {
    updateScore(playerScore, computerScore);
    updateRoundResult();
    endGame();
  }, 2500);
  setTimeout(function() {
    document.querySelector(".player-selection__container").style.pointerEvents = "auto";
  }, 2500);
});

document.querySelector(".paper").addEventListener("click", () => {
  document.querySelector(".player-selection-display").innerHTML = "";
  document.querySelector(".computer-selection-display").innerHTML = "";
  document.querySelector(".round-result").innerHTML = "";
  document.querySelector(".player-selection__container").style.pointerEvents = "none";
  buttonSound();
  displayCountdown();
  setTimeout(function() {
    let playerSelection = 'Paper';
    computerSelection = computerPlay();
    playRound(playerSelection, computerSelection);
  }, 1500);
  setTimeout(function() {
    document.querySelector(".countdown__container").style.display = "none";
  }, 2500);
  setTimeout(function() {
    updateScore(playerScore, computerScore);
    updateRoundResult();
    endGame();
  }, 2500);
  setTimeout(function() {
    document.querySelector(".player-selection__container").style.pointerEvents = "auto";
  }, 2500);
});

document.querySelector(".scissors").addEventListener("click", () => {
  document.querySelector(".player-selection-display").innerHTML = "";
  document.querySelector(".computer-selection-display").innerHTML = "";
  document.querySelector(".round-result").innerHTML = "";
  document.querySelector(".player-selection__container").style.pointerEvents = "none";
  buttonSound();
  displayCountdown();
  setTimeout(function() {
    let playerSelection = 'Scissors';
    computerSelection = computerPlay();
    playRound(playerSelection, computerSelection);
  }, 1500);
  setTimeout(function() {
    document.querySelector(".countdown__container").style.display = "none";
  }, 2500);
  setTimeout(function() {
    updateScore(playerScore, computerScore);
    updateRoundResult();
    endGame();
  }, 2500);
  setTimeout(function() {
    document.querySelector(".player-selection__container").style.pointerEvents = "auto";
  }, 2500);
});

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
  resetSong();
  buttonSound();
})

// GAMEPLAY FUNCTIONS

function displayGamePlayContainer() {
  document.querySelector(".score__container").style.display = "block";
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



function updateRoundResult() {
  if (roundResult === "Tie!") {
    document.querySelector(".round-result").innerHTML = "Tie!";
    tieRoundAudio();
  }
  else if (roundResult === "You WIN!") {
    document.querySelector(".round-result").innerHTML = "You WIN!";
    winRoundAudio();
  }
  else if (roundResult === "You lose...") {
    document.querySelector(".round-result").innerHTML = "You lose...";
    loseRoundAudio();
  }
  else {
    console.log("Error in updateRoundResult function");
    let errorMessage = "Error in updateRoundResult function";
    error(errorMessage);
  }
}

function displayCountdown() {
  document.querySelector(".countdown__container").style.display = "block";
}



function endGame() {
  if (playerScore >= 5) {
    document.querySelector(".game-result__container").style.display = "block";
    document.querySelector(".gameplay__container").style.display = "none";
    document.querySelector(".reset__btn").innerHTML = "Let's Play Again!";
    document.querySelector(".game-result__container").innerHTML = "YOU WON ROCK PAPER SCISSORS!!!";
    setTimeout(function() {
      winGameAudio();
    }, 750);
  } else if (computerScore >= 5) {
    document.querySelector(".game-result__container").style.display = "block";
    document.querySelector(".gameplay__container").style.display = "none";
    document.querySelector(".reset__btn").innerHTML = "Let's Play Again!";
    document.querySelector(".game-result__container").innerHTML = "You lost the game...";
    setTimeout(function() {
      loseGameAudio();
    }, 750);
  }
}


// ERROR MESSAGE
function error(errorMessage) {
  document.querySelector(".gameplay__container").style.display = "none";
  document.querySelector(".error").style.display = "block";
  document.querySelector(".error").innerHTML = errorMessage;
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
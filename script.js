// FEATURES
// Rock button, paper button, scissors button
// Score display 
// Reset/start button
// Win/lose round display
// Win/lose game display
// round animation display
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



// document.querySelector(".start-screen__btn").onclick = () => {
//   displayGamePlayContainer();
//   countdown();
// }

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



let playerScore = 0;
let computerScore = 0;

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "Tie!";
  }
  else if (
    (playerSelection === 'Rock' && computerSelection === 'Scissors') ||
    (playerSelection === 'Paper' && computerSelection === 'Rock') ||
    (playerSelection === 'Scissors' && computerSelection === 'Paper')
  ) {
    playerScore++;
    return "You WIN!";
  }
  else if (
    (computerSelection === 'Rock' && playerSelection === 'Scissors') ||
    (computerSelection === 'Paper' && playerSelection === 'Rock') ||
    (computerSelection === 'Scissors' && playerSelection === 'Paper')
  ) {
    computerScore++;
    return "You lose..."
  }
  updateScore(playerSelection, computerSelection)
}

document.querySelector(".rock").addEventListener("click", () => {
  let playerSelection = 'Rock';
  computerSelection = computerPlay();

  playRound();
  console.log(playRound(playerSelection, computerSelection), playerSelection, computerSelection);
});

document.querySelector(".paper").addEventListener("click", () => {
  let playerSelection = 'Paper';
  computerSelection = computerPlay();

  playRound();
  console.log(playRound(playerSelection, computerSelection), playerSelection, computerSelection);
});

document.querySelector(".scissors").addEventListener("click", () => {
  let playerSelection = 'Scissors';
  computerSelection = computerPlay();

  playRound();
  console.log(playRound(playerSelection, computerSelection), playerSelection, computerSelection);
});
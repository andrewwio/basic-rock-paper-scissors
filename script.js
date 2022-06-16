// const elem = document.getElementById("test");

// elem.onclick = () => {
//   changeColor();
// };
// changeColor = () => {
//   if ((elem.style.color == 'blue')) {
//     elem.style.color = 'black';
//   } else {
//     elem.style.color = 'blue';
//   }
// }

// const shoot = document.getElementById("shoot");

// shoot.onclick = () => {
//   console.log(computerPlay(randomizer(3)));
// }

// randomizer = (max) => {
//   return Math.floor(Math.random() * max);
// }

// computerPlay = () => {
//   if (randomizer(3) === 0) {
//     console.log("Rock");
//   } else if (randomizer(3) === 1) {
//     console.log("Paper");
//   } else if (randomizer(3) === 2) {
//     console.log("Scissors");
//   } else {
//     console.log("Error in computerPlay function");
//   }
// }

// playRound = (playerSelection, computerSelection) => {
//   if (playerSelection == computerSelection) {
//     console.log("Draw! Let's play again!");
//   } else if (playerSelection == "Rock" && computerSelection == "Paper" || playerSelection == "Paper" && computerSelection == "Scissors" || playerSelection == "Scissors" && computerSelection == "Rock") {
//     console.log(`You lose. ${computerSelection} beats ${playerSelection}`);
//   } else if (playerSelection == "Rock" && computerSelection == "Scissors" || playerSelection == "Paper" && computerSelection == "Rock" || playerSelection == "Scissors" && computerSelection == "Paper") {
//     console.log(`You WIN! ${playerSelection} beats ${computerSelection}!`);
//   } else {
//     console.log("Input error in playRound function");
//   }
// }

// shoot.onclick = () => {
//   const playerSelection = "Rock";
//   const computerSelection = computerPlay();
//   console.log(playRound(playerSelection, computerSelection));
// }

// GAME MECHANICS

let playerScore = 0;
let computerScore = 0;
let roundWinner = '';

function playRound(playerSelection, computerSelection) {};

function getRandomChoice() {};

function isGameOver() {};

// UI

// const name = document.getElementById('name');
// const name = document.getElementById('name');
// const name = document.getElementById('name');
// const name = document.getElementById('name');
// const name = document.getElementById('name');

// BUTTONS
// btn.addEventListener('click', () => handleClick('Rock'));
// btn.addEventListener('click', () => handleClick('Rock'));
// btn.addEventListener('click', () => handleClick('Rock'));

function handleClick(playerSelection) {};

function updateChoices(playerSelection, computerSelection) {};

function updateScore() {};

function updateScoreMessage(winner, playerSelection, computerSelection) {};

function openEndGameModal() {};

function closeEndGameModal() {};

function setFinalMessage() {};

function restartGame() {};
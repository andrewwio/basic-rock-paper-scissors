// FEATURES
// Rock button, paper button, scissors button
// Score display 
// Reset/start button
// Win/lose round display
// Win/lose game display
// round animation display
// countdown animation display

document.querySelector(".start-screen__btn").onclick = () => {
  displayGamePlayContainer();
}

function displayGamePlayContainer() {
document.querySelector(".gameplay__container").style.display = 'block';
document.querySelector(".start-screen__container").style.display = 'none';
}




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


const elem = document.getElementById("test");

elem.onclick = () => {
  changeColor();
};
changeColor = () => {
  if ((elem.style.color == 'blue')) {
    elem.style.color = 'black';
  } else {
    elem.style.color = 'blue';
  }
}

const shoot = document.getElementById("shoot");

shoot.onclick = () => {
  computerPlay((randomizer(3)));
}

randomizer = (max) => {
  return Math.floor(Math.random() * max);
}

computerPlay = () => {
  if (randomizer(3) == 0) {
    console.log("Rock");
  } else if (randomizer(3) == 1) {
    console.log("Paper");
  } else if (randomizer(3) == 2) {
    console.log("Scissors");
  } else {
    console.log("Error in computerPlay function");
  }
}

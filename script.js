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





const changeColorBtn = document.querySelector('.change-color');
const color = document.querySelector('.color');
const body = document.querySelector('body');

changeColorBtn.addEventListener('click', () => {
  const anotherColor = getRandomHexColor();
  body.style.backgroundColor = anotherColor;
  color.innerHTML = anotherColor;
})

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


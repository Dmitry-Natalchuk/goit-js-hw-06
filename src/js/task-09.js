function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const сange = document.querySelector('.change-color');
const body = document.querySelector('body');
const spanColor = document.querySelector('.color');

  сange.addEventListener('click', () => {
  body.style.background = getRandomHexColor();
  spanColor.textContent = getRandomHexColor();
});
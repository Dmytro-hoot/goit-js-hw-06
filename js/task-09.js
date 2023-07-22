function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const buttonChange = document.querySelector('.change-color');
const body = document.querySelector('body');
const colorName = document.querySelector('span.color');

buttonChange.addEventListener('click', e => {
	const randomColor = getRandomHexColor();
	body.style.backgroundColor = randomColor;
	colorName.textContent = randomColor;

})
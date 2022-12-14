function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

const colorTitle = document.querySelector('.color');

const changeColorBtn = document.querySelector('.change-color');

changeColorBtn.addEventListener('click', onChangeColorBtnClick);

function onChangeColorBtnClick() {
  colorTitle.textContent = getRandomHexColor();
  document.body.style.backgroundColor = getRandomHexColor();
}
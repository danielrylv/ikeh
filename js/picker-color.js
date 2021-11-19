function chooseColor(color) {
  const chosenColor = getChosenColor();

  if (color == chosenColor) {
    return;
  }

  const chosenColorBox = document.getElementById(`color-${color}`);

  chosenColorBox.classList.add('color-chosen');

  if (chosenColor) {
    const previousColorBox = document.getElementById(`color-${chosenColor}`);
    previousColorBox.classList.remove('color-chosen');
  }

  setChosenColor(color);
}

function getChosenColor() {
  const color = document.getElementById('color-picker').dataset.value;

  return color != null ? color : '';
}

function setChosenColor(color) {
  document.getElementById('color-picker').dataset.value = color;
}

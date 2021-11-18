function chooseColor(colorNumber) {
  const chosenColor = getChosenColor();

  if (colorNumber == chosenColor) {
    return;
  }

  const chosenColorBox = document.getElementById(`color-${colorNumber}`);

  chosenColorBox.classList.add('color-chosen');

  if (chosenColor > 0) {
    const previousColorBox = document.getElementById(`color-${chosenColor}`);
    previousColorBox.classList.remove('color-chosen');
  }

  setChosenColor(colorNumber);
}

function getChosenColor() {
  return document.getElementById('color-picker').dataset.value;
}

function setChosenColor(colorNumber) {
  document.getElementById('color-picker').dataset.value = colorNumber;
}

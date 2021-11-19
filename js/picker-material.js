function chooseMaterial(material) {
  const chosenMaterial = getChosenMaterial();

  if (material == chosenMaterial) {
    return;
  }

  const chosenMaterialCard = document.getElementById(`material-${material}`);

  chosenMaterialCard.classList.add('card-chosen');

  if (chosenMaterial) {
    document.getElementById(`material-${chosenMaterial}`)
      .classList.remove('card-chosen');
  }

  setChosenMaterial(material);
}

function getChosenMaterial() {
  const result = document.getElementById('material-picker').dataset.value;

  return result != null ? result : '';
}

function setChosenMaterial(material) {
  document.getElementById('material-picker').dataset.value = material;
}

const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ingredientsList = document.querySelector('#ingredients')

let ingredRef = ingredients.map((ingredient) => {
  const element = document.createElement("li")
  element.textContent = ingredient
  return element
});
ingredientsList.append(...ingredRef)
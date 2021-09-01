const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ingredientsList = document.querySelector('#ingredients')
const ingredRef = []

ingredients.forEach(ingredients => {
  const element = document.createElement("li")
  element.classList.add('igredients-item')
  element.textContent = ingredients
  ingredRef.push(element);
});
ingredientsList.append(...ingredRef)
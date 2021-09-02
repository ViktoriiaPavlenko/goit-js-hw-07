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

ingredients.map((ingredient) => {
  const element = document.createElement("li")
  element.textContent = ingredient
  ingredRef.push(element);
});
ingredientsList.append(...ingredRef)
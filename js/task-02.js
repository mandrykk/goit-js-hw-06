const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const productList = document.querySelector('#ingredients')
const productElements = ingredients.map((ingredient) => {
  const listElement = document.createElement('li');
  listElement.textContent = ingredient;
  return listElement;
});

productList.append(...productElements);



const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const elementUl = document.querySelector("#ingredients")
// console.log(elementUl)
const elementIngredients = ingredients.map(ingredient => {
  const elementList = document.createElement("li");
  elementList.textContent = ingredient;

  return elementList;
})
// console.log(elIngredients)
elementUl.append(...elementIngredients)
//console.log(elementUl)
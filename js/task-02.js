const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const titleEl0 = document.createElement('li');
titleEl0.classList.add('item');
titleEl0.textContent = ingredients[0];
// console.log(titleEl0);

const titleEl1 = document.createElement('li');
titleEl1.classList.add('item');
titleEl1.textContent = ingredients[1];
// console.log(titleEl1);

const titleEl2 = document.createElement('li');
titleEl2.classList.add('item');
titleEl2.textContent = ingredients[2];
// console.log(titleEl2);

const titleEl3 = document.createElement('li');
titleEl3.classList.add('item');
titleEl3.textContent = ingredients[3];
// console.log(titleEl3);

const titleEl4 = document.createElement('li');
titleEl4.classList.add('item');
titleEl4.textContent = ingredients[4];
// console.log(titleEl4);

const titleEl5 = document.createElement('li');
titleEl5.classList.add('item');
titleEl5.textContent = ingredients[5];
// console.log(titleEl5);

const navEl = document.querySelector('#ingredients');
navEl.append(titleEl0, titleEl1, titleEl2, titleEl3, titleEl4, titleEl5);

console.log(navEl);

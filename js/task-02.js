const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector('#ingredients')
const liArray = []

ingredients.forEach(vegetables => {
	const item = document.createElement('li')
	item.className = 'item'
	item.textContent = vegetables
	liArray.push(item)
})

list.append(...liArray)
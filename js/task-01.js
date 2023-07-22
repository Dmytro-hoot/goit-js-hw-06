const ulList = document.querySelectorAll('.item');
console.log(`Number of categories: ${ulList.length}`);

ulList.forEach(element => {
	console.log(`Category: ${element.firstElementChild.textContent}`);
	console.log(`Category: ${element.lastElementChild.children.length}`)
});
const icons = [
	{
		name: 'cat',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	}
];

let options = ['all'];
icons.forEach(element =>{
	element.color = Math.floor(Math.random()*16777215).toString(16);
	if (!options.includes(element.type)){
		options.push(element.type);
	}
});

const iconsContainer = document.body.querySelector('main');
const filter = document.body.querySelector('#js-select');
filter.style.textTransform = 'capitalize';

options.forEach((element, index) => {
	filter.innerHTML += `<option value=${index}>${element}</option>`
})



const animalList = [];
const vegetableList = [];
const userlList = [];
const all = [];

icons.map(element =>{
	all.push(element);

	switch (element.type){
		case 'animal':
			animalList.push(element);
			break;
		case 'vegetable':
			vegetableList.push(element);
			break;
		case 'user':
			userlList.push(element);
	}
});

const lists = [all, animalList, vegetableList, userlList];

window.addEventListener('load', generatePanlesByFilter);
filter.addEventListener('change', generatePanlesByFilter);





function generatePanlesByFilter(){
	const choice = filter.value;

	lists.forEach((element, index) => {
		if (choice == index){
			iconsContainer.innerHTML = '';

			element.forEach(element => {
				const panel = document.createElement('div');
			
				panel.classList.add('main-element');
				panel.style.display = 'flex';
				panel.style.flexDirection = 'column';
				panel.style.textAlign = 'center';
				panel.style.backgroundColor = 'lightgrey';
				panel.style.borderRadius = '1rem';
				panel.style.textTransform = 'uppercase';
				panel.style.fontSize = '.8rem';
			
				panel.innerHTML = `
				<i class="${element.family} ${element.prefix}${element.name}"></i>
				<span>${element.name}</span>
				`;
			
				const icon = panel.querySelector('i');
				icon.style.color = `#${element.color}`;
				icon.style.fontSize = '2rem';
			
				iconsContainer.appendChild(panel);
				});
			}
		})	
	}

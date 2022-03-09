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

const iconsContainer = document.body.querySelector('main');
const filter = document.body.querySelector('#js-select');

const animalList = icons.filter((element) =>{
	return element.type == 'animal';
});
const vegetableList = icons.filter((element) =>{
	return element.type == 'vegetable';
});
const userlList = icons.filter((element) =>{
	return element.type == 'user';
});

// filter.addEventListener('load', generatePanlesByFilter);
window.addEventListener('load', generatePanlesByFilter);
filter.addEventListener('change', generatePanlesByFilter);



function generatePanlesByFilter(){
	iconsContainer.innerHTML = '';
	const choice = filter.value;

	switch (choice){
		case 'animal':
			animalList.forEach(element => {
				const panel = document.createElement('div');
			
				panel.classList.add('main-element');
				panel.style.display = 'flex';
				panel.style.flexDirection = 'column';
				panel.style.textAlign = 'center';
				panel.style.backgroundColor = 'lightgrey';
				panel.style.borderRadius = '1rem';
			
				panel.innerHTML = `
				<i class="${element.family} ${element.prefix}${element.name}"></i>
				<span>${element.name}</span>
				`;
			
				const icon = panel.querySelector('i');
				icon.style.color = `${element.color}`
			
				iconsContainer.appendChild(panel);
			});
			break;
		case 'user':
			userlList.forEach(element => {
				const panel = document.createElement('div');
			
				panel.classList.add('main-element');
				panel.style.display = 'flex';
				panel.style.flexDirection = 'column';
				panel.style.textAlign = 'center';
				panel.style.backgroundColor = 'lightgrey';
				panel.style.borderRadius = '1rem';
			
				panel.innerHTML = `
				<i class="${element.family} ${element.prefix}${element.name}"></i>
				<span>${element.name}</span>
				`;
			
				const icon = panel.querySelector('i');
				icon.style.color = `${element.color}`
			
				iconsContainer.appendChild(panel);
			});
			break;
		case 'vegetable':
			vegetableList.forEach(element => {
				const panel = document.createElement('div');
			
				panel.classList.add('main-element');
				panel.style.display = 'flex';
				panel.style.flexDirection = 'column';
				panel.style.textAlign = 'center';
				panel.style.backgroundColor = 'lightgrey';
				panel.style.borderRadius = '1rem';
			
				panel.innerHTML = `
				<i class="${element.family} ${element.prefix}${element.name}"></i>
				<span>${element.name}</span>
				`;
			
				const icon = panel.querySelector('i');
				icon.style.color = `${element.color}`
			
				iconsContainer.appendChild(panel);
			});
			break;
		default:
			icons.forEach(element => {
				const panel = document.createElement('div');
			
				panel.classList.add('main-element');
				panel.style.display = 'flex';
				panel.style.flexDirection = 'column';
				panel.style.textAlign = 'center';
				panel.style.backgroundColor = 'lightgrey';
				panel.style.borderRadius = '1rem';
			
				panel.innerHTML = `
				<i class="${element.family} ${element.prefix}${element.name}"></i>
				<span>${element.name}</span>
				`;
			
				const icon = panel.querySelector('i');
				icon.style.color = `${element.color}`
			
				iconsContainer.appendChild(panel);
			});
	}

	// icons.forEach(element => {
	// 	const panel = document.createElement('div');
	
	// 	panel.classList.add('main-element');
	// 	panel.style.display = 'flex';
	// 	panel.style.flexDirection = 'column';
	// 	panel.style.textAlign = 'center';
	// 	panel.style.backgroundColor = 'lightgrey';
	// 	panel.style.borderRadius = '1rem';
	
	// 	panel.innerHTML = `
	// 	<i class="${element.family} ${element.prefix}${element.name}"></i>
	// 	<span>${element.name}</span>
	// 	`;
	
	// 	const icon = panel.querySelector('i');
	// 	icon.style.color = `${element.color}`
	
	// 	iconsContainer.appendChild(panel);
	// });
}
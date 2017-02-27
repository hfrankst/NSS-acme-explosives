"use strict";

//arrays to store the corresponding json data
let categoriesArray = [];
let typesArray = [];
let productsArray = [];

	

//////////////////////////////////////////////////////////////////
////////EVENT LISTENERS THAT CALL THE BUILDER FUNCITONS///////////
//////////////////////////////////////////////////////////////////


//First Event Listener to be set on the dropdown menu
	loadCategories();
let dropdownFire = document.getElementById('fireBtn');
dropdownFire.addEventListener('click', function () {
	let getCloserToFire = categoriesArray.categories;
	console.log("getting closer", getCloserToFire[0].id);
	// console.log("the fireworks button was clicked");
	console.log("categoriesArray.id", categoriesArray.categories.id);
	if(categoriesArray.categories.id === 0){
		//if the id of the category is 0 then only show that category
		cardBuilder(categoriesArray.categories[0]);

	}
});


////////////////////////////////////////////////////////////////////////
///////////////////JSON LOADER FUNCTIONS////////////////////////////////
////////////////////////////////////////////////////////////////////////

function loadCategories() {
	return new Promise((resolve, reject) => {
			//XHR to load category json
			let catLoader = new XMLHttpRequest();
			catLoader.addEventListener("load", (responseText) => {
				console.log("ba boom");
				categoriesArray = JSON.parse(responseText.currentTarget.responseText);//jumping into the json where the objects are rather than the top level of the file
				console.log("categoriesArray", categoriesArray.categories[0].id);
				resolve();	
				// cardBuilder(categoriesArray.categories);
				// Fire(categoriesArray.categories);
				// console.log("categories in the array", categoriesArray.categories);
			});

			catLoader.addEventListener("error", () => {
				reject("Loading the categories has failed.");
			});

			catLoader.open("GET", "json/categories.json");
			catLoader.send();
		});//end of promise
}

function loadTypes() {
	
	return new Promise((resolve, reject) => {
		
		let typeLoader = new XMLHttpRequest();

		typeLoader.addEventListener("load", (responseText) => {
			typesArray = JSON.parse(responseText.currentTarget.responseText);
			// console.log("typesArray", typesArray.types);
			resolve();
			cardBuilder(typesArray.types);
		}); 

		typeLoader.addEventListener("error", () => {
			reject("Loading the types has failed.");
		});

		typeLoader.open("GET", "json/types.json");
		typeLoader.send();
	});
}

function loadProducts() {
	
	return new Promise((resolve, reject) => {

		let productLoader = new XMLHttpRequest();

		productLoader.addEventListener("load", (responseText) => {
			productsArray = JSON.parse(responseText.currentTarget.responseText);
			// console.log("productsArray", productsArray.products);
			resolve();
			cardBuilder(productsArray.products);
		});

		productLoader.addEventListener("error", () => {
			reject("Loading the products has failed.");
		});

		productLoader.open("GET", "json/products.json");
		productLoader.send();
	});
}


//////////////////////////////////////////////////////////////////////
////////////////FUNCTION TO BUILD THE EXPLOSIVE CARDS/////////////////
//////////////////////////////////////////////////////////////////////


function cardBuilder(object) {
	//use string literals combined with ${} selectors to specify the wanted values in the json
	console.log("object from CardBuilder function", object);
	let cardGallery = document.getElementById('gallery');
	for (let i = 0; i < object.length; i++){
		let card = '';
		card += `<div class = "col-sm-6">`;
		card += `<h2>${object[i].name} Explosives</h2>`;
		card += `<span>${object[i].id}</span>`;
		card += `<p>Click me to see relevant types of explosives!</p>`;
		card += `</div>`;
		cardGallery.innerHTML += card;

	}
}





// loadTypes();
// loadProducts();
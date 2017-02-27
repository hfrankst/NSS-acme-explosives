"use strict";

//arrays to store the corresponding json data
let categoriesArray = [];
let typesArray = [];
let productsArray = [];
let cats = [];

	
function loadCategories() {
	return new Promise((resolve, reject) => {
			//XHR to load category json
			let catLoader = new XMLHttpRequest();
			catLoader.addEventListener("load", (responseText) => {
				console.log("ba boom");
				categoriesArray = JSON.parse(responseText.currentTarget.responseText);//jumping into the json where the objects are rather than the top level of the file
				console.log("categoriesArray", categoriesArray.categories);
				resolve();	
				cardBuilder(categoriesArray.categories);
				// console.log("categories in the array", categoriesArray.categories[0]);
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
			console.log("typesArray", typesArray.types);
			resolve();
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
			console.log("productsArray", productsArray.products);
			resolve();
		});

		productLoader.addEventListener("error", () => {
			reject("Loading the products has failed.");
		});

		productLoader.open("GET", "json/products.json");
		productLoader.send();
	});
}

function cardBuilder(object) {
	//use string literals combined with ${} selectors to specify the wanted values in the json
	console.log("object from CardBuilder function", object);
	let cardGallery = document.getElementById('gallery');
	for (let i = 0; i < object.length; i++){
		let card = '';
		card += `<div class = "col-sm-6">`;
		card += `<h2>${'name'}</h2>`;
		card += `</div>`;
		console.log("the card so far", card);
		cardGallery += card;

	}
}


loadCategories();
// loadTypes();
// loadProducts();
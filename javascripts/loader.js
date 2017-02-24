"use strict";


	let privateExplosives = [];

	return new Promise((resolve, reject) => {
			//XHR to load category json
			let loader = new XMLHttpRequest();

			loader.addEventListener("load", (responseText) => {
				privateExplosives = JSON.parse(responseText);//jumping into the json where the objects are rather than the top level of the file
				console.log("ba boom");
				console.log("privateExplosives", privateExplosives);
				resolve();	
			});

			loader.addEventListener("error", () => {
				reject("load failed");
			});

			loader.open("GET", "json/products.json");
			loader.send();
		});//end of promise



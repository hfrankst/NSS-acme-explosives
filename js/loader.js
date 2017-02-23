"use strict";
console.log("ba boom");

var Boom = (function () {
	var privateExplosives = [];

	return {
		loadExplosives: function () {
			//XHR to load category json
			var loader = new XMLHttpRequest();

			loader.addEventListener("load", function () {
				privateExplosives = JSON.parse(this.responseText).categories;//jumping into the json where the objects are rather than the top level of the file
				console.log("privateExplosives", privateExplosives);	
			});

			loader.open("GET", "json/categories.json");
			loader.send();
		}//end of loadExplosives
	};//end of return

})();
Boom.loadExplosives();
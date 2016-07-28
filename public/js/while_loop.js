"use strict";


/*Ice Cream Cone Example*/
var allCones = Math.floor(Math.random() * 50) + 50;
console.log("Starting with " + allCones + " cones");
do {
	var cones = Math.floor(Math.random() * 5) + 1;
	
	if (allCones >= cones){
		allCones = allCones - cones;
		console.log("cones sold " + cones);
	} else {
		console.log ("Cannot sell you " + cones + " I only have " + allCones);
	}

} while (allCones > 0 ); 
console.log("Sold them all");


/*Counting Example*/
var i = 1;
while (i <65536) {
	i = i*2;
	console.log	(i);
}


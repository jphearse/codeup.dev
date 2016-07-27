"use strict";
/* Grade average example*/
var test1 = 70;
var test2 = 80;
var test3 = 95;
var flipACoin = Math.floor(Math.random()* 2)

if ((test1 + test2 + test3)/ 3 >= 80) {
	console.log ("You're awesome!")
} else  {
	console.log("You need to practice more")
}
/*HEB example*/
var ryan = 250;
var cameron = 180;
var george = 320;
var dicount = .35;
var disryan;
var discameron;
var disgeorge;

if (ryan >=200){
	disryan = ryan - (ryan*dicount);
	console.log ("Ryan spent " + ryan + " discount was applied" + " Ryan final price " + disryan);
} else	{
	console.log ("Ryan spent " + ryan + " discount was not applied" + "Ryan final price " + ryan)
}

if (cameron >=200){
	discameron = cameron - (cameron*dicount);
	console.log ("Cameron spent " + cameron + " discount was applied" + " Cameron final price " + discameron);
} else {
	console.log ("Cameron spent " + cameron + " no discount was applied" + " Cameron final price " + cameron);
}

if (george >=200){
	disgeorge = george - (george*dicount);
	console.log ("George spent " + george + " discount was applied" + " George final price " + disgeorge);
} else {
	console.log	("George spent " + george + " discount was not applied" + " George final price " + george);
}

/*Coin flip example*/
var flipACoin = Math.floor(Math.random()* 2);

if (flipACoin == 0){
	console.log ("Buy a car");
} else {
	console.log ("Buy a house");
}
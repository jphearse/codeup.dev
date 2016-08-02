"use strict";


// TODO:
// Create a function called 'sayHello' that takes a parameter 'name'.
// When called, the function should log a message that says hello from the passed in name.
(function sayHello(name) {
var myNameIs = 'Joe'; // TODO: Fill in your name here.

    console.log("Hello " + name);

})();
// TODO: Call the function 'sayHello' passing the variable 'myNameIs' as a parameter.

// Don't modify the following line
// It generates a random number between 1 and 100 and stores it in random


// TODO:
// Create a function called 'isOdd' that takes a number as a parameter.
// The function should use the ternary operator to log a message.
// The log should tell the number passed in and whether it is odd or not.
(function isOdd (x){
var random = Math.floor((Math.random()*100)+1);
	console.log(random);
	var number = (x % 2 == 0) ? "Even" : "Odd";
	console.log(number);

})();

// TODO: Call the function 'isOdd' passing the variable 'random' as a parameter.


// in javascript if no return it returns undefined
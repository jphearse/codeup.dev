"use strict";

var luckyNumber = Math.floor(Math.random()* 6);

switch (luckyNumber) {
	case 0:
	console.log("You have to pay $" + (60));
	break;
	case 1:
	console.log("You have to pay $" + (60-(60*.1)));
	break;
	case 2:
	console.log("You have to pay $" + (60-(60*.25)));
	break;
	case 3:
	console.log("You have to pay $" + (60-(60*.35)));
	break;
	case 4:
	console.log("You have to pay $" + (60-(60*.50)));
	break;
	case 5:
	console.log("You have to pay $" + (0));
	break;

	default:
	console.log("Unknown");
}

var monthNumber = Math.floor((Math.random()* 12) +1)

switch (monthNumber){
	case 1:
	console.log("January");
	break;
	case 2:
	console.log("February");
	break;
	case 3:
	console.log("March");
	break;
	case 4:
	console.log("April");
	break;
	case 5:
	console.log("May");
	break;
	case 6:
	console.log("June");
	break;
	case 7:
	console.log("July");
	break;
	case 8:
	console.log("August");
	break;	
	case 9:
	console.log("September");
	break;
	case 10:
	console.log("October");
	break;
	case 11:
	console.log("November");
	break;
	case 12:
	console.log("December");
	break;

	default:
	console.log("Unknown");
}
"use strict";

        var response = prompt ("What would you like to do? (add, subtract, divide, multiply, square a number, or averaage 3 numbers)");
       
        if (response === "add" || response === "subract" || response === "divide" || response === "multiply"){
        var number1 = prompt ("First number:");
        var number2 = prompt ("Second number:");
        var x = parseInt(number1);
        var y = parseInt(number2);
       }
       if (response === "square"){
       	var number = prompt("Number to square:");
       	var x = parseInt(number);
       }
       if (response === "average 3 numbers"){
       	var number1 = prompt ("First number:");
        var number2 = prompt ("Second number:");
        var number3 = prompt ("Third number:");
        var x = parseInt(number1);
        var y = parseInt(number2);
        var z = parseInt(number3);
       }

        if (response === "add"){
           alert (add (x, y)); 
        }    
        if (response === "subtract"){
        	alert (subtract(x, y));
        }
        if (response === "divide"){
        	alert (divide(x, y));
        }
        if (response === "multiply"){
        	alert (multiply(x, y))
        }

        if (response ==="square"){
        	alert(square(x));
        }
        if (response === "average 3 numbers"){
        	alert(averageOfThree(x,y,z));
        }
        function add (a, b){
        	if (isNaN(a)){
        		return "Input must be a number";
        	} else if( isNaN(b)){
        		return "Input must be a number";
        	}
            var answer = a + b
        	return answer;
        }

        function subtract (a, b){
        	if (isNaN(a)){
        		return "Input must be a number";
        	} else if( isNaN(b)){
        		return "Input must be a number";
        	}
        	return a - b;
        }
        function multiply (a, b){
        	if (isNaN(a)){
        		return "Input must be a number";
        	} else if( isNaN(b)){
        		return "Input must be a number";
        	}
        	return a * b;
        }
        function divide(a, b){
        	if (isNaN(a)){
        		return "Input must be a number";
        	} else if( isNaN(b)){
        		return "Input must be a number";
        	}
        	if (b == 0) {
        		return "cannot divide by 0";
        	}
        	return a / b;
        }
        function square (a){
        	if (isNaN(a)){
        		return "Input must be a number";
        	} 
        	return multiply (a , a);
        }
        function sumTwoSquares (a, b){
        	if (isNaN(a)){
        		return "Input must be a number";
        	} else if( isNaN(b)){
        		return "Input must be a number";
        	}
        	var sum1 = multiply (a , a);
        	var sum2 = multiply (b , b);
        	return add(sum1, sum2);

        }
        function isNumeric(number){
        	return !isNaN(number);
        }

        function averageOfThree (a,b,c){
        	var average = ((a+b+c)/3);
        	return average;
        }
"use strict";
(function() {
//input logic\\

	var numberButtons = document.getElementsByClassName("num");
	var operatorButtons = document.getElementsByClassName("oper");

	var num = function (e){		//if the middle input is empty, if it has operator then puts numbers on right
		if (inputMiddle.value == ""){
        		if (input.value.length < 8){
        		calculator.input.value += this.innerText;
        		}
		} else {
				if(inputMiddle.value == "√" || inputMiddle.value == "^2" || inputMiddle.value == "%"){
					calculator.inputRight.value = '';
					calculator.input.value += this.innerText;
		} 		else{
						if (inputRight.value.length < 8){
						calculator.inputRight.value += this.innerText;
        			}
				
				}
		}
   	}
   	var oper = function (e){
            calculator.inputMiddle.value = this.innerText;
       }

//EventListeners\\

	for (var i = 0; i < numberButtons.length; i++) {		//adds event listener to all buttoms with class num
		var button = numberButtons[i];
		button.addEventListener("click", num);
	}
	for (var i = 0; i < operatorButtons.length; i++){		//adds event listener to buttons iwth class oper
		var operButton = operatorButtons[i];
		operButton.addEventListener("click", oper);
	}

//MATH\\

	var symbolEqual = function (e){
			var left = parseFloat(input.value);
			var right = parseFloat(inputRight.value);
			
			if (inputMiddle.value ==="+"){				//math
				input.value	= (left + right);			//puts new number on left side
			}
			if (inputMiddle.value ==="-"){
				input.value	= left - right;
			}
			if (inputMiddle.value ==="*"){
				input.value	= left * right;
			}
			if (inputMiddle.value ==="/"){
				input.value	= left / right;
			}
			if (inputMiddle.value ==="√"){
				input.value = Math.sqrt(left);
			}
			if (inputMiddle.value ==="^2"){
				input.value	= (left*left);
			}
			if (inputMiddle.value ==="%"){
				input.value	= left/100;
			}
			console.log(parseFloat(input.value));
			inputRight.value = "";
       }
	var opEqual = document.getElementById("opEqual");	
	opEqual.addEventListener("click", symbolEqual);

	var symbolClear = function (e){
			input.value = "";
            inputMiddle.value = "";
			inputRight.value = "";
       }
	var opClear = document.getElementById("opClear");	
	opClear.addEventListener("click", symbolClear);



 })();

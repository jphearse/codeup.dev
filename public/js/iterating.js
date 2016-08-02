(function(){
    "use strict";
    // number in array is index/key
    // TODO: Create an array of 4 people's names using literal array notation, in a variable called 'names'.
    var names = ["Kayla", "Joe", "Lia", "Stephen"];
    // TODO: Create a log statement that will log the number of elements in the names array.
    console.log("There are " + names.length + " elements in the array");
    // TODO: Create log statements that will print each of the names array elements individually.
    for (var i = 0; i < names.length; i += 1){
    	console.log(names[i]);
    }

    names.forEach( function(name, index, array){
    	console.log("Element at index " + index + " is " + name);
    });

    	console.log(names);
    	var namesInReverseOrder = names.reverse();
    	console.log(namesInReverseOrder);
    	

    

})();

(function(){
    "use strict";

    var planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";
    var planetsArray = planetsString.split("|");

    // TODO: Convert planetsString to an array, save it to planetsArray.

    console.log(planetsArray);

    // TODO: Create a string with <br> tags between each planet. console.log() your results.
    //       Why might this be useful?
                var brString = planetsArray.join("<br>");
                console.log(brString);
    // Bonus: Create a second string that would display your planets in an undordered list.
    //        You will need an opening AND closing <ul> tags around the entire string, and <li> tags around each planet.
    //        console.log() your results.
                
                var secondString ="";
                for (var i = 0; i < planetsArray.length; i++){
                    secondString += "<li>"+planetsArray[i]+"</li>"; //creates opening and closing tags around each element     
                }
                console.log("<ul>"+secondString+"</ul>");
                
                //alternative solution
                var string = planetsArray.join("</li><li>"); //</li><li> goes b/w planets
                string = "<ul><li>"+ string + "</li></ul>"; //"<ul><li>" *Planet*</li><li>*Planet* "</li></ul>"
                console.log(string);
            
               
})();

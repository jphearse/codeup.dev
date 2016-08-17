(function() {
    "use strict";
    	const apiKey = "953bf7367de52c4b7ab799a71657453b"
    	var lat = "29.427325";
    	var lon = "-98.491097";

    	//api request
    	function request(){
			$.get("http://api.openweathermap.org/data/2.5/forecast/daily", {
			    APPID: apiKey,
			    lat: lat,
			    lon: lon,
			    cnt: "3",
			    units: "imperial"
			}).done(function(data){
				console.log(data);		//console logs object
				conditions(data)		//calls condition function
			}).fail(function (xhr, err, msg){
				alert("something went wrong");			//put requeset in fucntion, make long and 
			});											//lat variables to replace when fuction is 29.427325, -98.491097
		}
		request();					//calls request function, gets san antonio coords and shows weather
		

		//places content in divs for three days	
		function conditions (weather){
			var conditionSpace = "";
				conditionSpace += "<h2 id='header'><strong>" + weather.city.name + "</strong></h2>" + "<br>";
				conditionSpace += "<div id='wrap'>";
			for(var i = 0; i < 3; i++){
				var icon = weather.list[i].weather[0].icon;
				var dt = weather.list[i].dt * 1000;
				var date = new Date(dt);
				var daysOfWeek = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];

				conditionSpace += "<div id = 'days' class='col-md-4'>";
				conditionSpace += "<strong>"+ daysOfWeek[date.getDay()] +", " + date.getDate() + " " +date.getFullYear() + "</strong><br>";
				conditionSpace += "<img src='http://openweathermap.org/img/w/" + icon +".png'>" + "<br>";
				conditionSpace += "<strong>Min/Max:</strong> " + Math.round(weather.list[i].temp.min) + "&deg / " + Math.round(weather.list[i].temp.max) + "&deg <br>";
				conditionSpace += "<strong>Conditions:</strong> " + weather.list[i].weather[0].main + "<br>";
				conditionSpace += "<strong>Pressure:</strong> " + weather.list[i].pressure + "<br>";
				conditionSpace += "<strong>Humidity:</strong> " + weather.list[i].humidity + "<br>";
				conditionSpace += "</div>";
			}
				conditionSpace += "</div>"
				$("#weatherDiv").append(conditionSpace);

		}
		
        // Set our map options
        var mapOptions = {
            // Set the zoom level
            zoom: 10,

            // This sets the center of the map at our location
            center: {
                lat:  29.426791,
                lng: -98.489602
            }
        };

        // Render the map
        var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);

        var marker;
        google.maps.event.addListener(map, 'click', function(event) {

        //places marker
    		function placeMarker(location) {
			  if ( marker ) {
			    marker.setPosition(location);
			  } else {
			    marker = new google.maps.Marker({
			      position: location,
			      map: map
			    });
			  }
			}
				placeMarker(event.latLng);

	    		lat = event.latLng.lat(); 	//gets coords from marker and uses them in the request function
	    		lon = event.latLng.lng();	//gets coords from marker and uses them in the request function
	    		$("#weatherDiv").html(""); //empties out weatherDiv
	    		request();
			});

})();
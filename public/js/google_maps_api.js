   (function() {
        "use strict";
        // Set our map options
        var mapOptions = {
            // Set the zoom level
            zoom: 13,

            // This sets the center of the map at our location
            center: {
                lat:  29.426791,
                lng: -98.489602
            }
        };
           var address = "San Antonio, TX"; 

        document.getElementById("first").addEventListener("click", function(e){
        var mapOptions = {
            // Set the zoom level
            zoom: 18,

            // This sets the center of the map at our location
            center: {
                lat:  29.426791,
                lng: -98.489602
            }
        };
        var address = "100 E Grayson St, San Antonio, TX 78215";
        
        renderMap(address, mapOptions);
        ;})

        document.getElementById("second").addEventListener("click", function(e){
        var mapOptions = {
            // Set the zoom level
            zoom: 18,

            // This sets the center of the map at our location
            center: {
                lat:  29.426791,
                lng: -98.489602
            }
        };
        var address = "6989 Blanco Rd, San Antonio, TX 78216";
        
        renderMap(address, mapOptions);
        ;})        

        document.getElementById("third").addEventListener("click", function(e){
        var mapOptions = {
            // Set the zoom level
            zoom: 18,

            // This sets the center of the map at our location
            center: {
                lat:  29.426791,
                lng: -98.489602
            }
        };
        var address = "1906 N Main Ave, San Antonio, TX 78212";
        
        renderMap(address, mapOptions);
        ;})     

        var renderMap = function (address, mapOptions){ 
        // Init geocoder object
        var geocoder = new google.maps.Geocoder();
        // Geocode our address
        var addressLatLng;
        geocoder.geocode({ "address": address }, function(results, status) {
          console.log(results[0].geometry.location);
           // Check for a successful result
           if (status == google.maps.GeocoderStatus.OK) {
              var lat = results[0].geometry.location.lat();
              var lng = results[0].geometry.location.lng();

              addressLatLng = {"lat": lat, "lng":lng};

              console.log(results[0]);
              console.log(addressLatLng);

              var marker = new google.maps.Marker({
                position: addressLatLng,
                map: map,
                animation: google.maps.Animation.DROP,
              });

              google.maps.event.addListener(marker, 'click', function() {         //info pops up when marker clicked
              infoWindow.open(map,marker);
              });

              var infoWindow = new google.maps.InfoWindow({
                  content: "<h3>La Gloria</h3 <ul><li>Good Food</li><li>Good Margaritas</li></ul>"
              });
                     // Recenter the map over the address
              map.setCenter(results[0].geometry.location);
           } else {

               // Show an error message with the status if our request fails
               alert("Geocoding was not successful - STATUS: " + status);
           }


        });

        // Render the map
        var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);

      }//end of function
      
      renderMap(address, mapOptions);
      

  
    })();

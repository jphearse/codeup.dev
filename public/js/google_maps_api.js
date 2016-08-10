   (function() {
        "use strict";
        // Set our map options
        var mapOptions = {
            // Set the zoom level
            zoom: 18,

            // This sets the center of the map at our location
            center: {
                lat:  29.426791,
                lng: -98.489602
            },

            mapTypeId: google.maps.MapTypeId.SATELLITE

        };


        var address = "100 E Grayson St, San Antonio, TX 78215";

        // Init geocoder object
        var geocoder = new google.maps.Geocoder();

        // Geocode our address
        geocoder.geocode({ "address": address }, function(results, status) {

           // Check for a successful result
           if (status == google.maps.GeocoderStatus.OK) {

               // Recenter the map over the address
               map.setCenter(results[0].geometry.location);
           } else {

               // Show an error message with the status if our request fails
               alert("Geocoding was not successful - STATUS: " + status);
           }
        });

        // Render the map
        var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);

        var laGloria = { lat: 29.444273, lng: -98.481163};

        var marker = new google.maps.Marker({
            position: laGloria,
            map: map
        });

        var infoWindow = new google.maps.InfoWindow({
            content: "<h3>La Gloria</h3 <ul><li>Good Food</li><li>Good Margaritas</li></ul>"
        });

        google.maps.event.addListener(marker, 'click', function() {         //info pops up when marker clicked
        infoWindow.open(map,marker);
      });
  
    })();

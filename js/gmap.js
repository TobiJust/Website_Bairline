function init_map() {
    var var_location = new google.maps.LatLng(47.792864, 12.994000);

    var var_mapoptions = {
        center: var_location,
        zoom: 12,
        panControl: false,
        rotateControl: false,
        streetViewControl: false,
        scrollwheel: false,
        styles: [{
            "featureType": "administrative",
            "elementType": "labels.text.fill",
            "stylers": [{
                "color": "#444444"
            }]
        }, {
            "featureType": "landscape",
            "elementType": "all",
            "stylers": [{
                "color": "#f2f2f2"
            }]
        }, {
            "featureType": "poi",
            "elementType": "all",
            "stylers": [{
                "visibility": "off"
            }]
        }, {
            "featureType": "road",
            "elementType": "all",
            "stylers": [{
                "saturation": -100
            }, {
                "lightness": 45
            }]
        }, {
            "featureType": "road.highway",
            "elementType": "all",
            "stylers": [{
                "visibility": "simplified"
            }]
        }, {
            "featureType": "road.arterial",
            "elementType": "labels.icon",
            "stylers": [{
                "visibility": "off"
            }]
        }, {
            "featureType": "transit",
            "elementType": "all",
            "stylers": [{
                "visibility": "off"
            }]
        }, {
            "featureType": "water",
            "elementType": "all",
            "stylers": [{
                "color": "#4f595d"
            }, {
                "visibility": "on"
            }]
        }]
    };

    var var_marker = new google.maps.Marker({
        position: var_location,
        map: var_map,
        title: "BAIRLINE Fluggesellschaft m.b.H. & Co KG"
    });

    var var_map = new google.maps.Map(document.getElementById("map-container"),
        var_mapoptions);

    var_marker.setMap(var_map);
    var_map.setCenter(var_location);

    google.maps.event.addListener(var_map, 'mouseover', function() {
        setTimeout(function(){
            google.maps.event.trigger(var_map, "resize");
        }, 600);
        google.maps.event.trigger(var_map, "resize");
    });
    google.maps.event.addListener(var_map, 'mouseout', function() {
        google.maps.event.trigger(var_map, "resize");
    });

}

google.maps.event.addDomListener(window, 'load', init_map);

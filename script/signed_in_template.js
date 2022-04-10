$(document).ready(function() {
    // Global Presets
    $("#activepanel").hide();
    var pitt_stops = [];
    const default_coordinates = { lat: 42.3601, lng: -71.0589 }

    // Map Functionality
    /*
    const directionsService = new google.maps.DirectionsService()
    const directionsRenderer = new google.maps.DirectionsRenderer()
    const map = new google.maps.Map(document.getElementById("account_map"), {
        zoom: 9,
        center: default_coordinates,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    });

    var autocomplete1 = new google.maps.places.Autocomplete(document.getElementById("start_addr"));
    var autocomplete2 = new google.maps.places.Autocomplete(document.getElementById("end_addr"));

    directionsRenderer.setMap(map);

    function calcRoute() {
        var request = {
            origin: $("#start_addr").val(),
            destination: $("#end_addr").val(),
            travelMode: google.maps.TravelMode.DRIVING,
            unitSystem: google.maps.UnitSystem.IMPERIAL
        };

        directionsService.route(request, function (result, status) {
            if (status == google.maps.DirectionsStatus.OK) {
                directionsRenderer.setDirections(result);
            } else {
                directionsRenderer.setDirections({routes:[]});
                map.setCenter(default_coordinates);
            }
        });
    }*/

    $("#gobtn").click(function() {
        $("#activepanel").show();
        $("#startpanel").hide();
        //calcRoute();
    });
    $("#endbtn").click(function() {
        //directionsRenderer.setDirections({routes:[]});
        //map.setCenter(default_coordinates);
        $("#activepanel").hide();
        $("#startpanel").show();
        $(".plbl").remove();
        pitt_stops = [];
    });
    $("#addbtn").click(function() {
        pitt_stops.push($("#add_addr").val());
        $("#add_addr").val("")
        var stop_label = $("<div class='p-3 bg-secondary text-white m-1 plbl'></div").text("Pitt Stop: " + pitt_stops[pitt_stops.length-1])
        
        $("#stoplist").append(stop_label);
    });
});
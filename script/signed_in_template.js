$(document).ready(function () {
    // Global Presets
    $("#activepanel").hide();

    /* @ Class Variables
        default_coordinates: User's default location
        waypoints: List of user's pittstop locations
        origin: The journey's origin address
        destination: The journey's destination address
    */
    class Map_Service {
        constructor(default_coordinates) {
            this.default_coordinates = default_coordinates;
            this.waypnts = [];
            this.origin = "";
            this.destination = "";
        }
    }

    let ms = new Map_Service({ lat: 42.3601, lng: -71.0589 });

    function cleanText() {
        $("#start_addr").val("");
        $("#end_addr").val("");
        $("#add_addr").val("");
    }

    // Reference: https://developers.google.com/maps/documentation/javascript/examples/directions-simple

    // Initializes Direction API Objects
    const directionsService = new google.maps.DirectionsService()
    const directionsRenderer = new google.maps.DirectionsRenderer()

    // Initializes Google Map API Object
    const map = new google.maps.Map($("#account_map")[0], {
        zoom: 9,
        center: ms.default_coordinates,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    });

    // Intializes Places API Object (Location Autocomplete Feature)
    var autocomplete1 = new google.maps.places.Autocomplete($("#start_addr")[0]);
    var autocomplete2 = new google.maps.places.Autocomplete($("#end_addr")[0]);
    var autocomplete3 = new google.maps.places.Autocomplete($("#add_addr")[0]);

    // Binds Direction Object to Map Object
    directionsRenderer.setMap(map);

    // Handles setting up directions for the map
    function calcRoute() {
        ms.origin = $("#start_addr").val();
        ms.destination = $("#end_addr").val();

        var request = {
            origin: ms.origin,
            destination: ms.destination,
            waypoints: ms.waypnts,
            optimizeWaypoints: true,
            travelMode: google.maps.TravelMode.DRIVING,
            unitSystem: google.maps.UnitSystem.IMPERIAL
        };

        directionsService.route(request, function (result, status) {
            if (status == google.maps.DirectionsStatus.OK) {
                directionsRenderer.setDirections(result);
            } else {
                directionsRenderer.setDirections({ routes: [] });
                map.setCenter(ms.default_coordinates);
            }
        });
    }

    // Handles "Start Journey" button actions
    $("#gobtn").click(function () {
        $("#activepanel").show();
        $("#startpanel").hide();
        calcRoute();
    });
    // Handles "End Journey" button actions
    $("#endbtn").click(function () {
        directionsRenderer.setDirections({ routes: [] });
        map.setCenter(ms.default_coordinates);
        $("#activepanel").hide();
        $("#startpanel").show();
        $(".plbl").remove();
        ms.waypnts = [];
        cleanText();
    });
    // Handles "Add Stop" button actions
    $("#addbtn").click(function () {
        if ($("#add_addr").val() != "") {
            ms.waypnts.push({ location: $("#add_addr").val(), stopover: true });
            calcRoute();
            var waypntTab = $("<div class='p-3 bg-secondary text-white m-1 plbl'></div").text(ms.waypnts.at(-1).location);
            $("#waypntlistroot").append(waypntTab);
        }
        cleanText();
    });
});
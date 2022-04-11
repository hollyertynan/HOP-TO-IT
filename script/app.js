//import Map from "./map.js"

//var c1 = {lat: 42.3601, lng: -71.0589}

//let m = new Map(c1, "account_map")

var LatLng = { lat: 42.3601, lng: -71.0589 };
var mapOptions = {
    center: LatLng,
    zoom: 9,
    mapTypeId: google.maps.MapTypeId.ROADMAP
};

var map = new google.maps.Map(document.getElementById('account_map'), mapOptions)

var directionsService = new google.maps.DirectionsService();

var DirectionsDisplay = new google.maps.DirectionRenderer();

DirectionsDisplay.setMap(map);

function calcRoute() {
    var request = {
        origin: document.getElementById("start_addr").value,
        destination: document.getElementById("end_addr").value,
        travelMode: google.maps.TravelMode.DRIVING,
        unitSystem: google.maps.UnitSystem.IMPERIAL
    }
    console.log(document.getElementById("start_addr").value)
    console.log(document.getElementById("end_addr").value)

    directionsService.route(request, (result, status) => {
        if (status == google.maps.DirectionsStatus.OK) {
            DirectionsDisplay.setDirections(result);
        } else {
            DirectionsDisplay.setDirections({ routes: []});
            map.setCenter(LatLng);
        }
    })
}

options = {
    types: ['(cities)']
}

var input1 = document.getElementById('start_addr')
autocomplete1 = new google.maps.places.Autocomplete(input1, options)

var input2 = document.getElementById('end_addr')
autocomplete2 = new google.maps.places.Autocomplete(input2, options)


$document.ready(function() {
    $("#journey_start_button").click(function() {
        alert("")
    });
});


document.getElementById("#go-btn").style.visibility = "hidden"
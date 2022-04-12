var LatLng = { lat: 42.3601, lng: -71.0589 };
var mapOptions = {
    center: LatLng,
    zoom: 9,
    mapTypeId: google.maps.MapTypeId.ROADMAP
}

var map = new google.maps.Map(document.getElementById('googleMap'), mapOptions)

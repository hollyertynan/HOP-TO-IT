/*var LatLng = { lat: 42.3601, lng: -71.0589 };
var mapOptions = {
    center: LatLng,
    zoom: 9,
    mapTypeId: google.maps.MapTypeId.ROADMAP
}

var map = new google.maps.Map(document.getElementById('account_map'), mapOptions)
*/

export default class Map {
    constructor(coordinates, tag_key) {
        var map_options = {
            center: coordinates,
            zoom: 9,
            mapTypeId: google.maps.MapTypeId.ROADMAP   
        }
        this.map = new google.maps.Map(document.getElementById(tag_key), map_options)
    }
}
$(document).ready(function() {
    // Global Presets
    $("#activepanel").hide();
    var pitt_stops = []
    /*
    var default_coordinates = { lat: 42.3601, lng: -71.0589 }
    var mapOptions = {
        center: default_coordinates,
        zoom: 9,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    }

    var map = new google.maps.Map(document.getElementById('account_map'), mapOptions)
    */
    $("#gobtn").click(function() {
        $("#activepanel").show();
        $("#startpanel").hide();
    });
    $("#endbtn").click(function() {
        $("#activepanel").hide();
        $("#startpanel").show();
        $(".plbl").remove();
        pitt_stops = []
    });
    $("#addbtn").click(function() {
        pitt_stops.push($("#add_addr").val());
        $("#add_addr").val("")
        var stop_label = $("<div class='p-3 bg-secondary text-white m-1 plbl'></div").text("Pitt Stop: " + pitt_stops[pitt_stops.length-1])
        
        $("#stoplist").append(stop_label);
    });
});
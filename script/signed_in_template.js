$(document).ready(function () {
    // Global Presets
    $("#activepanel").hide();

    /*
    The purpose of this class is to organize the neccessary data
    required to generate directions for Directions API.
    */
    class Journey {
        constructor(default_coordinates) {
            this.default_coordinates = default_coordinates; // User's Default Locations
            this.waypnts = [];                              // List of user's pittstop locations
            this.origin = "";                               // Journey's origin address
            this.destination = "";                          // Journey's destination address
        }
    }

    var journey = new Journey({ lat: 42.3601, lng: -71.0589 });

    // Cleans all the input fields in the Journey Hub Container
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
        center: journey.default_coordinates,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    });

    // Intializes Places API Object (Location Autocomplete Feature)
    var autocomplete1 = new google.maps.places.Autocomplete($("#start_addr")[0]);
    var autocomplete2 = new google.maps.places.Autocomplete($("#end_addr")[0]);
    var autocomplete3 = new google.maps.places.Autocomplete($("#add_addr")[0]);

    // Binds Direction Object to Map Object
    directionsRenderer.setMap(map);

    // Reference: https://developers.google.com/maps/documentation/javascript/examples/directions-waypoints
    // @param: update -> indicates if journey's origin/destination need to be updated
    function routeService(update = false) {
        if (update) {
            journey.origin = $("#start_addr").val();
            journey.destination = $("#end_addr").val();
        }
        const waypoints = journey.waypnts;
        directionsService
            .route({
                origin: journey.origin,
                destination: journey.destination,
                waypoints: waypoints,
                optimizeWaypoints: true,
                travelMode: google.maps.TravelMode.DRIVING,
            })
            .then((response) => {
                directionsRenderer.setDirections(response);
            });
    }

    // Handles "Start Journey" button actions
    $("#gobtn").click(function () {
        $("#activepanel").show();
        $("#startpanel").hide();
        routeService(true);
        $("#trip_label").html(journey.origin + " to " + journey.destination);
    });
    // Handles "End Journey" button actions
    $("#endbtn").click(function () {
        directionsRenderer.setDirections({ routes: [] });
        map.setCenter(journey.default_coordinates);
        $("#activepanel").hide();
        $("#startpanel").show();
        $(".pitt_list").remove();
        journey.waypnts = [];
        cleanText();
        $("#trip_label").html("");
    });
    // Handles "Add Stop" button actions
    $("#addbtn").click(function () {
        if ($("#add_addr").val() != "" && journey.waypnts.indexOf({ location: $("#add_addr").val(), stopover: true, }) == -1) {
            journey.waypnts.push({ location: $("#add_addr").val(), stopover: true, });
            routeService();
            //var waypntTab = $("<div class='p-3 bg-secondary text-white m-1 plbl' id='" + journey.waypnts.at(-1).location + "'></div").text(journey.waypnts.at(-1).location);            
            let waypntTab = `
            <div class="pitt_list">
                <p>
                    <a class="btn btn-primary w-100 p-3" data-toggle="collapse" href="#tab`+journey.waypnts.length+`" role="button" aria-expanded="false" aria-controls="tab`+journey.waypnts.length+`">
                        `+journey.waypnts.at(-1).location+`
                    </a>
                </p>
                <div class="collapse" id="tab`+journey.waypnts.length+`">
                    <div class="card card-body">
                        <h5 class="card-title">Item List</h5>
                        <ul id="item`+journey.waypnts.length+`_list">
                        </ul>
                        <form>
                            <div>
                                <input id="item`+journey.waypnts.length+`_input" class="form-control" type="text" placeholder="Item Name">
                            </div>
                            <button type="button" class="btn btn-success btn-lg btn-block w-100 mt-4 additm" id="item`+journey.waypnts.length+`">Add Item</button>
                        </form>
                    </div>
              </div>
            </div>  
            `
            $("#waypntlistroot").append(waypntTab);
        }
        cleanText();
    });

    $(document).on("click", ".additm", function(e) {
        $('body').on("change",'input[name="'+e.target.id+'_input"', () => {});
        $('body').on("change", 'ul[name="'+e.target.id+'_list"', () => {});

        let list_element = "<li>"+$("#"+e.target.id+"_input").val() + "</li>";
        console.log(list_element)
        $("#"+e.target.id+"_list").append(list_element);
    });
});
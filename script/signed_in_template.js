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
            this.user_coordinate = {};
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
    // Tracks the user's position
    const successCallback = (position) => {
        console.log(position);
        journey.user_coordinates = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
        }
        new google.maps.Marker({
            position: journey.user_coordinates,
            map:map
        });
    }
    const errorCallback = (error) => {
        console.log(error);
    }

    const watchId = navigator.geolocation.watchPosition(successCallback, errorCallback);

    // Intializes Places API Object (Location Autocomplete Feature)
    //var autocomplete1 = new google.maps.places.Autocomplete($("#start_addr")[0]);
    //var autocomplete2 = new google.maps.places.Autocomplete($("#end_addr")[0]);
    //var autocomplete3 = new google.maps.places.Autocomplete($("#add_addr")[0]);

    // Binds Direction Object to Map Object
    directionsRenderer.setMap(map);

    // Reference: https://developers.google.com/maps/documentation/javascript/examples/directions-waypoints
    // @param: update -> indicates if journey's origin/destination need to be updated
    function routeService(update = false, optimize = false) {
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
                optimizeWaypoints: optimize,
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
            let waypntTab = `
            <div class="pitt_list">
                <p>
                    <a class="btn btn-primary w-100 p-3" data-toggle="collapse" href="#tab`+ journey.waypnts.length + `" role="button" aria-expanded="false" aria-controls="tab` + journey.waypnts.length + `">
                        `+ journey.waypnts.at(-1).location + `
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
                        </svg>
                    </a>
                </p>
                <div class="collapse" id="tab`+ journey.waypnts.length + `">
                    <div class="card card-body">
                        <h5 class="card-title">Item List</h5>
                        <div id="item`+ journey.waypnts.length + `_list"></div>
                        <form>
                            <div>
                                <input id="item`+ journey.waypnts.length + `_input" class="form-control m-1" type="text" placeholder="Item Name">
                            </div>
                            <div>
                                <input id="item`+ journey.waypnts.length + `_amount" class = "form-control m-1" type="number" placeholder="Amount">
                            </div>
                            <button type="button" class="btn btn-success btn-lg btn-block w-100 mt-4 additm" id="item`+ journey.waypnts.length + `">Add Item</button>
                            <button type="button" class="btn btn-danger btn-lg btn-block w-100 mt-4 additm" id="item`+ journey.waypnts.length + `_del">Delete Item(s)</button>
                        </form>
                    </div>
              </div>
            </div>  
            `
            $("#waypntlistroot").append(waypntTab);
        }
        cleanText();
    });
    // Handles actions for dynamically added location tabs and their respective item lists
    $(document).on("click", ".additm", function (e) {
        // "Rebinds" dynamically added elements such that jquery selectors identify them
        $('body').on("change", 'input[name="' + e.target.id + '_input"', () => { });
        $('body').on("change", 'input[name="' + e.target.id + '_amount"', () => { });
        $('body').on("change", 'div[name="' + e.target.id + '_list"', () => { });
        // Adds list element to item list
        let itemName = $("#" + e.target.id + "_input").val();
        let itemAmount = $("#" + e.target.id + "_amount").val();
        // Build div container to house item information
        let list_element = "<div class='p-2 m-1 bg-dark text-white font-weight-bold border border-rounded'>" + itemName + ": " + itemAmount + "</div>"

        console.log(list_element)
        $("#" + e.target.id + "_list").append(list_element);
    });
});

// const enter = document.querySelector("#search")
// enter.addEventListener("keyup", function(e){              //creates a list 
//   e.preventDefault()
  
//   if(e.keyCode === 13){
//     var letters = /^[A-Za-z]+$/;

//     // document.querySelector("#searchTwo").submit();
//     e.preventDefault();
//     // console.log("sea")
//     // console.log(enter.value);

//     if (enter.value.length == 0){
//       return
//     }

//     if(enter.value.match(letters)){

//     }
    
// /********************************************************************************************** */

//     if(enter.value == "Jacquie Moloney"){

//       // console.log(enter.value)
//       var add = document.createElement("div")
//       var addfriend = document.createElement("p")
//       addfriend.innerHTML = "Would you like to add Jacquie Moloney as a friend?"
//       // add.innerHTML = "Jacquie Moloney"
//       add.id = "add"
//       add.display === "block";

//       var yes = document.createElement("button")
//       yes.id = "acceptYes"
//       yes.innerHTML = "Yes"
//       var no = document.createElement("button")
//       no.id = "acceptNo"
//       no.innerHTML = "No"

//       document.querySelector(".box3").appendChild(add)
//       document.querySelector("#add").appendChild(addfriend)
//       document.querySelector("#add").appendChild(yes)
//       document.querySelector("#add").appendChild(no)


//       function removePopup(){
//         console.log('BEFORE')
//         const select = document.querySelector("#add")
//         console.log('AFTER')
//         select.remove();
//       }

//       const removeYes = document.querySelector("#acceptYes")
//       removeYes.addEventListener("click", removePopup)
//       removeYes.addEventListener("click", addNotification)


//       const removeNo = document.querySelector("#acceptNo")
//       removeNo.addEventListener("click", removePopup)

// /********************************************************************************************** */


//     }
//   }
// })
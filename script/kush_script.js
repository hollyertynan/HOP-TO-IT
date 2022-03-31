// document.querySelector("#notifications").addEventListener("click",(e)=>{
//     e.preventDefault
// })

// document.querySelector("#messages").addEventListener("click",(e)=>{
//     e.preventDefault
// })

// document.querySelector("#dropdown").addEventListener("click",(e)=>{
//     e.preventDefault
// })

// function showDropdown() {
//     document.getElementById("#dropdown").classList.toggle("show");
// }


/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function logoutDropdown() 
{
  console.log('HImess')
  const select = document.querySelector("#dropdownInfo");
  if(select.style.display === "block")
  {
    console.log("beojmegs");
    select.style.display = "none"

  }
  else{
    console.log("else");

    select.style.display = "block"
  }
  console.log(select)
  console.log("hi2mess")
}


function messageDropdown() {
  console.log('HImess')
  const select = document.querySelector("#messageInfo");
  if(select.style.display === "block")
  {
    console.log("beojmegs");
    select.style.display = "none"

  }
  else{
    console.log("else");

    select.style.display = "block"
  }
  console.log(select)
  console.log("hi2mess")
}




function notificationsDropdown() {
  console.log('HInoti')
  const select = document.querySelector("#notificationInfo");
  if(select.style.display === "block")
  {
    console.log("beojmegs");
    select.style.display = "none"

  }
  else{
    console.log("else");

    select.style.display = "block"
  }
  console.log(select)
  console.log("hi2noti")
}

const div_noti = document.querySelector("#notifications")
div_noti.addEventListener("click", notificationsDropdown)

const div_message = document.querySelector("#messages")
div_message.addEventListener("click", messageDropdown)

const div_log = document.querySelector("#logoutPic")
div_log.addEventListener("click", logoutDropdown)

const cancelButton = document.querySelector("#cancel")
cancelButton.addEventListener("click", logoutDropdown)

const exitButton = document.querySelector("#exitNoti")
exitButton.addEventListener("click", notificationsDropdown)

const backButton = document.querySelector("#goBack")
backButton.addEventListener("click", messageDropdown)

// const logButton = document.querySelector("#logout")
// logButton.addEventListener("click", window.location("index.html"))



// var LatLng = { lat: 42.3601, lng: -71.0589 };
// var mapOptions = {
//     center: LatLng,
//     zoom: 9,
//     mapTypeId: google.maps.MapTypeId.ROADMAP
// };

// var map = new google.maps.Map(document.getElementById('googleMap'), mapOptions)



window.onclick = function(event) 
{
  
    // const select2 = document.querySelector("#notificationInfo");
    // if(select2.style.display === "block")
    // {
    //   console.log("beojmegs");
    //   select2.style.display = "none"
  
    // }
  
    

    
}


// getElementById("send").onclick = function(event){

// }


const friendOne = document.createElement("p");
friendOne.innerHTML = "Friend 1";
document.getElementById("friend1").appendChild(friendOne);
friendOne.id = "friendOne";

const dateOne = document.createElement("p");
dateOne.innerHTML = "Date 1";
document.getElementById("friend1").appendChild(dateOne);
dateOne.id = "dateOne";


const profilePicTL = document.createElement("img")
profilePicTL.src = "assets/navbar/profile_blank.webp"
profilePicTL.id = "infoPicTL"
document.getElementById("tlpic").appendChild(profilePicTL) 

// const profileName = document.createElement("p")
// profileName.innerHTML = "Your Name"
// document.getElementById("tlpic").append(profileName)


// if(person == online){
//   const friendOn = document.createElement("p");
//   friendOn.innerHTML = "Kush";
//   document.getElementById("friendOnline").appendChild(friendOn);
// }

const profilePicBL = document.createElement("img")
profilePicBL.src = "assets/navbar/profile_blank.webp"
profilePicBL.id = "blpic"                                           //online friends
document.getElementById("friendsOnline").appendChild(profilePicBL)


const viewButton = document.createElement("button")
viewButton.innerHTML = "View"                                       //view button
// document.getElementById("otherJourneys").appendChild(viewButton)


const friendJourney = document.createElement("p")
friendJourney.innerHTML = "... journey is going on, with ... stops left."
document.getElementById("otherJourneys").appendChild(friendJourney)
// document.getElementById("otherJourneys").appendChild(viewButton)









const profilePic = document.createElement("img")
profilePic.src = "assets/navbar/profile_blank.webp"
profilePic.id = "infoPic"
// document.getElementById("quickInfo").appendChild(profilePic) 

const info = document.createElement("p")
info.innerHTML =  /*profilePic + */"... Pick-Up journey has started, with ... stops and ...!"
document.getElementById("quickInfo").appendChild(info);


const messageButton = document.createElement("button")
messageButton.innerHTML = "Friend";
messageButton.id = "friendsButton"
document.getElementById("messagesSide").appendChild(messageButton)

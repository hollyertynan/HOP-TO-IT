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

// const logButton = document.querySelector("#logout")
// logButton.addEventListener("click", window.location("index.html"))



// function initMap(){
//   var options = {
//      zoom: 8,
//      center: {lat:30,lng:30}
//   }
//   var map = new google.maps.Map(document.getElementById('map'), options)
// }



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
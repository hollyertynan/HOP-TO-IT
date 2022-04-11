
const q = document.getElementById("search");
const google = 'https://www.google.com/search?q=site%3A+';
const site = 'pagedart.com';

function submitted(event){
  event.preventDefault();
  const url = google + site + '+' + q.value;
  const win = window.open(url, '_blank');
  win.focus();

}

q.addEventListener('submit', submitted);



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

function removeMessage(){
  const select = document.querySelector("friendsButton");
  if(select.style.display === "block")
  {
    select.style.display === "none";
  }
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

// Setting-up-sing-out-function-and-directions-besides-map
// const logButton = document.querySelector("#logout")
// logButton.addEventListener("click", window.location("index.html"))

// const logButton = document.querySelector("#logout")
// logButton.addEventListener("click", signOut())

function signOut() {
  var auth2 = gapi.auth2.getAuthInstance();
  auth2.signOut().then(function () {
    console.log('User signed out.');
  });
}


// function onLoad() {
//   gapi.load('auth2', function() {
//     gapi.auth2.init();
//   });
// }


// const logButton = document.querySelector("#logout")
// logButton.addEventListener("click", window.location("index.html"))

// const logButton = document.querySelector("#logout")
// logButton.addEventListener("click", signOut())

// function signOut() {
//   // var auth2 = gapi.auth2.getAuthInstance();
//   // auth2.signOut().then(function () {
//   //   console.log('User signed out.');
//   // });

//   // window.onLoadCallback = function(){
//   //   gapi.auth2.init({
//   //       client_id: 'You_client_Id_HERE.apps.googleusercontent.com'
//   //     });
//   //   }
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

// Setting-up-sing-out-function-and-directions-besides-map
// const spaceInside = document.createElement("div")
// spaceInside.id = "Insidespace";
// document.getElementById("friendsButton").prepend(spaceInside)       //create space between profile pic and name

const friendPic = document.createElement("img")
friendPic.src = "assets/navbar/profile_blank.webp"
friendPic.id = "picFriend"
document.getElementById("friendsButton").prepend(friendPic)

const exitFriend = document.createElement("img")
exitFriend.src = "assets/navbar/exit.png"
exitFriend.id = "exitPic"
document.getElementById("friendsButton").append(exitFriend)


// const deleteMessage = document.querySelector("exitPic")
// deleteMessage.addEventListener("click", function(e){       //remove message on the side
//   const parent = e.target.parentElement;
//   parent.removeMessage;
// })

const mapInfo = document.createElement("p")
mapInfo.innerHTML = "Some Info"                             //quick directions info
mapInfo.id = "simpleInfo"
document.getElementById("aboveMap").appendChild(mapInfo)

// const enter = document.querySelector("#search")
// enter.addEventListener("keyup", function(e){
//   e.preventDefault()
//   // console.log(e)
//   if(e.keyCode === 13){
//     // document.querySelector("#searchTwo").submit();
//     // e.preventDefault();
//     console.log("sea")
//     search();
//   }
// })

// function searchBar() {
//   console.log("sea")
//   document.querySelector("#search").addEventListener("keyup", function(event){
//     if(event.keyCode === 13){
//       // search();
//     }
//   })            //search 
//   console.log("searchbar")
// }

function search(item){
  const itemData = new FormData(item)

  fetch(`https://api.edamam.com/api/food-database/parser?app_id=195cc5f5&app_key=e8bde5dcb324d7546ca5b2e41264c101=${itemData.get('name')}`)      //search
    .then(res => res.json())
    .then(data => console.log(data))
    console.log(enter.value)
}


const enter = document.querySelector("#search")
enter.addEventListener("keyup", function(e){
  e.preventDefault()
  // console.log(e)
  if(e.keyCode === 13){
    // document.querySelector("#searchTwo").submit();
    e.preventDefault();
    // console.log("sea")
    console.log(enter.value);

    if (enter.value.length == 0){
      return
    }

    else{

      var check = document.createElement("input");
      check.type = 'checkbox';
      check.id = "checkList"
      // newItem.prepend(check);

      var newItem = document.createElement("p")
      newItem.setAttribute("type", "checkbox");
      newItem.id = "itemList"
      newItem.innerHTML = enter.value                                     //creates list of items
      document.querySelector("#directionsBox").appendChild(newItem);
      newItem.prepend(check);


      search();

    }
  }
})


// =${itemData.get('name')}

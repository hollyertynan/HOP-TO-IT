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



window.onclick = function(event) 
{
    if (!event.target.matches('.dropbutton')) 
    {
      var dropdowns = document.getElementsByClassName("dropdown-content", "message-content", "notificationInfo");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var info = dropdowns[i];

        if (info.classList.contains('show')) 
        {
            info.classList.remove('show');
        }
      }
    }

    
    if (!event.target.matches('.messageButton')) 
    {
      var dropdowns = document.getElementsByClassName("message-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var info = dropdowns[i];

        if (info.classList.contains('show')) 
        {
            info.classList.remove('show');
        }
      }
    }

    if (!event.target.matches('#notifications')) 
    {
      var dropdowns = document.getElementsByClassName("notificationInfo");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var info = dropdowns[i];

        if (info.classList.contains('show')) 
        {
            info.classList.remove('show');
        }
      }
    }
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
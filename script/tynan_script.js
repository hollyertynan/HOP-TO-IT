function onSignInMain(googleUser) {
    var profile = googleUser.getBasicProfile();
    document.getElementById("remove_signin").innerHTML = "<h5 class=\"my-auto mx-auto\">" + profile.getName() + "</h5>";
    document.getElementById("add_name").innerHTML = "<img class=\"img-fluid ms-4 mx-auto rounded-circle\" style=\"max-width: 50px\" src='" + profile.getImageUrl() + "' alt='Profile Picture'>";

    var saveProfileImage = profile.getImageUrl();
    var saveProfileName = profile.getName();

    window.location.replace("https://hollyertynan.github.io/HOP-TO-IT/signed_in_template.html");
}

function signedInPage(googleUser) {
  var profile = googleUser.getBasicProfile();
  document.getElementById("remove_signin").innerHTML = "<h5 class=\"my-auto mx-auto\">" + profile.getName() + "</h5>";
  document.getElementById("add_name").innerHTML = "<img class=\"img-fluid ms-4 mx-auto rounded-circle\" style=\"max-width: 50px\" src='" + profile.getImageUrl() + "' alt='Profile Picture'>";

  var saveProfileImage = profile.getImageUrl();
  var saveProfileName = profile.getName();
}

//extra push 

// sign out link
// <a href="#" onclick="signOut();">Sign out</a>
function signOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
      console.log('User signed out.');
    });

    location.reload();
}
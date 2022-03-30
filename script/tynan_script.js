function onSignIn(googleUser) {
    var profile = googleUser.getBasicProfile();
    document.getElementById("remove_signin").innerHTML = "<h5 class=\"my-auto mx-auto\">" + profile.getName() + "</h5>";
    document.getElementById("add_name").innerHTML += "<img class=\"img-fluid ms-4 mx-auto\" style=\"max-width: 50px\" src='" + profile.getImageUrl() + "' alt='Profile Picture'>";
}

// sign out link
// <a href="#" onclick="signOut();">Sign out</a>
function signOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
      console.log('User signed out.');
    });
}
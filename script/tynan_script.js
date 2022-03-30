function onSignIn(googleUser) {
    var profile = googleUser.getBasicProfile();
    document.getElementById("remove_signin").innerHTML = "<h1>" + profile.getName() + "</h1>";
    document.getElementById("remove_signin").innerHTML += "<img src='" + profile.getImageUrl() + "' alt='Profile Picture'>";
}

// sign out link
// <a href="#" onclick="signOut();">Sign out</a>
function signOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
      console.log('User signed out.');
    });
}
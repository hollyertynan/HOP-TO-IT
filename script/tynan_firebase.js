function getUserInformation() {
    //import { getAuth } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js";

    const auth = getAuth();
    const user = auth.currentUser;
    if (user !== null) {
        // The user object has basic properties such as display name, email, etc.
        const displayName = user.displayName;
        const email = user.email;
        const photoURL = user.photoURL;
        const emailVerified = user.emailVerified;

        // The user's ID, unique to the Firebase project. Do NOT use
        // this value to authenticate with your backend server, if
        // you have one. Use User.getToken() instead.
        const uid = user.uid;
    }
}

function checkForUser() {
    var user = firebase.auth().currentUser;
    if (user) {
        console.log(user)
    } else {
        console.log("No user. Error.");
        document.getElementById("firebase-sign-in") = '<button type=\"button\" class=\"btn btn-primary\" data-bs-toggle=\"modal\" data-bs-target=\"#staticBackdrop\">Launch static backdrop modal</button><div class=\"modal fade\" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title" id="staticBackdropLabel">Sign In:</h5><button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body"><div id="firebaseui-auth-container"></div><div id="loader">Loading...</div></div></div></div></div>'
    }

    //window.location.replace("https://hollyertynan.github.io/HOP-TO-IT/signed_in_template.html");
}

function myWaitFunction() {
    do {
        var user = firebase.auth().currentUser;
        if (user) {
            console.log(user)
        } else {
            console.log("No user. Error.")
        }
    } while(!user)

    window.location.replace("https://hollyertynan.github.io/HOP-TO-IT/signed_in_template.html");
}
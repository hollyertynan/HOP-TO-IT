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
        console.log("No user. Error.")
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
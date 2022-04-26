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

/* all firebase stuff cause I'm going to start from scratch but don't want to lose it until its working

<div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="staticBackdropLabel">Modal title</h5>
                </div>
                <div id="firebaseui-auth-container"></div>
                <div id="loader">Loading...</div>
            </div>
        </div>
    </div>


    <script src="https://www.gstatic.com/firebasejs/9.1.3/firebase-app-compat.js"></script>
    <script src="https://www.gstatic.com/firebasejs/9.1.3/firebase-auth-compat.js"></script>
    <script src="https://www.gstatic.com/firebasejs/ui/6.0.1/firebase-ui-auth.js"></script>

    <script src="script/tynan_firebase.js"></script>

<script type="module">
        // Import the functions you need from the SDKs you need
        import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
        import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-analytics.js";
        // TODO: Add SDKs for Firebase products that you want to use
        // https://firebase.google.com/docs/web/setup#available-libraries
      
        // Your web app's Firebase configuration
        // For Firebase JS SDK v7.20.0 and later, measurementId is optional
        const firebaseConfig = {
          apiKey: "AIzaSyBIbiNnmnd0uB5zkJa0LNyKvjryaaCso4s",
          authDomain: "hop-to-it-d4b29.firebaseapp.com",
          projectId: "hop-to-it-d4b29",
          storageBucket: "hop-to-it-d4b29.appspot.com",
          messagingSenderId: "901911434529",
          appId: "1:901911434529:web:78408095d20d62e904da60",
          measurementId: "G-MDGLQVSZ2W"
        };
      
        // Initialize Firebase
        const app = initializeApp(firebaseConfig);
        const analytics = getAnalytics(app);

        // Initialize the FirebaseUI Widget using Firebase.
        firebase.initializeApp(firebaseConfig);
        var ui = new firebaseui.auth.AuthUI(firebase.auth());

        var uiConfig = {
            callbacks: {
                signInSuccessWithAuthResult: function(authResult, redirectUrl) {
                    // User successfully signed in.
                    // Return type determines whether we continue the redirect automatically
                    // or whether we leave that to developer to handle.
                    $('#staticBackdrop').modal('hide');

                    const auth = getAuth();
                    const user = auth.currentUser;
                    if (user !== null) {
                        // The user object has basic properties such as display name, email, etc.
                        const displayName = user.displayName;
                        const email = user.email;
                        const photoURL = user.photoURL;
                        const emailVerified = user.emailVerified;

                        console.log(displayName)
                        console.log(photoURL)

                        // The user's ID, unique to the Firebase project. Do NOT use
                        // this value to authenticate with your backend server, if
                        // you have one. Use User.getToken() instead.
                        const uid = user.uid;
                    }

                    console.log(displayName);
                    console.log(photoURL);

                    document.getElementById("remove_signin").innerHTML = "<h5 class=\"my-auto mx-auto\">" + displayName + "</h5>";
                    document.getElementById("add_name").innerHTML = "<img class=\"img-fluid ms-4 mx-auto rounded-circle\" style=\"max-width: 50px\" src='" + photoURL + "' alt='Profile Picture'>";

                    return false;
                },
                uiShown: function() {
                    // The widget is rendered.
                    // Hide the loader.
                    document.getElementById('loader').style.display = 'none';
                }
            },

            // Will use popup for IDP Providers sign-in flow instead of the default, redirect.
            signInFlow: 'popup',
            signInOptions: [
                // Leave the lines as is for the providers you want to offer your users.
                firebase.auth.GoogleAuthProvider.PROVIDER_ID,
                firebase.auth.FacebookAuthProvider.PROVIDER_ID,
                firebase.auth.GithubAuthProvider.PROVIDER_ID,
            ],
        };

        // The start method will wait until the DOM is loaded.
        ui.start('#firebaseui-auth-container', uiConfig);

        var user = firebase.auth().currentUser;
        if (user) {
            console.log(user)
        } else {
            console.log("No user. Error.")
            $(window).on('load', function() {
                $('#staticBackdrop').modal('show');
            });
        }
    </script>

*/
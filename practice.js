const firebaseConfig = {
    apiKey: "AIzaSyCIkUaLmishZU4gmNM9lF4UHr22ZpinlNo",
    authDomain: "veers-kwitter-app.firebaseapp.com",
    databaseURL: "https://veers-kwitter-app-default-rtdb.firebaseio.com",
    projectId: "veers-kwitter-app",
    storageBucket: "veers-kwitter-app.appspot.com",
    messagingSenderId: "921721646584",
    appId: "1:921721646584:web:c568d12ebfb59a8150fa0d",
    measurementId: "G-NL1DQB2Z8M"
  };
  function adduser ()
  {
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
    purpose : "adding the user"
    })
}

// Your web app's Firebase configuration
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {

    apiKey: "AIzaSyCrFq8Yyo3y0LUjliLfGUXO7lQv6A_2n-I",
  
    authDomain: "lets-chat-web--app.firebaseapp.com",
  
    projectId: "lets-chat-web--app",
  
    storageBucket: "lets-chat-web--app.appspot.com",
  
    messagingSenderId: "887644311345",
  
    appId: "1:887644311345:web:595be4f4baa453daf3aa10"
  
  };
  
  
  // Initialize Firebase
  
  

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    /*
    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";
    */
    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";
    

}




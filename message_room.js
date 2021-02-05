//YOUR FIREBASE LINKSvar firebaseConfig = {
      var firebaseConfig = {
            apiKey: "AIzaSyC5bbGKkbqsdWh12Iln7K4ophBF-BkKPEM",
            authDomain: "kwitter-project-3e24e.firebaseapp.com",
            databaseURL: "https://kwitter-project-3e24e-default-rtdb.firebaseio.com",
            projectId: "kwitter-project-3e24e",
            storageBucket: "kwitter-project-3e24e.appspot.com",
            messagingSenderId: "674952562604",
            appId: "1:674952562604:web:8de17b39cca6629b039c09",
            measurementId: "G-2ERS3F2RV0"
          };
          // Initialize Firebase
          firebase.initializeApp(firebaseConfig);

user_name=localStorage.getItem("user_id");
room_name=localStorage.getItem("room_name");

function send(){
      msg=document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name : user_name,
            message : msg,
            likes : 0
      });
      document.getElementById("msg").value="";
}
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();

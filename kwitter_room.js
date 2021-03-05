
//ADD YOUR FIREBASE LINKS

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBRM3zzbJ2VMSiH0AOXswdo1WEb1qrJ6iI",
  authDomain: "kwitter-c5546.firebaseapp.com",
  databaseURL: "https://kwitter-c5546-default-rtdb.firebaseio.com",
  projectId: "kwitter-c5546",
  storageBucket: "kwitter-c5546.appspot.com",
  messagingSenderId: "1098736886211",
  appId: "1:1098736886211:web:4a37f08f2dcc79e62ddd76"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

  user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom()
{
  roomname = document.getElementById("room_name").value;

  firebase.database().ref("/").child(roomname).update({
    msg : "Hi"
  });

    localStorage.setItem("room_name", roomname);
    window.location = "kwitter_page.html";
    
}
function getData() {  firebase.database().ref("/").on('value', function(snapshot)
 { document.getElementById("output").innerHTML = ""; 
snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}

function logout() {
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
      window.location = "index.html";
  }
  
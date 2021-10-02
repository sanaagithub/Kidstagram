
const firebaseConfig = {
      apiKey: "AIzaSyBrNP1v9CyNKIeHUxOPF0Lzf7UxU84oJOg",
      authDomain: "kidstagram-ea334.firebaseapp.com",
      databaseURL: "https://kidstagram-ea334-default-rtdb.firebaseio.com",
      projectId: "kidstagram-ea334",
      storageBucket: "kidstagram-ea334.appspot.com",
      messagingSenderId: "374322508881",
      appId: "1:374322508881:web:b9ede7099421264899b470"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
function addroom(){
      Room_names=document.getElementById("room_name").value;
      firebase.database().ref("/".child(room_name.update({
            purpose:"adding room name"
      });
      localStorage.setItem("room_name",room_name);
      window.location="kwitter_page.html";
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("Room Name- "+ room_name);
row= "<div class='room_name'id="+room_names+" onclick='redirectToRoomName(this.id)'>#"+room_names+"</div><hr>";
document.getElementById("output").innerHTML +=row;
      //End code
      });});}
getData();

function redirect(){
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location="kwitter_page.html";
}
 
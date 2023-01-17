
//ADICIONE SEUS LINKS FIREBASE

const firebaseConfig = {
  apiKey: "AIzaSyDfGS077sfeVayp10VCd2OXk5vGgPlLIQg",
  authDomain: "massa-847c0.firebaseapp.com",
  databaseURL: "https://massa-847c0-default-rtdb.firebaseio.com",
  projectId: "massa-847c0",
  storageBucket: "massa-847c0.appspot.com",
  messagingSenderId: "865298209469",
  appId: "1:865298209469:web:b85690a14602595325b5d4"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


userName = localStorage.getItem("pao1");

document.getElementById("nomemassa").innerHTML = "agora n saia mais :): " + userName + "";

function getData() {
  firebase.database().ref("/").on('value', function (snapshot) {
    document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
      childKey = childSnapshot.key;
      roomNames = childKey;
      console.log("nome da sala" + roomNames)

      fio = "<div class = 'roomName' id=" + roomNames + " onclick='uhu(this.id)'> " + roomNames + "</div><hr>";

      document.getElementById("output").innerHTML += fio;
    });
  });

}

getData();




function eventolegal() {

  var algo = document.getElementById("masa1s").value;
  firebase.database().ref("/").child(algo).update({
    brrrrrskibri: "issoae"

  });
  localStorage.setItem("roomName", roomName)

  window.location = "massa.html"
}

function uhu(name) {
  console.log(name);
  localStorage.setItem("roomName", name)

  window.location = "massa.html"
}

function eventotop() {
localStorage.removeItem("pao1")
localStorage.removeItem("roomName")
window.location = "index.html"
}




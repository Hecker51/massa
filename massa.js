massa = localStorage.getItem("pao1");
massa1 = localStorage.getItem("roomName");

//LINKS DO SEU APP FIREBASE

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


function getData() { firebase.database().ref("/"+massa1).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Comece a programar aqui
console.log(firebase_message_id)
console.log( message_data)
nome =  message_data["nome"]



mensagem =  message_data["mensagem"]



nomepreparar =  "<h4 id= 'nome'>"+nome+" <img class='user_tick' src='tick.png'></h4>"

msgpreparar = "<h4  class='message_h4'>"+mensagem+"</h4>"



linha = nomepreparar + msgpreparar
document.getElementById("output").innerHTML += linha;
//Termine de programar aqui
      } });  }); }
getData();

function ihih() {

    var mensigi = document.getElementById("conversinha").value;
    firebase.database().ref(massa1).push({
nome : massa,
mensagem : mensigi,
like : 0

    });
}
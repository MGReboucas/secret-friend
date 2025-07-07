

function adicionar() {
     //get value written by user
     let friend = document.getElementById('nome-amigo');
     let friendsList = document.getElementById('lista-amigos');

     //writing values ​​to the p tag
     if (friendsList.textContent == '') {
          friendsList.textContent = friend.value;
     } else {
          friendsList.textContent = friendsList.textContent + ', ' + friend.value;
     }
     friend.value = "";
}

function sortear() {

}

function reiniciar() {

}
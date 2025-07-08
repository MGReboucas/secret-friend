
let friends = [];

function adicionar() {
     //get value written by user
     let friend = document.getElementById('nome-amigo');
     let friendsList = document.getElementById('lista-amigos');
     friends.push(friend.value);
     //writing values ​​to the p tag
     if (friend.value != '') {
          if (friendsList.textContent == '') {
               friendsList.textContent = friend.value;
               friend.value = "";
          } else {
               friendsList.textContent = friendsList.textContent + ', ' + friend.value;
               friend.value = "";
          }
     } else {
          alert('Ops, Você não digitou nada, digite um nome valido');
     }
}

function sortear() {
     let sorteio = document.getElementById('lista-sorteio');

     if (friends.length >= 4) {
          embaralhar(friends);
          for (let i = 0; i < friends.length; i++) {
          if (i == friends.length - 1) {
               sorteio.innerHTML = sorteio.innerHTML + friends[i] + '--->' + friends[0] + '<br>';
          } else {
               sorteio.innerHTML = sorteio.innerHTML + friends[i] + '--->' + friends[i + 1] + '<br>';
          }
     }
     } else {
          alert('Por favor, adicione mais nomes para a brincadeira rolar');
     }
}

function embaralhar(friendsList) {
     for (let indice = friendsList.length; indice; indice--) {
          const indiceAleatorio = Math.floor(Math.random() * indice);

          [friendsList[indice - 1], friendsList[indiceAleatorio]] =
               [friendsList[indiceAleatorio], friendsList[indice - 1]];
     }
}

function reiniciar() {
     friends = [];
     document.getElementById('nome-amigo').value = '';
     document.getElementById('lista-amigos').innerHTML = '';
     document.getElementById('lista-sorteio').innerHTML = '';
}
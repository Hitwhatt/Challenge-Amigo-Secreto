let amigos = [];

   document.addEventListener('DOMContentLoaded', () => {
       const adicionarBtn = document.querySelector('.button-add');
       const sortearBtn = document.querySelector('.button-draw');

       function adicionarAmigo() {
           const nomeInput = document.querySelector('.input-name').value.trim();
           if (nomeInput === '') {
               alert('Por favor, insira um nome válido!');
               return;
           }
           amigos.push(nomeInput);
           document.querySelector('.input-name').value = '';
           atualizarLista();
       }

       function atualizarLista() {
           const lista = document.getElementById('friendList');
           lista.innerHTML = '';
           amigos.forEach(amigo => {
               const li = document.createElement('li');
               li.textContent = amigo;
               lista.appendChild(li);
           });
       }

       function sortearAmigo() {
           if (amigos.length === 0) {
               alert('Adicione pelo menos um amigo antes de sortear!');
               return;
           }
           const indiceAleatorio = Math.floor(Math.random() * amigos.length);
           const amigoSorteado = amigos[indiceAleatorio];
           document.querySelector('.result-list').textContent = `O amigo secreto é: ${amigoSorteado}`;
       }

       adicionarBtn.addEventListener('click', adicionarAmigo);
       sortearBtn.addEventListener('click', sortearAmigo);
   });
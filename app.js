let listaAmigos = [];

//FUNÇÃO QUE LIMPA O CAMPO INPUT
function limparCampo(){
    let campo = document.querySelector('input');
    campo.value = '';
}

//FUNÇÃO QUE MOSTRA A LISTA DE AMIGOS NA TELA
function mostrarListaAmigos(){
    let lista = document.querySelector('#listaAmigos');
    for(var i = 0; i < listaAmigos.length; i++){
        let item = document.createElement('li');
        item.appendChild(document.createTextNode(listaAmigos[i]));
        lista.appendChild(item);
    }
}

//FUNÇÃO QUE EXIBE NA TELA O AMIGO SECRETO SORTEADO
function exibirAmigoSecreto(amigo){
    let lista = document.querySelector('#resultado');
    let item = document.createElement('li');
    item.appendChild(document.createTextNode(`Amigo secreto sorteado é: ${amigo}`));
    lista.appendChild(item);
}

//FUNÇÃO QUE ADICIONA AMIGOS A LISTA
function adicionarAmigo(){
    let nomeAmigo = document.querySelector('input').value;
    if (nomeAmigo == ''){
        window.alert('Por favor, insira um nome válido!');
    } else {
        let campo = document.querySelector('ul');
        listaAmigos.push(nomeAmigo);
        limparCampo();
        mostrarListaAmigos();
    }         
}

//FUNÇÃO QUE SORTEIA AMIGO SECRETO
function sortearAmigo(){
    let amigoSecreto = listaAmigos[Math.floor(Math.random() * listaAmigos.length)];
    exibirAmigoSecreto(amigoSecreto);

}
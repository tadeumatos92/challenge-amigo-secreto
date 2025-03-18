let listaAmigos = [];

function limparCampo(){
    let campo = document.querySelector('input');
    campo.value = '';
}

function mostrarListaAmigos(){
    let lista = document.querySelector('#listaAmigos');
    lista.innerHTML = '';
    for(var i = 0; i < listaAmigos.length; i++){
        let item = document.createElement('li');
        item.appendChild(document.createTextNode(listaAmigos[i]));
        lista.appendChild(item);
    }
}

function exibirAmigoSecreto(amigo){
    let lista = document.querySelector('#resultado');
    let item = document.createElement('li');
    item.appendChild(document.createTextNode(`Amigo secreto sorteado é: ${amigo}`));
    lista.appendChild(item);
}

function adicionarAmigo(){
    let nomeAmigo = document.querySelector('input').value;
    if (nomeAmigo == ''){
        window.alert('Por favor, insira um nome válido!');
    } else {
        let campo = document.querySelector('ul');
        listaAmigos.push(nomeAmigo);
        console.log(listaAmigos);
        limparCampo();
        mostrarListaAmigos();
    }         
}

function sortearAmigo(){
    let amigoSecreto = listaAmigos[Math.floor(Math.random() * listaAmigos.length)];
    console.log(amigoSecreto);
    exibirAmigoSecreto(amigoSecreto);

}
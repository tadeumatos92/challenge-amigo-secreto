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
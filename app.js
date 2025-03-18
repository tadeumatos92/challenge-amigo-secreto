let listaAmigos = [];

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


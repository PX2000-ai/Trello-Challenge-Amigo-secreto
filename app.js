let listaDeNomes = [];

function adicionarAmigo() {
    let nome = document.querySelector('input').value;
    if (nome == "") {
    alert('Por favor ensira um nome válido a lista');
     } else {
    listaDeNomes.push(nome);
    document.querySelector('input').value = '';
    listaAmigos.innerHTML = listaDeNomes;};
};

function sortearAmigo(){
    let quantidadeDeElementosNaLista = listaDeNomes.length;
    let escolhido = (parseInt(Math.random()*quantidadeDeElementosNaLista));
    if (listaDeNomes != '') {
    resultado.innerHTML = (listaDeNomes[escolhido]);
    listaDeNomes.splice(escolhido,1);
    listaAmigos.innerHTML = listaDeNomes;
    } else {
    resultado.innerHTML = '';
    return adicionarAmigo();
    };
};

let listaDeNomes = [];

function adicionarAmigo() {
    let nome = document.querySelector('input').value;
    if (nome == "") {
      alert('Por favor ensira um nome válido a lista');
      return;
     } 
    if (/^\d+$/.test(nome)) {
      alert("Por favor, digite um nome válido (não pode conter apenas números).");
      return;
     }    
    if (listaDeNomes.includes(nome)) {
      alert("Este nome já foi adicionado à lista de amigos.");
    } else {
        listaDeNomes.push(nome);
        document.querySelector('input').value = '';
        listaAmigos.innerHTML = listaDeNomes;
        button.innerText = 'novo';};
};

function sortearAmigo(){
    let escolhido = (parseInt(Math.random()*listaDeNomes.length));
    if (listaDeNomes != '') {
       resultado.innerHTML = (listaDeNomes[escolhido]);
       listaDeNomes.splice(escolhido,1);
       listaAmigos.innerHTML = listaDeNomes;
    } else {
       resultado.innerHTML = '';
       return adicionarAmigo();
    };
};
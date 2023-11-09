// Selecione o botão de resposta2
const botaoResposta2 = document.querySelector('[data-nome="resposta2"]');

function substituirPorImagemDeGatinhos() {
    const caixaDeTexto = document.getElementById('caixaDeTexto1');

    while (caixaDeTexto.firstChild) {
        caixaDeTexto.removeChild(caixaDeTexto.firstChild);
    }

    const novaDiv = document.createElement('div');
    novaDiv.className = 'imagemGatinhos';

    const imagemGatinhos = document.createElement('img');
    imagemGatinhos.src = 'img/lysandre.png';
    imagemGatinhos.alt = 'Gatinhos';
    imagemGatinhos.className = 'gatito';

    novaDiv.appendChild(imagemGatinhos);

    caixaDeTexto.appendChild(novaDiv);

    // Trocar a imagem do cenário para cenario2.png
    const imagemCenario = document.getElementById('cenario');
    imagemCenario.src = 'img/exemplo_cenario2.png';
}

// Adicione um evento de clique ao botão de resposta2
botaoResposta2.addEventListener('click', substituirPorImagemDeGatinhos);


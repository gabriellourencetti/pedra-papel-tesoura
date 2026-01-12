// Variável que controla qual painel está visível
let painelAtual = 'painel-menu';

// Função de navegação entre painéis
function navegarPara(novoPainel) {
    // Pega os elementos DOM dos painéis
    const painelAnterior = document.getElementById(painelAtual);
    const painelNovo = document.getElementById(novoPainel);

    // Determina a direção da animação
    if (novoPainel === 'painel-menu') {
        // VOLTANDO ao menu principal
        painelAnterior.classList.remove('active');
        painelAnterior.classList.add('hidden-right'); // Sai para DIREITA
        
        painelNovo.classList.remove('hidden-left');   // Estava à esquerda
        painelNovo.classList.add('active');            // Entra no centro
    } else {
        // AVANÇANDO para outro painel
        painelAnterior.classList.remove('active');
        painelAnterior.classList.add('hidden-left');  // Sai para ESQUERDA
        
        painelNovo.classList.remove('hidden-right');  // Estava à direita
        painelNovo.classList.add('active');            // Entra no centro
    }

    // Atualiza qual é o painel atual
    painelAtual = novoPainel;
}


// Interruptor

let trilho = document.getElementById('trilho')
let body = document.querySelector('body')

trilho.addEventListener('click', ()=> {
    trilho.classList.toggle('dark')
     body.classList.toggle('dark')
})
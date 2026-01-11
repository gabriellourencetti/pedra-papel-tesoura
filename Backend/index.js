//Objetivo: Criar um progama simples de pedra, papel e tesoura, para jogar contra o computador.

function usuario(escolhaUsuario) {
    const opcoes = ['pedra', 'papel', 'tesoura'];
    if (!opcoes.includes(escolhaUsuario)) { // esse !opcoes foi uma sacada muito boa
        console.log('Escolha inválida! Por favor, escolha pedra, papel ou tesoura.');
    } else {
        return escolhaUsuario;
    }
}

function computador() {
    const opcoes = ['pedra', 'papel', 'tesoura'];
    const numero = Math.random() // math gera um numero aleatorio de 0 a 1

    if (numero < 0.33) { // caso seja menor q isso, resulta em pedra
        return 'pedra'
    } else if (numero < 0.66) {
        return 'papel'
    } else {
        return 'tesoura'
    }
}

function comparar(usuario, computador){
    if(usuario === computador){
        console.log('Empate na tela! Ambos escolheram a mesma opção.')
    }

    if(usuario = 'pedra' && computador = 'tesoura'){
        console.log('Jogador ganhou')
    }
}
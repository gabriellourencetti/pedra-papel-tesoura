// Variável para guardar o placar
let placar = { jogador: 0, computador: 0 };

// Função que valida a escolha do usuário (mantida do seu código original)
function usuario(escolhaUsuario) {
    const opcoes = ['pedra', 'papel', 'tesoura'];
    if (!opcoes.includes(escolhaUsuario)) {
        console.log('Escolha inválida! Por favor, escolha pedra, papel ou tesoura.');
        return null;
    } else {
        return escolhaUsuario;
    }
}

// Função que gera escolha do computador (mantida do seu código original)
function computador() {
    const opcoes = ['pedra', 'papel', 'tesoura'];
    const numero = Math.random(); // math gera um numero aleatorio de 0 a 1

    if (numero < 0.33) { // caso seja menor q isso, resulta em pedra
        return 'pedra';
    } else if (numero < 0.66) {
        return 'papel';
    } else {
        return 'tesoura';
    }
}

// Função que compara as escolhas (mantida do seu código original)
function comparar(usuario, computador) {
    if (usuario === computador) {
        console.log('Empate na tela! Ambos escolheram a mesma opção.');
        return 'Empate';
    } else if (
        (usuario === 'pedra' && computador === 'tesoura') ||
        (usuario === 'tesoura' && computador === 'papel') ||
        (usuario === 'papel' && computador === 'pedra')
    ) {
        return "Jogador ganhou!";
    } else {
        return "Maquina Ganhou!";
    }
}

// Função principal do jogo - ADAPTADA para funcionar com a interface
function jogar(escolhaUsuario) {
    // Valida a escolha do usuário
    const escolhaUser = usuario(escolhaUsuario);
    if (!escolhaUser) return;

    // Gera escolha do computador
    const escolhaCpu = computador();
    
    // Compara as escolhas
    const resultado = comparar(escolhaUser, escolhaCpu);

    // Log no console (mantido do seu código original)
    console.log('Sua escolha: ', escolhaUser);
    console.log('Escolha da Maquina: ', escolhaCpu);
    console.log('Resultado da partida: ', resultado);

    // === NOVA PARTE: Atualiza a interface ===
    
    // Emojis para exibir na tela
    const emojis = {
        'pedra': '🪨',
        'papel': '📄',
        'tesoura': '✂️'
    };

    // Atualiza o placar baseado no resultado
    if (resultado === "Jogador ganhou!") {
        placar.jogador++;
    } else if (resultado === "Maquina Ganhou!") {
        placar.computador++;
    }

    // Monta a mensagem de resultado para exibir na tela
    let mensagemResultado = '';
    if (resultado === 'Empate') {
        mensagemResultado = `Empate! Ambos escolheram ${emojis[escolhaUser]}`;
    } else if (resultado === "Jogador ganhou!") {
        mensagemResultado = `Você venceu! ${emojis[escolhaUser]} vs ${emojis[escolhaCpu]}`;
    } else {
        mensagemResultado = `Você perdeu! ${emojis[escolhaUser]} vs ${emojis[escolhaCpu]}`;
    }

    // Atualiza os elementos na tela
    document.getElementById('resultado').innerHTML = mensagemResultado;
    document.getElementById('placar').innerHTML = `Você: ${placar.jogador} | Computador: ${placar.computador}`;
}
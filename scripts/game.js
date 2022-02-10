// ===== VARIÁVEIS =====
let board = ['', '', '', '', '', '', '', '', '']; //Campos do tabuleiro
let playerTime = 0; //Vez do jogador
let symbols = ['o', 'x'] //Símbolos
let gameOver = false; //Controla se o jogo acabou ou não

let winStates = [ //Condições de vitória
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],

    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],

    [0, 4, 8],
    [2, 4, 6]
]

// ===== MOVIMENTO =====

function handleMove(position) {

    //Se o jogo ja acabou
    if (gameOver == true) {
        return;
    }

    //Faz a jogada só se o campo está vazio
    if (board[position] == '') {

        //Exibe o símbolo
        board[position] = symbols[playerTime];

        //Verifica se houve vitória com o movimento
        gameOver = isWin();

        //Caso não houve vitória, altera o jogador para a próxima rodada
        if (gameOver == false) {
            playerTime = (playerTime == 0) ? 1 : 0;
        }
    }

    return gameOver;
}

// ===== VERIFICA SE HOUVE VITÓRIA =====

function isWin() {
  
    for (let i = 0; i < winStates.length; i++) {
        let seq = winStates[i];
        let pos1 = seq[0];
        let pos2 = seq[1];
        let pos3 = seq[2];

        if (board[pos1] == board[pos2] && board[pos1] == board[pos3] && board[pos1] != '') {
            return true; //Vitória
        }
    }

    return false; 
}

// ===== RESETA O GAME =====

function resetar(){
    //Zera as variáveis
    board = ['', '', '', '', '', '', '', '', ''];
    playerTime = 0;
    gameOver = false;

    //Limpa os campos
    let squares = document.querySelectorAll(".square")
    squares.forEach((square) => {
        square.innerHTML = ""
    })
}
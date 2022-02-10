// ===== DOM =====
document.addEventListener('DOMContentLoaded', () => {
    let squares = document.querySelectorAll('.square');
    let btn_reset = document.querySelector('#reset');

    //Eventos
    squares.forEach((square) => {
        square.addEventListener('click', handleClick);
    });

    btn_reset.addEventListener('click', resetar);
})

// ===== Houve um click em algum campo =====
function handleClick(event) {

    //Pega o ID do quadrado clicado
    let square = event.target; 
    let position = square.id; 

    //Se houve vitória dispara um alert depois de 10 miliseconds
    if (handleMove(position)) {
        setTimeout(() => {
            alert('O jogo acabou! - O vencedor foi o jogador ' + (playerTime + 1));
        }, 10);

    }

    //Atualiza o quadrado
    updateSquare(position);
}

// ===== ATUALIZAR QUADRADO NA TELA =====
function updateSquare(position){
    let square = document.getElementById(position.toString()); //Pega a posição do quadrado clicado
    let symbol = board[position]; //Pega o símbolo para exibir na tela
    square.innerHTML = `<div class="${symbol}"></div>` //Exibe o símbolo na tela
}

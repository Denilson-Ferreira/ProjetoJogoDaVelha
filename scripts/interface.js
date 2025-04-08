document.addEventListener('DOMContentLoaded', () => {
    let squares = document.querySelectorAll(".square");

    squares.forEach((square) => {
        square.addEventListener('click', handleClick);
    });

    const restartButton = document.getElementById('restart-button');
    restartButton.addEventListener('click', () => {
        resetGame();
        updateSquares();
        document.getElementById('winner-message').innerText = '';
    });
});

function handleClick(event) {
    let square = event.target;
    let position = square.id;

    if (handleMove(position)) {
        let winner = symbols[playerTime];
        document.getElementById("winner-message").innerText = `O jogador "${winner.toUpperCase()}" venceu!`;
    }

    updateSquares();
}

function updateSquares() {
    let squares = document.querySelectorAll(".square");
    squares.forEach((square) => {
        let position = square.id;
        let symbol = board[position];
        square.innerHTML = symbol ? `<div class='${symbol}'></div>` : '';
    });
}
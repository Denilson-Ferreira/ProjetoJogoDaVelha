let board = ['', '', '', '', '', '', '', '', ''];
let playerTime = 0;
let symbols = ['o', 'x'];
let gameOver = false;

function handleMove(position) {
    if (gameOver) return false;

    if (board[position] == '') {
        board[position] = symbols[playerTime];
        gameOver = isWin();

        if (!gameOver) {
            playerTime = 1 - playerTime;
        }
    }

    return gameOver;
}

function isWin() {
    let winStates = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];

    for (let seq of winStates) {
        const [a, b, c] = seq;
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            return true;
        }
    }

    return false;
}

function resetGame() {
    board = ['', '', '', '', '', '', '', '', ''];
    playerTime = 0;
    gameOver = false;
}
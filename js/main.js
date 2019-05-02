$('.chessboard td').on('click', function (event) {
    event.preventDefault();
    showVariantsMovesInChessboard(event);
});

function showVariantsMovesInChessboard(event) {
    let selectedCell = $(event.target);
    clearChessboard();
    selectedCell.css('background-color', 'blue');
    let originalPosition = selectedCell.attr('value');
    
    calculateMoves(originalPosition).forEach(value => { $(`td[value='${value}']`).css('background-color', 'green') });
}

function calculateMoves(originalPosition) {
    let moves = [];
    let positionX = originalPosition[0].charCodeAt();
    let positionY = Number(originalPosition[1]);

    if (!(positionX > 'H'.charCodeAt() || positionY > 8 || positionY < 1)) {
        let movesX = [2, 1, -1, -2, -2, -1, 1, 2];
        let movesY = [1, 2, 2, 1, -1, -2, -2, -1];

        for (let index = 0; index < movesX.length; index++) {
            let x = positionX + movesX[index];
            let y = positionY + movesY[index];

            if (x <= 'H'.charCodeAt() && x >= 'A'.charCodeAt() && y <= 8 && y >= 1) {
                moves.push(String.fromCharCode(x) + y);
            }
        }
    }

    return moves;
}

function clearChessboard() {
    $('.chessboard tbody tr:nth-child(odd) td:nth-child(even)').css('background-color', 'black');
    $('.chessboard tbody tr:nth-child(even) td:nth-child(odd)').css('background-color', 'black');
    $('.chessboard tbody tr:nth-child(odd) td:nth-child(odd)').css('background-color', 'white');
    $('.chessboard tbody tr:nth-child(even) td:nth-child(even)').css('background-color', 'white');
}
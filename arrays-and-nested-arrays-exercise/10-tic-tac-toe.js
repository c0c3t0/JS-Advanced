function solve(arrOfArr) {
    let field = [['false', 'false', 'false'], ['false', 'false', 'false'], ['false', 'false', 'false']];
    let player = 'X';
    let isWinner = false;
    let freeCells = 9;

    while (arrOfArr.length !== 0) {
        let move = arrOfArr.shift();
        let row = move[0], col = move[move.length - 1];

        if (field[row][col] !== 'false') {
            console.log('This place is already taken. Please choose another!');
            continue;
        } else {
            field[row][col] = player;
            freeCells -= 1;
            checkForWinner(field, player);
        }
        
        if (isWinner) {
            console.log(`Player ${player} wins!`);
            printMatrix(field)
            break;
        }

        if (player === 'X') {
            player = 'O';
        } else {
            player = 'X';
        }


        if (freeCells === 0) {
            console.log('The game ended! Nobody wins :(')
            printMatrix(field)
            break;
        }
    }

    function checkForWinner(field, player) {
        for (let i = 0; i < field.length; i++) {
            if (field[i][0] === player && field[i][1] === player && field[i][2] === player) {
                isWinner = true;
                break;
            }
            if (field[0][i] === player && field[1][i] === player && field[2][i] === player) {
                isWinner = true;
                break;
            }
        }
        if (!isWinner) {
            if ((field[0][0] === player && field[1][1] === player && field[2][2] === player) || (field[2][0] === player && field[1][1] === player && field[0][2] === player)) {
                isWinner = true;
            }
        }
    }

    function printMatrix() {
        for (let row = 0; row < field.length; row++) {
            console.log(field[row].join('\t'));
        }
    }
}


solve(["0 1", "0 0", "0 2", "2 0", "1 0", "1 1", "1 2", "2 2", "2 1", "0 0"]);
solve(["0 0", "0 0", "1 1", "0 1", "1 2", "0 2", "2 2", "1 2", "2 2", "2 1"]);

solve(["0 1", "0 0", "0 2", "2 0", "1 0", "1 2", "1 1", "2 1", "2 2", "0 0"]);
function solve(arrOfArrs) {
    let mainDiagonal = 0, antiDiagonal = 0;
    let l = arrOfArrs.length

    for (let i = 0; i < l; i++) {
        mainDiagonal += arrOfArrs[i][i];
        antiDiagonal += arrOfArrs[i][l - i - 1];
    }
    console.log(`${mainDiagonal} ${antiDiagonal}`);
}

solve([[20, 40],
    [10, 60]]);

solve([[3, 5, 17],
    [-1, 7, 14],
    [1, -8, 89]]);
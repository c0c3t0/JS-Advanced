function spiralMatrix(r, c) {
    let arr = Array(r).fill(null).map(() => Array(c).fill(0));
    let row = 0;
    let col = 0;
    let rowEnd = r - 1;
    let colEnd = c - 1;
    let counter = 1;

    while (col <= colEnd && row <= rowEnd) {
        for (let i = col; i <= colEnd; i++) {
            arr[row][i] = counter;
            counter++;
        }
        row++;

        for (let i = row; i <= rowEnd; i++) {
            arr[i][colEnd] = counter;
            counter++;
        }
        colEnd--;

        for (let i = colEnd; i >= col; i--) {
            arr[rowEnd][i] = counter;
            counter++;
        }
        rowEnd--;

        for (let i = rowEnd; i >= row; i--) {
            arr[i][col] = counter;
            counter++;
        }
        col++;
    }

    for (let row = 0; row < arr.length; row++) {
        console.log(arr[row].join(' '));
    };
}

spiralMatrix(5, 5);
spiralMatrix(3, 3);
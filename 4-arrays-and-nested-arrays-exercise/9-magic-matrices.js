function solve(arrOfArr){
    let rowSum = arrOfArr[0].reduce((a,b) => a+b);

    for (let i = 0; i < arrOfArr.length; i++) {
        let colSum = 0;

        for(let j = 0; j < arrOfArr.length; j++) {
            colSum += arrOfArr[j][i];
        }
        if (rowSum !== colSum) {
            return false;
        }
    }
    return true;

}

// solve([[4, 5, 6],
//     [6, 5, 4],
//     [5, 5, 5]]);
solve([[11, 32, 45],
    [21, 0, 1],
    [21, 1, 1]]);
// solve([[1, 0, 0],
//     [0, 0, 1],
//     [0, 1, 0]]);
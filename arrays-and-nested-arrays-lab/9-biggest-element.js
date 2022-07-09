function solve(arrOfArr) {
    let result = [];

    for (let i = 0; i < arrOfArr.length; i++) {
        result.push(Math.max.apply(null, arrOfArr[i]));
    }
    console.log(Math.max.apply(null, result));
}

solve([[20, 50, 10], [8, 33, 145]]);
solve([[-20, -50, -10], [-8, -33, -145]]);
solve([[3, 5, 7, 12], [-1, 4, 33, 2], [8, 3, 0, 4]]);
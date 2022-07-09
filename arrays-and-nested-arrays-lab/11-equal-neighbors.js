function solve(arrOfArrs) {
    let neighbors = 0;

    for (let row = 0; row < arrOfArrs.length; row++) {
        for (let col = 0; col < arrOfArrs[row].length; col++) {
            if (row < arrOfArrs.length - 1) {
                if (arrOfArrs[row][col] == arrOfArrs[row + 1][col]) {
                    neighbors++;
                }
            }
            if (col < arrOfArrs[row].length) {
                if (arrOfArrs[row][col] == arrOfArrs[row][col + 1]) {
                    neighbors++;
                }
            }
        }
    }
    return neighbors;
}

console.log(solve([
    ['2', '3', '4', '7', '0'],
    ['4', '0', '5', '3', '4'],
    ['2', '3', '5', '4', '2'],
    ['9', '8', '7', '5', '4']]));

console.log(solve([
    ['2', '2', '5', '7', '4'],
    ['4', '0', '5', '3', '4'],
    ['2', '5', '5', '4', '2']]));

console.log(solve([
    ['yo', 'ho'],
    ['6', '6'],
    ['6', 6]]));
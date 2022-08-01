function solve(arr) {
    sortedArr = arr.sort((a, b) => a - b);
    haftArr = Math.floor(sortedArr.length / 2);
    return sortedArr.slice(haftArr);
}

solve([4, 7, 2, 5]);
solve([4, 7, 2, 5, 99]);

solve([3, 19, 14, 2, 7, 19, 6]);
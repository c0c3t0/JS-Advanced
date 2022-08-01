function solve(arr) {
    let result = [];

    let sorted = arr.sort((a, b) => a - b);

    while (arr.length !== 0) {
        result.push(sorted.shift());
        result.push(sorted.pop())
    }

    return result;
}

solve([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]);
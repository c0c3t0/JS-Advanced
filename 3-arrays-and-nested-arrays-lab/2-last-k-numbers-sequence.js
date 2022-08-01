function solve(n, k) {
    let sequenceLength = Number(n);
    let num = Number(k);
    let result = [1];

    for (let i = 1; i < sequenceLength; i++) {
        let startIndex = Math.max(0, i - num);
        let numsForSumming = result.slice(startIndex, startIndex + num);
        let currentNumber = numsForSumming.reduce((a, b) => a + b, 0);
        result.push(currentNumber);
    }
    return result;
}

solve(6, 3);
solve(8, 2);
solve(10, 4);
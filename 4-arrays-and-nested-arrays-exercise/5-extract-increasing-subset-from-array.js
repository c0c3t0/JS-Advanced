function solve(arr) {
    let result = [arr[0]];
    arr.reduce((acc, val) => {
        if (val >= acc) {
            result.push(val);
            acc = val;
        }
        return acc;
    });
    return result;
}

solve([1,
    3,
    8,
    4,
    10,
    12,
    3,
    2,
    24]);
solve([1,
    2,
    3,
    4]);
solve([20,
    3,
    2,
    15,
    6,
    1]);
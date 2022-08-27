function sum(arr) {
    let sum = 0;
    for (let num of arr) {
        sum += Number(num);
    }
    return sum;
}

let arr = [1, 2]
sum(arr)

module.exports = sum;
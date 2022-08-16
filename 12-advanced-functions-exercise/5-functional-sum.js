function add(num) {
    let sum = 0;

    function inner (nextNum) {
        sum += nextNum;
        return inner;
    }
    
    inner.toString = () => {
        return sum;
    }
    return inner(num);
}

console.log(add(1).toString());
console.log(add(1)(6)(-3).toString());
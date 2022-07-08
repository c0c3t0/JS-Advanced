function solve(arr) {
    let sortedArr = arr.sort((a, b) => a.localeCompare(b));
    let orderNumber = 1;

    sortedArr.forEach((name) => {
        console.log(`${orderNumber}.${name}`);
        orderNumber++;
    });
}

solve(["John", "Bob", "Christina", "Ema"])
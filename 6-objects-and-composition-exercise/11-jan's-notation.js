function solve(arr) {
    let numArray = [];
    for (let i = 0; i < arr.length; i++) {
        if (Number(arr[i])) {
            numArray.push(arr[i]);
        } else {
            if (numArray.length < 2) {
                return console.log('Error: not enough operands!');
            }
            calc(numArray, arr[i]);
        }
    }

    if (numArray.length > 1) {
        console.log('Error: too many operands!');
    } else if (numArray.length === 1) {
        console.log(numArray.toString());
    }

    function calc(nums, operator) {
        if (operator === '+') {
            numArray.push(nums.pop() + nums.pop())
        } else if (operator === '-') {
            let rightOperant = nums.pop();
            let leftOperant = nums.pop();
            numArray.push(leftOperant - rightOperant);
        } else if (operator === '*') {
            numArray.push(nums.pop() * nums.pop());
        } else if (operator === '/') {
            let rightOperant = nums.pop();
            let leftOperant = nums.pop();
            numArray.push(leftOperant / rightOperant);
        }
    }
}

// solve([3, 4, '+']);             // 7

// solve([5, 3, 4, '*', '-',]);    // -7

// solve([15, '/']);               // not enough operands

solve([31, 2, '+', 11, '/']);   // 3

solve([-1, 1, '+', 101, '*', 18, '+', 3, '/'])  //6
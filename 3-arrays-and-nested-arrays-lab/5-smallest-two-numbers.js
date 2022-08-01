function solve(arr) {
    nums = arr.sort((a, b) => a - b);
    console.log(nums.slice(0, 2).join(" "));
}

solve([30, 15, 50, 5]);
solve([3, 0, 10, 4, 7, 3]);
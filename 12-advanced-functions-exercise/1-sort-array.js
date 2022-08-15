function sorting(arr, type) {
    return type === 'asc' ? arr.sort((a, b) => a - b) : arr.sort((a, b) => b - a);
}

console.log(sorting([14, 7, 17, 6, 8], 'asc'));
console.log(sorting([14, 7, 17, 6, 8], 'desc'));
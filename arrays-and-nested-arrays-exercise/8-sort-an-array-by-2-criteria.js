function solve(arr) {
    let sorted = arr.sort((a, b) => a.length - b.length || a.localeCompare(b));
    console.log(sorted.join("\n"));
}
solve(['alpha',
    'beta',
    'gamma']);
solve(['Isacc',
    'Theodor',
    'Jack',
    'Harrison',
    'George']);
solve(['test',
    'Deny',
    'omen',
    'Default']);
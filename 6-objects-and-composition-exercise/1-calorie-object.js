function solve(arr) {
    let calorieObject = {};

    while (arr.length !== 0) {
        calorieObject[arr.shift()] = Number(arr.shift())
    };
    console.log(calorieObject);
}

solve(['Yoghurt', '48', 'Rise', '138', 'Apple', '52'])
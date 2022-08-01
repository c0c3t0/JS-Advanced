let items = (array) => {
    let numbersArray = array.map(Number);

    let sum = numbersArray.reduce((a, b) => a + b);
    let inverseValueSum = numbersArray.reduce((a, b) => a + 1/b, 0);
    let stringConcat = numbersArray.join('');

    console.log(sum);
    console.log(inverseValueSum);
    console.log(stringConcat);
}

items([2, 4, 8, 16])
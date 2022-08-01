function sameNumbers(num) {
    let inputNumber = num.toString();
    let allTheSame = true;
    let sum = 0;
    const digitToCompare = inputNumber[0];
    const numberLength = inputNumber.length;

    for (let i = 0; i < numberLength; i++) {
        currentNumber = inputNumber[i];
        sum += Number(currentNumber);

        if (currentNumber !== digitToCompare) {
            allTheSame = false;
        }
    }
    console.log(allTheSame);
    console.log(sum);
}

sameNumbers(2222222)
sameNumbers(1234)
function greatestCommonDivisor(num1, num2) {
    while (num1 !== num2) {
        if (num1 > num2) {
            num1 -= num2;
        } else {
            num2 -= num1;
        }
    }
    console.log(num1);
}

greatestCommonDivisor(15, 5)
greatestCommonDivisor(2154, 458)
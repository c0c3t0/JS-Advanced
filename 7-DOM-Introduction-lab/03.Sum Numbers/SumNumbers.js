function calc() {
    let number1 = document.getElementById('num1');
    let number2 = document.getElementById('num2');

    let sum = document.getElementById('sum');
    let sumNumbers = Number(number1.value) + Number(number2.value);
    
    sum.value = sumNumbers;
}

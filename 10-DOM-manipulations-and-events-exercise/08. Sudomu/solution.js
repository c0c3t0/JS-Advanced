function solve() {
    let inputs = Array.from(document.querySelectorAll('input'));
    const checkBtn = document.querySelectorAll('button')[0];
    const clearBtn = document.querySelectorAll('button')[1];

    const table = document.querySelector('table');
    const checkDiv = document.querySelectorAll('#check p');

    console.log(checkDiv);

    clearBtn.addEventListener('click', clear);
    checkBtn.addEventListener('click', checkResult);

    function clear() {
        inputs.forEach(input => (input.value = ''));
        table.style.border = 'none';
        checkDiv.textContent = '';
    }

    function checkResult() {
        let matrix = [
            [inputs[0].value, inputs[1].value, inputs[2].value],
            [inputs[3].value, inputs[4].value, inputs[5].value],
            [inputs[6].value, inputs[7].value, inputs[8].value]
        ];
        isSudomu = true;
        for (let i = 1; i < matrix.length; i++) {
            let row = matrix[i];
            let col = matrix.map(row => row[i]);
            if (col.length != [...new Set(col)].length || row.length != [...new Set(row)].length) {
                isSudomu = false;
                break;
            }
        }
        if (isSudomu) {
            table.style.border = '2px solid green';
            checkDiv.style.color = 'green';
            checkDiv.textContent = 'You solve it! Congratulations!';
        } else {
            table.style.border = '2px solid red';
            checkDiv.style.color = 'red';
            checkDiv.textContent = 'NOP! You are not done yet...';
        }
    }
}
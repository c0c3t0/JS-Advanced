function solve() {

    let selectMenu = document.getElementById('selectMenuTo');

    let binaryOption = document.createElement('option');
    binaryOption.textContent = 'Binary';
    binaryOption.value = 'binary';
    selectMenu.appendChild(binaryOption);


    let hexadeicmalOption = document.createElement('option');
    hexadeicmalOption.textContent = 'Hexadecimal';
    hexadeicmalOption.value = 'hexadecimal';
    selectMenu.appendChild(hexadeicmalOption);

    let selectMap = {
        'binary': num => num.toString(2),
        'hexadecimal': num => num.toString(16).toUpperCase()
    }

    let convertBtn = document.querySelector('#container button');

    convertBtn.addEventListener('click', (evt) => {
        let inputData = document.getElementById('input');
        let outputData = document.getElementById('result');

        outputData.value = selectMap[selectMenu.value](+inputData.value);
    })
}